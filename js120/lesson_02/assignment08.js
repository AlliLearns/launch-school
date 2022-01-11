// Messing around with execution context to get a better image

/*
  Execution context is a concept that refers to the environment 
  in which a function executes...in JavaScript, this is usually
  the value of the `this` keyword.

  Functions have execution context through the `this` keyword.


  I guess...the `this` keyword can be thought of like a variable
  whose value changes when a function is called? 

  JavaScript looks for the properties by the object that called
  the function or method...
  (`this` is usually used in the context of an object property access)

  The execution context is determined by 
  how you invoke a function or method. 
*/

// "use strict"

console.log(this);    // {} (global object?)
                      // {} in strict mode

function func() {return this}
console.log(func());  // {...} (printed the contents of what appears to be the node global object)
                      // `undefined` in strict mode (specific to regular function calls?)

const obj1 = {a: 'a', print() { console.log(this.a)}};
obj1.print();                                         // a in both modes
const print1 = obj1.print(); console.log(print1);     // a (from obj1.print()) and `undefined` (from print1)
const print2 = obj1.print;   console.log(print2);     // [Function: print]
                             console.log(print2());   // `undefined` twice... (from print2() and logging return value of internal console.log)

// Where does the body of a Function get stored when it's created? ([[Code]])
// What, exactly, gets assigned to `print2`? 
// A reference to the Function object? 

const obj2 = {a: 'a', print() { return `${this.a}` }};
console.log(obj2.print);  // [Function: print] 

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// 9.1 Environment Records
// MENTAL MODEL FOR ENVIRONMENT RECORDS
// ERs wouldn't actually be organized like objects in an ECMAScript implementation.
// I'm just using collaborator objects and inheritance to illustrate 
// the relationships that I'm understanding from reading about 
// ECMAScript's description of execution context. 

class environmentRecord {
  outerEnv = null; // null (for a global ER) or an Environment Record instance

  // each of these have their behavior overridden by each type of environment record.
  hasBinding(n) {};
  createMutableBinding(n, d) {};
  createImmutableBinding(n, s) {};
  initializeBinding(n, v) {};
  setMutableBinding(n, v, s) {};
  getBindingValue(n, s) {};
  deleteBinding(n) {};
  hasThisBinding() {};
  hasSuperBinding() {};
  withBaseObject() {};
}

class declarativeEnvironmentRecord extends environmentRecord {
  /*
    Each declarative Environment Record is associated with an ECMAScript program scope containing:
      - variable
      - constant
      - let
      - class
      - module
      - import 
      - function declarations
    A declarative Environment Record binds the set of identifiers defined by the declarations contained 
    within its scope.   
  */    
}

class functionEnvironmentRecord extends declarativeEnvironmentRecord {
  /*
    I think a new one is created when a function is invoked...but I'm not sure. 
    A function ER is a declarative ER that is used to represent the top-level scope of a function. 
    If the function is not an arrow function, its function ER provides a `this` binding. 
    If a function is not an arrow function, and references `super`, its function ER also contains 
      the state that is used to perform `super` method invocations from within the function. 
  */

  thisValue = thisBinding; // The `this` value used for this invocation of the function.
  thisBindingStatus = something; // lexical | initialized | initialized
  functionObject = functionObject; // the function object whose invocation caused this ER to be created.
  newTarget = undefined; // `undefined` if ER was not created by the [[Construct]] internal method. 
                         // `[[Construct]] newTarget` parameter if ER was created by the [[Construct]] internal method.

  bindThisValue(v) {};
  getThisBinding() {};
  getSuperBase() {};
}

class moduleEnvironmentRecord extends declarativeEnvironmentRecord {} // Not going to worry about this right now.

class objectEnvironmentRecord extends environmentRecord {
  /*

  */
}

class globalEnvironmentRecord extends environmentRecord {
  /*
    I think this is created when the program starts...
    before it creates the global object? Or after, since it holds a reference?

  */

  objectRecord = objectEnvironmentRecordInstance;
  declarativeRecord = declarativeEnvironmentRectorInstance;
  globalThisValue = globalObject // The value returned by `this` in global scope (`global` in Node.js).
  varNames = []; // array of strings - contains the names of all global function declarations and variable declarations.


  getThisBinding() {};
  hasVarDeclaration(n) {};
  hasLexicalDeclaration(n) {};
  hasRestrictedGlobalProperty(n) {};
  canDeclareGlobalVar(n) {};
  canDeclareGlobalFunction(n) {};
  createGlobalVarBinding(n, d) {};
  creteGlobalFunctionBinding(n, v, d) {};
}

const objectEnvironmentRecordInstance = {

}

const declarativeEnvironmentRectorInstance = {

}

// 9.1.2 Environment Record Operations
// These are abstract operations that are used in the specification
// to operate upon Environment Records.
function getIdentifierReference(env, name, strict) {}
function newDeclarativeEnvironment(e) {}
function newObjectEnvironment(o, e) {}
function newFunctionEnvironment(f, newTarget) {}
function newGlobalEnvironment(g, thisValue) {}
function newModuleEnvironment(e) {}



// ---------------------------------------
// Execution Contexts look like this...

class ExecutionContext {
  codeEvalState = {}; // any state needed to perform, suspend and resume evaluation of the code associated with this context.
  Function = funcObj; // If this context is evaluating the code of a function object, then the value is the function object.
  Realm = realmRecord; // The Realm Record from which associated code accesses ECMAScript resources.
  ScriptOrModule = record; // The Module Record or Script Record from which associated code originates. 
                           // `null` in the case for the original context created in `InitializeHostDefinedRealm`.
  // ER stands for Environment Record
  lexicalEnvironment = envRecord; //Identifies the ER used to resolve identifier resources made by code within this context.
  variableEnvironment = varRec; // Identifies the ER that holds bindings created by Variable Statements within this context.
}

// Execution context is a specification device that is used to track the runtime evaluation of code by an ECMAScript implementation.
// New execution contexts are created and added to the call stack as...
//  control is transferred from the executable code associated with the currently running execution
//  context to executable code that is not associated with that execution context. 


// -----------------------------------------
// ??? START OF CODE EXECUTION ???
/* 9.5 InitializeHostDefinedRealm()
  - Let `realm` be `CreateRealm()`.
  - Let `newContext` be a new 'execution context'.
  - Set the `Function` of `newContext` to `null`.
  - Set the `Realm` of `newContext` to `realm`.
  - Set the `ScriptOrModule` of `newContext` to `null`.
  - Push `newContext` onto the execution stack; `newContext` is now the running execution context.

  - (let `global`) If the host requires an exotic object to serve as `realm`'s global object, let `global` be such an 
    object created a host-defined manner. Otherwise, let `global` be `undefined`, indicating and ordinary
    object should be created as the global object.
  
  - (let `thisValue`) If the host requires that the `this` binding in `realm`'s global scope return an object other than the
    global object, let `thisValue` be such an object created in a host-defined manner. Otherwise, let 
    `thisValue` be `undefined`, indicating that `realm`'s global `this` binding should be the global object.

  - Perform `SetRealmGlobalObject(`realm`, `global`, `thisValue`).
  - Let `globalObj` be ? SetDefaultGlobalBindings(`realm`).
  - Create any host-defined global object properties on `globalObj`
  - Return NormalCompletion(empty).
*/


// -------------------------------------------------------
// FUNCTION CALL AND THIS BINDING - EXPLICIT CONTEXT
// 
/* 20.2.2.2 Function.prototype.call(thisArg, ...args)
  - Let `func` be this value. (the function object)
  - If IsCallable(func) is false, throw a TypeError exception
  - Perform PrepareForTailCall()
  - Return ? Call(`func`, `thisArg`, `args`).
*/

/* 7.3.13 Call(F, V [, argumentList])
  - If `argumentList` is not present, set `argumentList` to a new empty List.
  - If IsCallable(F) is false, throw a TypeError exception.
  - Return ? F.[[Call]](V, argumentList).
*/

/* 10.2.1 [[Call]](thisArgument, argumentsList)
  - 1. Assert: F is an ECMAScript function object.
  - 2. Let `callerContext` be the running execution context.
  - 3. Let `calleeContext` be PrepareForOrdinaryCall(F, `undefined`).
  - 4. Assert: `calleeContext` is now the running execution context.
  - 5. 
  - Perform OrdinaryCallBindThis(`F`, `calleeContext`, `thisArgument`)
  - ...
*/

/* 10.2.1.2 OrdinaryCallBindThis(F, calleeContext, thisArgument)
  - Let `thisMode` be F.[[ThisMode]].
  - If `thisMode` is lexical, return NormalCompletion(`undefined`).
  - Let `calleeRealm` be F.[[Realm]].
  - Let `localEnv` be the LexicalEnvironment of `calleeContext`
  - If `thisMode` is strict, let `thisValue` be `thisArgument`.
  - Else, 
    - If `thisArgument` is `undefined` or `null` then
      - Let `globalEnv` be `calleeRealm`.[[GlobalEnv]].
      - Assert: `globalEnv` is a global environment record.
      - Let `thisValue` be `globalEnv`.[[GlobalThisValue]].
    - Else, 
      - Let `thisValue` be ! ToObject(thisArgument).
      - NOTE: ToObject produces wrapper objects using `calleeRealm`.
  - Assert: `localEnv` is a function Environment Record.
  - Assert: The Next step never returns an abrupt completion because `localEnv`.[[ThisBindingStatus]] is not initialized.
  - Return `localEnv`.BindThisValue(`thisValue`).
*/

/* 9.1.1.3.1 BindThisValue(V)
  - Assert `envRec`.[[ThisBindingStatus]] is not lexical.
  - If `envRec`.[[ThisBindingStatus]] is initialized, throw a ReferenceError exception.
  - Set `envRec`.[[ThisValue]] to `V`.
  - Set `envRec`.[[ThisBindingStatus]] to initialized.
  - Return V. 
*/




//  Search `Call(` with case sensitivity.
// -------------------------------------------------------
// FUNCTION CALL AND THIS BINDING - METHOD CONTEXT
// 
/* 7.3.20 Invoke(V, P [, argumentsList])
  - Assert: IsPropertyKey(P) is true.
  - If `argumentsList` is not present, set `argumentsList` to a new empty List.
  - Let `func` be ? GetV(V, P).
  - Return ? Call(`func`, V, `argumentsList`).
*/

// -------------------------------------------------------
// FUNCTION CALL AND THIS BINDING - FUNCTION CALLS?
// 13.3.6: Function Calls
/* 13.3.6.1: Runtime Semantics: Evaluation

*/


// IMPORTANT
// -------------------------------------------------------
// FUNCTION CALL AND THIS BINDING - FUNCTION CALLS?
//
/* 10.2.10 FunctionDeclarationInstantiation(func, argumentsList)
  NOTES:
    - When an execution context is established for evaluating an ECMAScript function, a new function ER is created.
    - The bindings for each formal parameter are instantiated in that ER. 
    - Each declaration in the function body is also instantiated.
    - If the function's formal parameters do not include any default value initializers 
      then the body declarations are instantiated in teh same ER as the parameters.
    - If default value parameter initializers exist, a second ER is created for the body declarations.
    - Formal parameters and functions are initialized as part of FunctionDeclarationInstantiation.
    - All other bindings are initialized during evaluation of the function body.
*/


// For reference
// ------------------------------------------------------
// 10.2 ECMAScript Function Objects
// FUNCTION CREATION
/* 10.2.3 OrdinaryFunctionCreate (...)

*/

/* 10.3.3 CreateBuiltinFunction (...)

*/
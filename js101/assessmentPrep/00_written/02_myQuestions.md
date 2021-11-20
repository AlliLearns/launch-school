# Questions and Answers
```
This file is a guess at what sorts of questions could 
come up on the written assessment, based on the study 
guide, study sessions and other context clues. 

These questions were made to test both myself and 
anyone I partnered up with while we worked towards 
getting ready for the written assessment. 
```

## References
- [Student's guess at a mock assessment](https://www.notion.so/mock-assesment-197889906e3a4aec844c9b62fcbb8fd9)
- [Codewars question subset](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5eef3b71-3bc7-457c-8c5b-db7e2b0e9ca5/RB109_Live_Assessment__Codewars_Practice_Problems.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211118T131432Z&X-Amz-Expires=86400&X-Amz-Signature=16c2334c7d0f54e1b95369c2d3e70532e94700e84b89f6592798f0b3093250df&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22RB109%2520Live%2520Assessment_%2520Codewars%2520Practice%2520Problems.pdf%22&x-id=GetObject)

## Questions
``` js
// What will the following code output and why?
const num = 3;
if (num === 10) 
  console.log('num is 10.');
  console.log('num is even.');
```

<details><summary>ANSWER</summary>
<p>

The code will output `num is even` because
on line 2 we are checking if `num === 10`.
Since it evaluates to `false`, only the 
code on line 4 is executed.   
When JavaScript evaluates if statements, 
only the first line after the statement 
will be included as part of the if block 
when curly braces `{}` are excluded. 
</p>
</details>



<hr>
<br>
<hr>

``` js
// Describe what's happening in this snippet.
let x;
let y = 3;
x = 10;
y = x;
```
<details><summary>ANSWER</summary>
<p> 

In line 1 we are declaring the variable `x`. 
In line 2 we are declaring the variable `y` and initializing it to `3`.
In line 3 we are assigning the value 10 to the variable `x`.
In line 4 we are reassigning the variable `x` to `y`.
</p>
</details>



<hr>
<br>
<hr>

``` js
// What will the following code output and why?
const arr1 = [3, 5];
const arr2 = [3, 5];
console.log(arr1 === arr2);
console.log(arr1 == arr2);
```

<hr>
<br>
<hr>

``` js
// What will the following code output and why?
let x;
let z = [x];
x = 10;

console.log(z);
```

<hr>
<br>
<hr>
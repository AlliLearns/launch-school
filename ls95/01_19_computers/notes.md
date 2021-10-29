# How Computers Work

Notes from the CrashCourse [Computer Science](https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo) video series. 

## 00_Crash Course Computer Science Preview
- Introduces the video series. 
- Won't teach us how to program.

## 01_Early Computing
- Some history about where computers got their start. 
- An early 'computer' was the abacus, something like a hand-operated calculator. 
- (Each row of an abacus represents an order of magnitude, with 1s at the bottom.)
- The goal of this and other devices was to make keeping track of and manipulating data easier.
- The first 'computers' were people whose job it was to perform calculations. 
- A machine called the Step Reckoner was created to perform simple addition and subtraction.
- (and by extension, multiplication and division)
- A difference engine was designed to approximate polynomials. 
- While the difference engine was under construction, its creator thought up the 'analytical engine'
- The analytical engine was meant to be a general purpose computer. 
- His wife made algorithms for this machine to solve, though it was never built. 
- Large populations in America required a faster way to process large amounts of data to compute the census. 
- An electro-mechanical machine used holes in punch cards to complete circuits, which allowed for automated counting.
- This Tabulating Machine gained widespread use. 
- It was sufficient for the world's counting needs until around the mid 1900s. 

## 02_Electronic Computing
- More computer history.
- Electromechanical relays controlled circuit connections for room-sized electromechanical computers.
- Electromechanical Relays: 
    - Electronically-controlled mechanical switches. 
    - A relay has an open switch in the housing.
    - A control wire connects to a coil of wire that's also inside of the relay. 
    - When current flows through the coil, an electromagnetic field is created. 
    - (An inductor creating a magnetic field?)
    - The field attracts a metal arm inside of the relay, drawing it close and snapping the switch shut. 
    - The on-off switching can connect current to other circuits or something like a motor.
    - A motor could turn a gear and increment a count. 
    - Computations took time. 
    - One computer made this way would take 3 seconds for addition and over a minute for more complicated computations.
- Plagued by slow switching speed and mechanical wear, large computers had to deal with long days of program computation and constant maintenance. 
- The vacuum tube eventually replaced the electromechanical relay, which had a much higher switching speed and much less wear since they had no moving parts. 
- Vacuum Tubes: 
    - Two electrodes inside an airtight glass bulb. 
    - One electrode could be heated and emit electrons through a process called 'thermionic emission.'
    - The other electrode could then attract these electrons and current would flow through it. 
    - But the other electrode had to have a positive charge on it to attract those emitted electrons. 
    - A third control electrode was added - it would sit between the other two.
    - Applying a positive charge to the control electrode would permit electron transfer across the vacuum.
    - A negative applied charge to the control wire would prevent flow.
    - (So, the emitter is always on; always emitting electrons and the control electrode's charge determines the output from the third electrode.) 
- This also marked the shift to the first programmable computer.
- Plugs in switchboards allowed for a change in pathways for electricity, which changed the program. 
- Vacuum tube based computing quickly reached its limits. 
- The transistor replaced the vacuum tube. 
- Smaller than vacuum tubes, computers could be made much smaller as well.
- Transistors: 
    - Also a switch that can be open or closed via applying electrical power via a control wire. 
    - Typically have two electrodes that are separated by a material that can sometimes conduct electricity and other times resist it - a semiconductor.
    - A control wire attaches to a 'gate electrode'.
    - By changing the electrical charge of the gate, the conductivity of the semiconductor can be manipulated.
    - This allows current to either flow through the semiconductor or be stopped.
    - They can switch states millions of times per second and can run for decades. 
 

## 03_Boolean Logic and Logic Gates
- Boolean algebra uses the values of 'true' and 'false' to handle logical operations.
- Transistors provide data in terms of on and off - or 'true' and 'false', which makes for convenient application.
- We can easily build out boolean logic through transistors.
- The control wire is the input and the wire coming from the electrode after the transistor as the output. 
- A single transistor passes on for on and off for off. 
- Three operators in boolean algebra: NOT, AND and OR. 
- NOT negates a single boolean value - flips it. 
    - Moving the transistor's output electrode to before the transistor instead of after and connecting after to ground can achieve this.
    - In this case, the gate electrode acts like a sluice gate: 
    - Closing the gate means that the incoming current has to leave through the output wire.
    - Opening the gate means that current can flow to ground and it ignores the output wire. 
- AND takes two inputs and has a single output. Both inputs have to be on for output to be on. 
    - This is achieved with two transistors in series. 
    - If both gate electrodes are on, then current can flow all the way from the input to the output. 
- OR takes two inputs and has a single output. Either output has to be on for output to be on.
    - This is achieved with two transistors in parallel. 
    - If either gate electrode is on (ot both), a path to the output exists, and the circuit is 'true'.
- We can wrap each of these in their own little symbol and use them to build more complicated logical operations.
- An example is the XOR operation - which is like OR but will output false if both inputs are true. 
    - Run both inputs through an AND then NOT the output.
    - Run both inputs through an OR.
    - Run the output of the NOT and the OR into another AND and you'll get XOR. 

## 04_Representing Numbers and Letters with Binary
- How do we represent information with just two values? 
- With MATH. (yaaaay)
- (Runs over how to count up with binary.)
- (Runs over how to represent decimal in binary.)
- Each digit in binary is represented by an increasing power of 2.
- (Just like each digit in decimal is represented by an increasing power of 10.)
- Demonstrating the power of each digit in a binary number:   

| 128's | 64's | 32's | 16's | 8's | 4's | 2's | 1's |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |  
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

- Demonstrating how to add in binary:
    - 0 + 0 = 0 [0]
    - 1 + 0 = 1 [1]
    - 1 + 1 = 10 [2]
    - 1 + 1 + 1 = 11 [3]
    - The 1 (in the 2's place) in the last two operations will get carried to the next calculation.

| - | 1 | 1 | - | 1 | 1 | 1 | - | (dec) |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |  
| 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 | (183) |
| 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | (19)  |
| 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | (202) |

- Each digit is called a `bit`.
- Eight bits is a `byte`. 
- A `32-bit` computer operates in chunks of 32 bits.
- A `64-bit` computer operates in chunks of 64 bits.
- Each of these bit strings can represent a finite (if large) number of unique states. 
- Computers must label locations in memory, known as addresses, in order to store and retrieve values.
- Decimal numbers (`floating-point` numbers) also have to be represented:
    - The most common representation is the IEEE 754 standard. 
    - Stores values sort of like scientific notation, represented with significand and exponent.  
    - In a 32-bit floating point number, the first bit (the left-most or largest) is used for the sign (+ or -). 
    - The next eight bits are used to store the exponent.
    - The remaining 23 bits are used to store the significand. 
- Computers also have to represent text: 
    - Computers use numbers to represent letters and other characters. 
    - ASCII (`The American Standard Code for Information Interchange`) uses 7 bits to represent up to 128 characters.
    - But it could only represent English. We needed more room to encode more symbols.
    - National character codes were created but they couldn't communicate with other languages. 
    - And Chinese and Japanese languages contain thousands of characters. 
    - `Unicode` is the replacement for all of these and it uses 16 bits to represent the world's symbols. 
- Binary number sequences are also used to encode things like color and sound. 

## 05_How Computers Calculate - The ALU
- The goal of a computer is computation.
- That is, to manipulate numbers in a structured and purposeful way. 
- These operations are handled by a computer's `Arithmetic and Logic Unit` (the ALU).
- The ALU is the mathematical brain of a computer. It performs every computation.
- The ALU is really two units in one, an arithmetic unit and a logic unit.  
- The arithmetic unit is responsible for handling all the numberical operations. 
- We're going to build an ADDER using the logic gates introduced into the last video. 
- There are only four input combinations: 
    - 0 + 0 = 0
    - 1 + 0 = 1
    - 0 + 1 = 1 
    - (These match the behavior of an XOR gate. We can use that as our 1-bit adder.)
    - 1 + 1 = 10 (but there's only one output we can have, so what happens to the carry?)  
    - We need an extra wire for the carry bit. 
    - So we have two outputs - which implies that we need another gate. 
    - The carry bit will be 1 only when both inputs are 1 - which matches the function of an AND gate. 
    - So we put an XOR and a AND gate in parallel. 
    - This thing is called a `half-adder`.
- If you want to add more than two 1-bit numbers, you need a `full adder`.
    - Takes 3 bits as input. 
    - Still only need two output wires: the carry and the sum. 
    - Do the following: 
        - Take two half-adders. 
        - Put input A and B into the first half adder.
        - Put the input C and the Sum of the first half-adder into the second half-adder.
        - That will give the full sum. 
        - OR the outputs of both half-adder carries to see if the total sum has a carry or not. 
- To add two 8-bit numbers together, you need one half-adder and 7 full adders.
- Each input from each digit is fed into the next full adder along with the carry from the previous add. 
- This thing is called an `8-bit Ripple Carry Adder` because the carry ripples down. 
- If the carry bit is set at the end of the chain then that means the sum was too large to fit into 8 bits.
- We have an overflow.
- An `overflow` occurs when the result of an addition is too large to be represented by the number of bits you're using.
- Ripple adders take a little bit of time to complete the computation, but it's enough to warrent an alternative method. 
- Modern computers use what's called a `Carry-Look-Ahead Adder`.
- The ALU's arithmetic unit also has circuits for other math operations. 
    - ADD
    - ADD with CARRY 
    - SUBTRACT
    - SUBTRACT with BORROW
    - NEGATE
    - INCREMENT
    - DECREMENT
    - PASS THROUGH
- Multiplication and division are achived with addition and subtraction in simple processors.
- Phones and computers usually have dedicated circuits for these operations. 
- The logic unit takes care of logical operations like AND, OR and NOT. 
- It also performs simple numerical tests, like checking if a number is negative. 
- Our example ALU takes two 8-bit inputs and a 4-bit code that specifies what operation needs to be performed. 
- It also has one 8-bit output and a series of single-bit flags for particular states and statuses like:
    - Overflow (final carry output)
    - Zero (short-hand output if our result was 0)
    - Negative (set for the result of comparisons)

## 06_Registers and RAM
- `Random Access Memory` doesn't keep its data when the power turns off.
- `Persistent Memory` does. 
- Loop the output of an OR gate back onto one of its inputs and you get memory for 1.
- Loop the output of an AND gate back onto one of its inputs and you get memory for 0.
- The AND-OR Latch is a circuit that does the following: 
    - Takes two inputs called `set` and `reset`.
    - One input, `reset`, goes into a NOT gate.
    - The other input `set` goes into an OR gate. The other input for the OR gate is the circuit's output.
    - The outputs of the NOT and the OR are inputs for an AND gate.
    - The otuput of the AND gate is the circuit output. 
    - High on the `set` input will set the output to a 1. 
    - High on the `reset` input will set the output to a 0. 
    - If both are low, the circuit just resets whatever was last put into it. 
    - It remembers a single bit of information. 
- Expanding the circuit to a `Gated Latch` allows us to use one input for data manipulation.
    - Two input wires: one for `input data` and one for `write enable`.
    - The `input data` is shared between the input of an AND and a NOT.
    - The `write enable` is shared between our last AND and another AND below it. 
    - The top AND has inputs `input data` and `write enable`.
    - The bottom AND has inputs `!input data` and `write enable`.
    - The output from the top AND goes into the `set` input of the AND-OR Latch.
    - The output from the bottom AND goes into the `reset` input of the AND-OR Latch.
    - When the `write enable` wire is set high, the `input data` wire can have its value carried to the output.
- Eight Gated Latches side by-side allows for the storage of an 8-bit number.
- A group of latches operating like this is called a `register`, which holds a single number. 
- The number of bits (of Gated Latches) on a register is called its width. 
- (64-bit computers operate on data that are chunks of 64-bits long.)
- (Does this mean we work with 64-bit wide registers? They aren't very clear on that.)
- To write to a register, all write enable wires have to be set to high. 
- So a register shares one input wire for this. 
- Each Gated Latch on the register has one wire for its input data. 
- 64-bit registeres (okay maybe answers my question above.) are laid out in 8x8 grids of Gated Latches. 
- (she jumps to 256 bits in a 16 x 16 grid of Gated Latches?)
- To activate any one latch, we must turn on the corresponding row and column wire. 
- (There is additional circritury on the grid node that she didn't mention before.)
- I'm having a hard time understanding what I'm looking at in this image. 
    - Looks like `write enable` still comes from 'somewhere else...' (register input?)
    - The `row wire` and the `column wire` are only used to select the node at their intersection?
    - They make the leap that because only one intersection can exist at a time, we can use a single, shared wire for data...(register input?) 
    - Sounds like it - none of the other nodes will care about what's on the write enable and the data input if only one intersection can be active at a time. 
- I think she used this section to logic out how many wires a register actually needs to perform its job.
- She reduced the count from 256 wires down to 35 wires: 
    - One data input wire
    - One write enable wire
    - One read enable wire
    - Sixteen row wires.
    - Sixteen column wires. 
- Memory addresses take care of deciding which row/column combination is needed to select the right bit (what I was calling a node).
- The address is 8 bits long - 4 used to identify the row and 4 for the column. 
- She calls the next bit of needed hardware a 'multiplexer' but the video comments disagree with her naming and call it a 'decoder' with the claim that a multiplexer is something else. So I'll need to look into that. 
- (I'm going to end up reorganizing these notes - this video wasn't as great as the others at telling a story that made sense but this material isn't easy to explain.)
- Two multiplexers are needed, one for the rows and one for the columns.
- Feed each a 4-bit number (the desired row and column address) and you get one of the 16 outputs to light up in each. 
- We abstract up to a unit of 256-bit memory. (I guess which has 16, 16-bit wide registers? Or maybe 4 registers in a grid if they're each 8 bits?)
- This memory unit has: 
    - 8-bit address (8-wire addresss specifier).
    - A data wire that's used to read and write data. 
    - A write enable wire.
    - A read enable wire. 
    - Put 8 of these in a row. 
    - You have one read enable wire.
    - You have one write enable wire.
    - You have 8 wires for an address.
    - You have 8 wires for data (read and write).
    - We can now store an 8-bit number they say? One bit from 256-bit memory? I don't get that.
    - We feed the same address to each of the 8 memory units. 
    - At the same time, each one saves one bit of the number to data... (so was that a read?)
- We abstract up again to a memory bank of RAM.
    - 8-bit data
    - 8-bit address input
    - 1 read enable wire
    - 1 write enable wire
    - Address is 0 through 15.
    - Data is...8 bits. 
- Now they go outside-in: 
    - RAM stick with 8 memory modules soldered onto the board. 
    - Zoom in and see each module has 32 squares of memory. 
    - Zoom in and see each square of memory has 4 blocks. 
    - Zoom in again and see that each block is a matrix of (128 by 64? a rectangle?) bits. 
    - 8192 bits in total? (total of what? the block?)
    - Each of our 32 squares has 4 blocks, so that's 32,768 bits. 
    - With 32 squares we have roughly 1 million bits per module. 
    - This board has around 8 million bits - it's a 1MB stick of RAM.
    - Which was the typical amount of memory in the 1980's. 
- All memory stores information in matricies of memory cells. 


<!-- ## 07_The Central Processing Unit (CPU)
- A CPU's job is to execute programs.
- Programs are made up of a series of individual operations - called `instructions`.
- If these operations are mathematical instructions, the CPU will configure ALU to do the operataion.
- Or it might be a memory instruction, in which case the CPU will talk with memory to read/write values. 
- We'll be looking at the `microarchitecture` of a CPU, which show the CPU as functional blocks.
- We'll first need memory - we'll use the memory bank of RAM we developed in the last video. 
- This RAM will only have 16 memory locations, each containing 8 bits.
- Our processor will also be given four 8-bit memory registers (A, B, C and D).
- These registers are used to temporarialy store and manipulate values. 
- An ID is assigned to each instruction that our CPU supports (instructions that it understands)
- In this hypothetical example, the first 4 bits are used to sore the `operation code`. 
- The final 4 bits specify where the data for that operation should come from. 
- We also need a register that will keep track of where we are in our program, the `instruction address register`.
- And we'll need a register called the `instruction register` which will store the current instruction. 
- There are phases that the CPU's operation will undergo: 
    - `Fetch`, which will retrieve the next instruction from RAM.
    - (We wire our instruction address register to our RAM module.)
    - (The RAM says, okay, and writes the Data at the given address into the instruction register.)
    - `Decode` phase will figure out what the instruction is. 
    - (The `opcide`, the first 4 bits in the instruction register, will ID which instruction the CPU needs.)
    - (The `RAM address` is the last 4 bits and will specify (data?))
    - (The instructions are decoded and interpreted by a `Control Unit` which is also made out of logic gates.) -->

/**
 * Javascript - Hoisting (var, let and const) - All are hoisted in Javascript 🚀

🚩 Don't say that, variables are moved to top of the program

These are very important in Javascript and would like to thank Akshay Saini 🚀 you have made everything clear.

If you study something, go deep into those concepts and study everything, that will persist for long time and can be applied whenever it is required.

🔹 Understanding Hoisting and its impact on variable and function declarations

Javascript programs will execute in two phases.
1️⃣ Phase 1: Memory allocation/creation
2️⃣ Phase 2: Code execution

During phase 1: Memory allocation
👉 Javascript engine will create the global execution context and allocate memory for all variables and functions only for the global level properties.
👉 All variables will get a special values called "undefined", even with the arrow function.
👉 Complete function itself will be copied for the normal functions using function name of it.

During Phase 2: Code execution
👉 JS engine will go line by line and execute the code.
👉 Assign with actual values for those variables already had "undefined".
👉 When any function invoked, new execution context will be created and same 2 phases will be executed there as well.

This is only called "hoisting" in Javascript 🙏

🔷 Hoisting will happen bit different with "var", "let and const" types.
👉 "var" - these variables and functions are attached in global scope or local scope of that execution context.
 👉 "let and const" - variables and functions are attached in the separate memory space (like script, block, local scope) of that execution context.
👉 We get an error if we try to access let and const variables before initializing them as they are hoisted in a separate space, that is also called "Temporal Dead Zone".

🔹 The differences between let, const, and var in variable declaration and scope
With above details, added few difference below for let, const and var -
✔ var
1️⃣ these variables will have function scope or global scope based on where the variables are declared.
2️⃣ var variables can be updated and re-declared within its scope.
3️⃣ these variables can be declared without any initial value.
✔ let
1️⃣ these variables are allocated at the block scope
2️⃣ let variables can be updated but not re-declared
3️⃣ these variables can be declared without any initial value.
✔ const
1️⃣ these variables also are allocated at the block scope
2️⃣ const variables can't updated or can't be re-declared.
3️⃣ these variables must have an initial value.

🔷 Block: It is used to combined statements together and provided to condition expect at least a single line of code.
sample code
if (true) {
    let y = 10;
    console.log(y) // it works
  }
  console.log(y) // not defined error
 

"Keep training and keep learning until you get it right"

 */
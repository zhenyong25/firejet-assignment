// Problem 
// We often have strings that contain code as well. 
// However, the default prettier settings do not automatically lint these code sections because prettier by default preserves whitespace in strings 
// Since we know these strings represent code, they can be linted by prettier as well 
// In this exercise, we will be maring strings that we want to lint with the filetype of the string, and linting them with prettier 

// Interview Question 
// 1. Parse the string into an Abstract Syntax Tree (AST)
//     1. Note: Please use babel to convert the code into the AST
//     2. https://babeljs.io/docs/babel-parser
// 2. Using babel traverse, find all the template literals in the string that are prefixed with `/*tsx*/` (In `EXAMPLE 1` below, the template literal is the `console.log(${myText})` expression)
//     1. Hint: Using https://astexplorer.net/ might give you a better idea of what you are looking for
//     2. https://babeljs.io/docs/babel-traverse

// ```jsx
// //EXAMPLE 1
// const myTypescriptString = /*tsx*/`console.log(${myText})`
// ```

// 3. Lint all of the text using the following async function

// ```jsx
// import prettier from "prettier";

// async function lint(code: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const formattedCode = prettier.format(code);
//       resolve(formattedCode);
//     }, Math.random() * 1000); // random delay between 0 and 1 seconds
//   });
// }
// ```

// 4. The final result should be the original code, with all the template literals that were previously prefixed with `/*tsx*/` being linted.
// 5. Identify any edge cases in your proposed solution
// 6. Specify the time complexity and space complexity for your proposed solution

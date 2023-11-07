// Problem 
// We often have strings that contain code as well. 
// However, the default prettier settings do not automatically lint these code sections because prettier by default preserves whitespace in strings 
// Since we know these strings represent code, they can be linted by prettier as well 
// In this exercise, we will be maring strings that we want to lint with the filetype of the string, and linting them with prettier 

// npm install @babel/core @babel/parser
import traverse from "@babel/traverse";

// Step 1 : Parse the string into an AST using babel 
const parser = require("@babel/parser"); 
const code = ``; 

const options = {
    sourceType: "module",
}

const ast = parser.parse(code,options);

// Step 2 : Use babel tranverse to find all the template literals in the string 
// that are prefixed with /*tsx*/ 

traverse(ast, {
    enter(path) {
      if (path.isIdentifier({ name: "n" })) {
        path.node.name = "x";
      }
    },
  });

// const myTypescriptString = /*tsx*/`console.log(${myText})`

// Step 3 
import prettier from "prettier";

async function lint(code: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formattedCode = prettier.format(code);
      resolve(formattedCode);
    }, Math.random() * 1000); // random delay between 0 and 1 seconds
  });
}

// function call 
lint(ast); 

// Step 5: Edge Cases 

// Step 6: Time and Space Complexity 
// Time Complexity:
// Space Complexity: 
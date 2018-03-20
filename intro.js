// assignment statement
a = b * 2;

//statements
//comprised of expressions
//literal value expression 2
//identifer expression b
//arithmetic expression b * 2
//assignment expression / statement a = b * 2
((a) = ((b) * (2)));


//call expression -- foo(c * 3)
//binary operands - b*2 , foo(c *3)

[[a] = [[[b] * [2]]  + [[foo]( [[c] * [3]])]]];

//changing the rules of precedence;
a = b * (2 + foo(c * 3));

//executing a program
//dev console
//interpretative language
//if running line by line, then discover line 2 and throw an error

//compiled language
//more than one pass and figures the program is valid, like scanning through
//an entire language before it ever tries to run line 1.

// javascript is more a compiled language it looks at line 1, and looks at line
//2 and sees and an error and line 1 would never run

a = 2;
2(); //invalid syntax


// Try it Yourself
//dev console
//js.bin
// node.js - to run in the command line
// node -e " " - to evaluate from the command line
// node [filename]

//INPUT & Outputs
//outputs - alert statements
//outputs - console.log statements
//a = 2; result of assignment expression, the console gives the value back
//var b: 2; var statement returns an undefined

//input
var age = prompt('what is your age?');

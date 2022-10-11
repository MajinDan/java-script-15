// //import and export

// import { capitalizeString } from "./string_function";
// const cap = capitalizeString("hello!");

// console.log(cap);

//export to reuse a code block

// const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);

// }

// export {capitalizeString};
// export const foo = "bar";
// export const bar = "foo";

// console.log(capitalizeString)

//use * to import everything from a file

// import* as capitalizeStrings from "capitalizeStrings";

// creating export fallback with export default

// export default function subtract(x,y) {return x - y}

import subtract from "math functions";

subtract(7,4);
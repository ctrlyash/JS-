// Switch case: switch case is used when you want to compare one value against multiple possible values instead of writing many if-else statements.

switch (key) {
    case value:
        
        break;

    default:
        break;
} // Syntax

const month = 3 //key (Keys can also be strings.)

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default: console.log("NOTA");
        break;
} // March

// Note: If we dont use break then whole code after the key is found is executed (except the default case).
// Therefore if we need a single answer we need to break the flow after each case.
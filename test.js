//Difference between const, let and var

let dict = {1: 1, 2: 2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10: "a", 11: "b", 12: "c", 13:"d", 14: "e", 15: "f"}; 

hexR = ""
hexG = ""
hexB = ""

function hexC(){
    let hex = 16; 
    console.log(hex);
    let r = Math.floor(Math.random() * 220);
    console.log(r);
    let rInt = r/hex;
    console.log(rInt);
    let rIntFloor = Math.floor(rInt);
    console.log(rIntFloor);
    let rIntRemainder = rInt - rIntFloor;
    console.log(rIntRemainder);
    let rIntRemainderXST = rIntRemainder * 16;
    console.log(rIntRemainderXST);
    let r_as_hex = String(dict[rIntFloor]) + String(dict[rIntRemainderXST]);
    return String(r_as_hex);
    console.log(r_as_hex);
}

hexR = hexC();

console.log(hexR);
//Difference between const, let and var

let dict = {1: 1, 2: 2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10: "a", 11: "b", 12: "c", 13:"d", 14: "e", 15: "f"}; 


function hexC(){
    let hex = 16; 

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

    let r_as_hex = dict[rIntFloor].concat(dict[rIntRemainderXST])
    console.log(r_as_hex);
}

console.log(hexC());
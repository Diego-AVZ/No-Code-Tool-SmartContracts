var code = ""

var customFunc = ""

var depo = "uint amountDeposited; function deposit() public payable{amountDeposited = msg.value;}"
var withd = "function withdrawEth() public onlyOwner { address payable to = payable(msg.sender); to.transfer(amountDeposited); amountDeposited = 0;}"


var contractName = "YourContractName";

// Ownership

function addOwner(ownerAddress) {
    code = code + " address owner = " + ownerAddress;
    code = code + " modifier " + " onlyOwner() { " + "require(owner == msg.sender); _; } "
}

// Variables

var varList = [];

function addVars(varType, varName) {
    var varStruct = {
        type : "",
        name : ""
         // + Add Visibility
    }
    varStruct.type = varType;
    varStruct.name = varName;
    console.log("varStruct is " + varStruct);
    varList.push(varStruct);
    console.log("your vars " + varList);
    code = code + " " + varType + " " + varName + ";";
}

'struct myStructName { address myAddress; string myString; uint16 myNumber;}stringmemory;'

//________________________________________________
// Structs

var myStruct = [] // [["", ""]]

function addParams(paramType, paramVal) {
    myStruct.push([paramType, paramVal]);
}

function addStruct (sName) {
    var i = 0;
    code = code + "struct " + sName + " {"
    for(i; i < myStruct.length; i++){
        code = code + " " + myStruct[i][0] + " " + myStruct[i][1] + ";" 
    }
    
    myStruct = [];
    
    code = code  + "}" 
    console.log("your contract IS " + code)
}


//________________________________________________

function addLicPrag(contractName) {
    code = "/*SPDX-License-Identifier: MIT*/ pragma solidity ^0.8.0; contract " + contractName + " { " ;
    writeCode();
    next1();
}

function addDepoFunc() {
    code = code + depo;
    writeCode();
    goTwo();
}

function addWithdS(address) {  
    addOwner(address);
    code = code + withd;
    writeCode();
    goTwo();
}

function addCustomFunc(name, addInputVar, addValueVar, equalTo) {
    customFunc = "function " + name + "(" + addInputVar + ") public { " + equalTo + " = " + addValueVar + ";" + "}"
    code = code + customFunc;
    writeCode();
}

function closeContract() {
    code = code + "}"
    writeCode();
}


//Front _______________________________________

var text = document.getElementById("myCode");

function writeCode() {
    text.innerText = "";
    text.innerText = code;
    text.scrollTop = text.scrollHeight;
}

function next1(){
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
}

function goConfig1(){
    document.getElementById("two").style.display = "none";
    document.getElementById("config1").style.display = "block";
}

function goConfig2(){
    document.getElementById("two").style.display = "none";
    document.getElementById("config2").style.display = "block";
}

function goTwo(){
    document.getElementById("config1").style.display = "none";
    document.getElementById("config2").style.display = "none";
    document.getElementById("two").style.display = "block";
}

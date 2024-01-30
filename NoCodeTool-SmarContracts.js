var code = ""

var customFunc = ""

var depo = "uint amountDeposited; function deposit() public payable{amountDeposited = msg.value;}"

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
        name : "" // Add Visibility
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

v

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
    code = "/*SPDX-License-Identifier: MIT*/ pragma solidity ^0.8.0; contract " + contractName + " { " 
}

function addDepoFunc() {
    code = code + depo;

}

function addCustomFunc(name, addInputVar, addValueVar, equalTo) {
    customFunc = "function " + name + "(" + addInputVar + ") public { " + equalTo + " = " + addValueVar + ";" + "}"
    code = code + customFunc;
}

function closeContract() {
    code = code + "}"
    console.log("your contract is " + code);
}


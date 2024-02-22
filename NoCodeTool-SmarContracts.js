var code = ""

var last = ""

var customFunc = ""

var depo = "uint amountDeposited; function deposit() public payable{amountDeposited = msg.value;}"
var withd = "function withdrawEth() public onlyOwner { address payable to = payable(msg.sender); to.transfer(amountDeposited); amountDeposited = 0;}"


var contractName = "YourContractName";

// Ownership 

function addOwner(ownerAddress) {
    last = " address owner = " + ownerAddress + ";" + " modifier " + " onlyOwner() { " + "require(owner == msg.sender); _; } "
    code = code + " address owner = " + ownerAddress + ";";
    code = code + " modifier " + " onlyOwner() { " + "require(owner == msg.sender); _; } "
}

// Variables

var varList = [];

var varType = "";

function addVars(varType, varName) {
    var varStruct = {
        type : "",
        name : ""
         // + Add Visibility
    }
    varStruct.type = varType;
    varStruct.name = varName;
    varList.push(varStruct);
    last = " " + varType + " " + varName + ";";
    code = code + " " + varType + " " + varName + ";";
    writeCode();
    goTwo()
    document.getElementById("varName").value = "";
}

function addNewUint() {
    varType = "uint";
    document.getElementById("uintBut").style.opacity = "100%";
    document.getElementById("stringBut").style.opacity = "60%";
    document.getElementById("boolBut").style.opacity = "60%";
    document.getElementById("addrBut").style.opacity = "60%";
}

function addNewStr() {
    varType = "string";
    document.getElementById("uintBut").style.opacity = "60%";
    document.getElementById("stringBut").style.opacity = "100%";
    document.getElementById("boolBut").style.opacity = "60%";
    document.getElementById("addrBut").style.opacity = "60%";
}

function addNewBool() {
    varType = "bool";
    document.getElementById("uintBut").style.opacity = "60%";
    document.getElementById("stringBut").style.opacity = "60%";
    document.getElementById("boolBut").style.opacity = "100%";
    document.getElementById("addrBut").style.opacity = "60%";
}

function addNewAddress() {
    varType = "address";
    document.getElementById("uintBut").style.opacity = "60%";
    document.getElementById("stringBut").style.opacity = "60%";
    document.getElementById("boolBut").style.opacity = "60%";
    document.getElementById("addrBut").style.opacity = "100%";
}

// 'struct myStructName { address myAddress; string myString; uint16 myNumber;}string memory;'

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
    last = "/*SPDX-License-Identifier: MIT*/ pragma solidity ^0.8.0; contract " + contractName + " { " ;
    code = "/*SPDX-License-Identifier: MIT*/ pragma solidity ^0.8.0; contract " + contractName + " { " ;
    writeCode();
    next1();
}

function addDepoFunc() {
    last = depo;
    code = code + depo;
    writeCode();
    goTwo();
}

function deleteLast() {
    var escapedLast = last.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    code = code.replace(new RegExp(escapedLast, 'g'), "");
    writeCode();
}

function addWithdS(address) {  
    addOwner(address);
    code = code + withd;
    writeCode();
    goTwo();
}

// CUSTOM_____

var funcType = "";

function setModFunc() {
    funcType = "mod"
}

function setModFunc() {
    funcType = "read"
}

var returnVar = "";

function setReturnUint() {
    returnVar = "uint";
}

function setReturnString() {
    returnVar = "string";
}

function setReturnBool() {
    returnVar = "bool";
}

function addCustomFunc(name) {
    //customFunc = "function " + name + "(" + addInputVar + ") public { " + equalTo + " = " + addValueVar + ";" + "}"
    customFunc = "function " + name + " (" ;

    for (var i = 0; i < funcInputs.length; i++) {
        if(i == funcInputs.length - 1) {
         customFunc = customFunc + funcInputs[i];
        } else {customFunc = customFunc + funcInputs[i] + ", "}
    }
    
    customFunc = customFunc + ")";

    if (funcType == "mod"){
        customFunc = customFunc + "{"
        for(var i = 0; i < myFuncVarList.length-1; i++){
            customFunc = customFunc + myFuncVarList[i].type2 + " " + myFuncVarList[i].name2;
        }

        customFunc = customFunc + algo;

    } else if(funcType == "read") {
        customFunc = customFunc + "view returns (" + returnVar + ") { ";
        for(var i = 0; i < myFuncVarList.length-1; i++){
            customFunc = customFunc + myFuncVarList[i].type2 + " " + myFuncVarList[i].name2;
        }

        customFunc = customFunc + algo;
        //___
        customFunc = customFunc + "return (" + "" + "}";
    }



    code = code + customFunc;
    writeCode();
}

var algo = ""; // 

function setAlgo() {

}

var myFuncVarList = [];

function addLocalVars(name2, type2) {
    var newVar = {
        name2: "",
        type2: ""
    };

    myFuncVarList.push(newVar);
    
}

var funcInputs = [];

function addInputF(inpType, inpName) {
    var fullInput;
    if (inpType == "string"){
        fullInput = inpType + " memory " + inpName;
    } else {
        fullInput = inpType + " " + inpName;
    }
    funcInputs.push(fullInput);
    var yourInput = document.createElement("div");
    var div = document.getElementById("fInpD");
    if(inpType == "uint"){
        yourInput.classList.add("myUint");
        yourInput.innerText = fullInput;
    } else if(inpType == "string") {
        yourInput.classList.add("myStr");
        yourInput.innerText = inpType + " " + inpName;
    } else if(inpType == "bool") {
        yourInput.classList.add("myBool");
        yourInput.innerText = fullInput;
    } else if(inpType == "address") {
        yourInput.classList.add("myAddr");
        yourInput.innerText = fullInput;
    }
    
    div.appendChild(yourInput);
    var container = document.getElementById('fInpD');
    container.scrollLeft = container.scrollWidth; 
    document.getElementById("inpNameFunc").value = "";
}


//_______




function closeContract() {
    code = code + "}"
    writeCode();
}


//Front _______________________________________

var text = document.getElementById("myCode");
var ide = document.getElementById("ide");

function writeCode() {
    text.innerText = "";
    text.innerText = code;
    ide.scrollTop = ide.scrollHeight;
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

function goVars() {
    document.getElementById("vars").style.display = "block";
    document.getElementById("two").style.display = "none";

}

function goCustom() {
    document.getElementById("customFuncDiv").style.display = "block";
    document.getElementById("two").style.display = "none";

}

function goTwo(){
    document.getElementById("vars").style.display = "none";
    document.getElementById("config1").style.display = "none";
    document.getElementById("config2").style.display = "none";
    document.getElementById("customFuncDiv").style.display = "none";
    document.getElementById("two").style.display = "block";
    document.getElementById("uintBut").style.opacity = "100%";
    document.getElementById("stringBut").style.opacity = "100%";
    document.getElementById("boolBut").style.opacity = "100%";
    document.getElementById("addrBut").style.opacity = "100%";
}

function copy() {
    navigator.clipboard.writeText(code)
    alert("Contract Copied, go to remix and test it!")
}

function makeElementEditable() {
    var element = document.getElementById("myCode");
    element.contentEditable = "true";
    document.getElementById("edit").style.display = "none";
    document.getElementById("cancel").style.display = "block";
    document.getElementById("approve").style.display = "block";
  }

function makeElementNotEditable() {
    var element = document.getElementById("myCode");
      element.contentEditable = "false";
  }

function approveEditCodeMan() {
    var element = document.getElementById("myCode");
    code = element.innerText;
    makeElementNotEditable();
    document.getElementById("edit").style.display = "block";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("approve").style.display = "none";
}

function cancelEditCodeMan() {
    var element = document.getElementById("myCode");
    element.innerText = code;
    makeElementNotEditable();
    document.getElementById("edit").style.display = "block";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("approve").style.display = "none";
}

var actTextSize = 25;

function bigText() {
    
    var textSize = document.getElementById("ide");
    console.log("now Text " + textSize.style.fontSize);

    var newSize = actTextSize;
    newSize += 2;
    newSize.toString();
    newSize + "px"

    textSize.style.fontSize = newSize;
    
    console.log("Bigger Text " + textSize.style.fontSize);

}



// Hacer la parte "Gamificada" como academia para quien quiera aprender
/*

!!! para enseñar:

- Variables: Declarar Variables :
                        - uint
                        - string
                        - bool
- modificar variables con funciones
- leer variables con funciones

- variables complejas: 
                    - array
                    - mapping
                    - structs

- modificar variables complejas con con funciones
- leer datos de una variable compleja

- modificadores y constructor
- algoritomos: If && for

llamar a otras funciones desde una funcion

*/

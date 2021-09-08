let input1 = document.querySelector("#firstInp");
let input2 = document.querySelector("#secondImp");
let input3 = document.querySelector("#answerimp");

let btnplus = document.querySelector("#plusbtn");
let minsbtn = document.querySelector("#minusbtn");
let multiplybtn = document.querySelector("#multiplay");
let devidebtn = document.querySelector("#devidebtn");


btnplus.textContent = "+"
minsbtn.textContent = "-"
multiplybtn.textContent = "*"
devidebtn.textContent = "/"

if(btnplus)
{
    btnplus.onclick = function(){
        let a = parseInt(document.getElementById("firstInp").value);
        let b = parseInt(document.getElementById("secondImp").value);
       
        let c = a + b;
       input3.value =  a.toString() + " " + "+" + " " + b.toString() + " " + "=" + " " + c.toString()
     
    }
}

if(minsbtn)
{
    minsbtn.onclick = function (){
        let a = parseInt(document.getElementById("firstInp").value);
        let b = parseInt(document.getElementById("secondImp").value);
       
        let c = a - b;
       input3.value =  a.toString() + " " + "-" + " " + b.toString() + " " + "=" + " " + c.toString()
    }
}

if(multiplybtn){
    multiplybtn.onclick = function (){
        let a = parseInt(document.getElementById("firstInp").value);
        let b = parseInt(document.getElementById("secondImp").value);
       
        let c = a * b;
       input3.value =  a.toString() + " " + "*" + " " + b.toString() + " " + "=" + " " + c.toString()

    }
}

if(devidebtn){
    devidebtn.onclick = function(){

        let a = parseInt(document.getElementById("firstInp").value);
        let b = parseInt(document.getElementById("secondImp").value);
       
if(b === 0)
{
    input3.value = "Нельзя делить на ноль"
}
else{
    let c = a / b;
    input3.value =  a.toString() + " " + "/" + " " + b.toString() + " " + "=" + " " + c.toString()
}
   
    }
}


let buttons = document.querySelectorAll(".buttons")
let maininput = document.querySelector("#maininput")

let m = ["7", "8","9", "+",
         "4","5","6", "-", 
        "1", "2", "3", "*",
        ".", "0", "=", "/"]

        let i = 0;
buttons.forEach(element => {
    element.textContent = m[i];
    i++;
});

let value = "";

let beenusedDote = false;

if(buttons)
{  
buttons.forEach(element =>{
element.onclick = function(){

    value = value + element.textContent;
    maininput.value = value;
    beenTypedNumber = true;
}
});
}

let pb = document.querySelector("#plus")
let mib = document.querySelector("#minus")
let mub = document.querySelector("#multiplay")
let db = document.querySelector("#devide")
let equalsbtn = document.querySelector("#equalsbtn")

let num1;
let currentnumber;
let result;




let beenTypedNumber = false;
let beenusedoperation = false

let lastOpersation
if(pb)
{
    pb.onclick = function()
    {
        if(beenTypedNumber != false)
        {
            lastOpersation = "+"
            num1 = Number(maininput.value)
            result = num1
            value = ""
            maininput.value = ""
           
            beenusedDote = false;
            
            
        }
        else{
            maininput.value = "Сначало введите число"
        }
    }
}

if(mib)
{
    mib.onclick = function(){
        if(beenTypedNumber != false)
        {
            lastOpersation = "-"
            num1 = Number(maininput.value)
            result = num1
            maininput.value = ""
            value = ""
            beenusedDote = false;
            
            
        }
        else{
            maininput.value = "Сначало введите число"
        }
    }
}

if(mub)
{
    mub.onclick = function(){
        if(beenTypedNumber != false)
        {
            lastOpersation = "*"
            num1 = Number(maininput.value)
            result = num1
            maininput.value = ""
            value = ""
            beenusedDote = false;
            
            
        }
        else{
            maininput.value = "Сначало введите число"
        }
    }
}

if(db)
{
    db.onclick = function(){
        if(beenTypedNumber != false)
        {
            lastOpersation = "/"
            num1 = Number(maininput.value)
            result = num1
            maininput.value = ""
            value = ""
            beenusedDote = false;
            
            
        }
        else{
            maininput.value = "Сначало введите число"
        }
    }
}

if(equalsbtn)
{
    equalsbtn.onclick = function()
    {
        switch (lastOpersation)
        {
            case "+":

                currentnumber = Number(maininput.value)
                result = result + currentnumber;
                maininput.value = result
                break;

                case "-":

                    currentnumber = Number(maininput.value)
                    result = result - currentnumber;
                    maininput.value = result
                    break;

                case "*":

                    currentnumber = Number(maininput.value)
                    result = result * currentnumber;
                    maininput.value = result
                    break;

                case "/":

                    currentnumber = Number(maininput.value)
                    if(currentnumber === 0)
                    {
                        maininput.value= "На ноль делить нельзя"
                        break;
                    }else{
                        result = result / currentnumber;
                        maininput.value = result
                        break;
                    }
                    
        }
    }
}

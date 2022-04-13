const form = document.getElementById("form1");
const contact = document.getElementById("contact");
let abc = 2;

contact.addEventListener("click", function(){   
    if(abc == 2){
        form.style.display="block";
        abc = 1;
    }
    else{
        
        form.style.display="none";
        abc = 2;
    }
})


const hire1 = document.querySelector('#hiring');
const question = document.querySelector('#question');
const comment = document.querySelector('#comment');
const hire2 = document.querySelector('#hire');

const txt_box = document.createElement('input');

hire1.addEventListener('click', function(){
    txt_box.type = "number";
    txt_box.style.margin = "20px";
    txt_box.min = 16;
    txt_box.id ="wageRate";
    hire2.insertAdjacentElement('afterend', txt_box);
})


question.addEventListener('click', function(){
    const wage = document.querySelector('#wageRate');
    wage.remove();
})

comment.addEventListener('click', function(){
    const wage = document.querySelector('#wageRate');
    wage.remove();
})


const submitAll = document.querySelector("#submitAll");
const postal = document.querySelector("#postal");
const msg = document.querySelector("#errMsg");
const formSelected = document.querySelector("form");

submitAll.addEventListener('click',function(e){
    if(/^[A-Z]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(postal.value)){ 
        errMsg.innerHTML = "";
        postal.style.border="1px solid black";
        formSelected.unbind('submit');
    }
    else
    {
        e.preventDefault();
        err= "* Please Enter Valid Postal code";       
        postal.style.border="solid 1px red";
        postal.focus();
        postal.select();
        errMsg.innerHTML = err;
        errMsg.style.color = "red";
        errMsg.style.fontSize = "15px";

    }
})











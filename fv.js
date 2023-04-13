const email=document.getElementById("txtEmail");
const pwd=document.getElementById("txtPwd");
const conPwd=document.getElementById("txtConPwd");
const fn=document.getElementById("txtFirstname");
const form=document.querySelector("form");

function validateInput(){
    
    if(email.value.trim()===""){
        onError(email,"Please enter your email address");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Please enter a VALID email address");
        }else{
            onSuccess(email);
        }
    }

    //password
     if(pwd.value.trim()===""){
        onError(pwd,"Please enter your password");
     }else{
        if(pwd.value.length < 8){
         onError(pwd, "Please enter atleast 8 characters.");
        }else{
            onSuccess(pwd);
        }
     }

     if(conPwd.value.trim()===""){
        onError(conPwd,"Please enter your password one more time");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
         }
         else
         onSuccess(conPwd);
     }

        if(fn.value.trim()===""){
        onError(fn,"Please enter your first name");
    }else{
            onSuccess(fn);
        }

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    const parent=input.parentElement;
    const messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    const parent=input.parentElement;
    const messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



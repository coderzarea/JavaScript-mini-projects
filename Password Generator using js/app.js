//Dom Elements
let inpSlider=document.querySelector("#range");
let inpLength=document.querySelector("#inpLength");
let passwordField=document.querySelector("#password");
let copyBtn=document.querySelector("#copy");
let genBtn=document.querySelector("#generateBtn");

//Adding functionalities on input range slider
inpSlider.addEventListener("input",()=>{
    inpLength.innerHTML=`Length : ${inpSlider.value}`;
});


//function to return a random char from a charset
function getRandomChar(dataset){
    return dataset[Math.floor(Math.random()*dataset.length)];
}

//function to return a random password
function getRandomPassword(){
    let password="";
    let charset="";
    let length=inpSlider.value;

    //character sets
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let numbers="0123456789";
    let symbols="!@#$%^&*()_+";

    //array of objects
    let options =[
        {checked:document.querySelector("#uppercase").checked,set:uppercase},
        {checked:document.querySelector("#lowercase").checked, set:lowercase},
        {checked:document.querySelector("#symbols").checked, set:symbols},
        {checked:document.querySelector("#numbers").checked, set:numbers},
    ];

    //array of checked options
    let selectedOptions=options.filter((option)=>option.checked);

    //if no option is selected then..
    if(selectedOptions.length===0){
        alert("choose at least one option");
        return password="";
    }

    //adding chars in password from the set that are checked and adding dataset in charset
    selectedOptions.forEach((option)=>{
        password+=getRandomChar(option.set);
        charset+=option.set;
    });

    //to fill remaining length of the password
    for(let i=password.length; i<length; i++){
        password+=getRandomChar(charset);
    }

    //to shuffle the password to increase security
    password=password.split("").sort(()=>Math.random()-0.5).join("");
    return password;
}

//adding fuctionality on genBtn
genBtn.addEventListener("click",()=>{
    let password=getRandomPassword();
    passwordField.value=password;
});

//adding functionality on copy btn
copyBtn.addEventListener("click",()=>{
    if(passwordField.value!=""){
        navigator.clipboard.writeText(passwordField.value);
        alert("password copied");
    }
    else{
        alert("Generate Password First");
    }
});

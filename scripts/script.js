const email="adnan@hotmail.com";
const id="12345";
const sifre="123";

const emailSec=document.querySelector('#email');
const idSec=document.querySelector('#idNumber');
const sifreSec=document.querySelector('#password');
const btn=document.querySelector('.giris-btn');

btn.addEventListener('click',dogrula);

function dogrula(){
    if(email===emailSec.value && id===idSec.value && sifre===sifreSec.value){
        bosalt();
        dogru();
        console.log("doğru");
    }
    else{
        Hata();
        bosalt();
        console.log("yanlis")
    }
}

function bosalt(){
    emailSec.value="";
    idSec.value="";
    sifreSec.value="";
}

function Hata(){
    const hata=document.querySelector('.hata');
    hata.style.opacity=1;
    setTimeout(()=>{
        hata.style.opacity=0;
    },2000);
}

function dogru(){
    const basarili=document.querySelector('.basarili');
    basarili.style.opacity=1;
    setTimeout(()=>{
        basarili.style.opacity=0;
    },2000);
}

const isim=document.querySelector('#isim');
const soyisim=document.querySelector('#soyisim');
const password=document.querySelector('#password');
const adres=document.querySelector('#adres');
const email=document.querySelector('#email');
const btn=document.querySelector('.giris-btn');


btn.addEventListener('click',mesajYazdir);

function mesajYazdir(){
    if(isim.value==="" && soyisim.value==="" && password.value==="" && adres.value==="" && email.value===""){
        bosalt();
        Hata();
    }
    else{
        bosalt();
        dogru();
    }
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

function bosalt(){
    isim.value="";
    soyisim.value="";
    password.value="";
    adres.value="";
    email.value="";
}

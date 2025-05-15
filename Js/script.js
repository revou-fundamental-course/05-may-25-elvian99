
function validate(){
const nama = document.getElementById('nama')
const erorr1 = document.getElementById('error-nama')

const email = document.getElementById('email')
const error2 = document.getElementById('error-email')

const subject = document.getElementById('subject')
const error3 = document.getElementById('error-subject')

const message = document.getElementById('message')
const error4 = document.getElementById('error-message')

let valid = true

if(nama.value === ''){
    erorr1.innerText = 'masukkan nama anda';
    erorr1.style.color = 'red';
    valid = false;
}
if(email.value === ''){
    error2.innerText ='masukkan email anda'
    error2.style.color = 'red';
    valid = false;
}
if(subject.value === ''){
    error3.innerText = 'masukkan subject pesan'
    error3.style.color = 'red';
    valid = false;
}
if(message.value === ''){
    error4.innerText = 'masukkan pesan anda'
    error4.style.color = 'red'
    valid = false;
}
if(valid){
    alert ('pengisian berhasil')
}
return valid
}

document.getElementById('nama').addEventListener('input', function(){
    if(this.value.trim() !== ''){
        document.getElementById('error-nama').innerText =''
    }
})
document.getElementById('email').addEventListener('input', function(){
    if(this.value.trim() !== ''){
        document.getElementById('error-email').innerText =''
    }
})
document.getElementById('subject').addEventListener('input', function(){
    if(this.value.trim() !== ''){
        document.getElementById('error-subject').innerText = ''
    }
})
document.getElementById('message').addEventListener('input', function(){
    if(this.value.trim() !== ''){
        document.getElementById('error-message').innerText = ''
    }
})



const listener = document.getElementsByClassName('slider')
let indexBanner = 0
hideAll()

function nextBanner(){
    indexBanner += 1

    hideAll()
}

function hideAll(){

    if (indexBanner >= listener.length){
        indexBanner = 0;
    }

    for( let i = 0; i < listener.length; i++){
        listener[i].style.display = 'none';

    }
    showAll(indexBanner)
}
function showAll(i){
    listener[i].style.display = 'block';
}
hideAll();

setInterval(nextBanner, 3000)




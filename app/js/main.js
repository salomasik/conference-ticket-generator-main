// import { SMTPClient } from 'emailjs';

// const client = new SMTPClient({
// 	user: 'user',
// 	password: 'password',
// 	host: 'smtp.your-email.com',
// 	ssl: true,
// });


let  imgInput = document.querySelector('#inp-upload-file');
let iconImg = document.querySelector('.icon-upload');
let divInp = document.querySelector('.div-inp');

let elInputName = document.querySelector('.input-fullName');
let elInputEmail = document.querySelector('.input-email');
let elInputGithub = document.querySelector('.input-git');

let elPEmail = document.querySelector('#email-p');
let elPName = document.querySelector('#full-name');
let elPEmailSec = document.querySelector('.email-span');
let elPNameSec = document.querySelector('.full-name2');
let BtnGenerTicket = document.querySelector('.btn-gener-tckt');
let elArtTicket = document.querySelector('#art-ticket');
let elMain = document.querySelector('main');
let elTicket = document.querySelector('#ticket');
let imgTick = document.querySelector('.ticket-img');

let elBody = document.querySelector('body');










function inputChange(){
    let imgLink = URL.createObjectURL(imgInput.files[0])
    iconImg.src=imgLink;
    iconImg.style.padding=`0px`;
    divInp.innerHTML=`<button class="remove-img">Remove image </button>
    <label for="file" class="change-img-lab"> <input type="file" name="file" id="file" class="change-img" hidden> Change image</label>`;
    let removeImg = document.querySelector('.remove-img');
    let changeImg = document.querySelector('.change-img');
    removeImg.addEventListener("click",(e)=>{
        e.defaultPrevented;
        iconImg.src="./app/assets/images/icon-upload.svg";
    divInp.innerHTML=`<p class="p-inp">
    Drag and drop or click to upload
  </p>`;
    });
    changeImg.addEventListener("change",(e)=>{
        let imgLink = URL.createObjectURL(changeImg.files[0])
        iconImg.src=imgLink;
        iconImg.style.padding=`0px`;
})




    console.log();
}

imgInput.addEventListener('change',inputChange);

BtnGenerTicket.addEventListener('click', (e)=>{
    e.defaultPrevented;
    elBody.classList.add("overflow-hidden");
    elPEmailSec.textContent=elInputEmail.value;
    elPNameSec.textContent=elInputName.value+'!';
    elPEmail.textContent=elInputEmail.value;
    elPName.textContent=elInputName.value;
    elMain.classList.toggle('non-active');
    elArtTicket.classList.toggle("active");
    elTicket.classList.toggle("active");
    let imgLink = URL.createObjectURL(imgInput.files[0])
    imgTick.src=imgLink;
    sendEmail(elPNameSec.textContent, elPEmailSec.textContent, document.querySelector('.numb-tick').textContent,imgLink);
})

console.log()


function sendEmail(name, email,numb,Avatar){
    let params = {
        name: name,
        email:email,
        number:numb,
        Logo_img: "./app/assets/images/logo-mark.svg",
        Avatar_img:Avatar,
    }


    emailjs.send("service_fdwvd18","template_3b0aht4",params).then(alert())
}
// send the message and get a callback with an error or details of the message that was sent
// client.send(
// 	{
// 		text: 'i hope this works',
// 		from: 'you <username@your-email.com>',
// 		to: 'someone <someone@your-email.com>, another <another@your-email.com>',
// 		cc: 'else <else@your-email.com>',
// 		subject: 'testing emailjs',
// 	},
// 	(err, message) => {
// 		console.log(err || message);
// 	}
// );

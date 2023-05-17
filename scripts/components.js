const linkedin = 'https://www.linkedin.com/in/alexander-red/';
const github = 'https://github.com/Holerion';
const instagram = 'https://instagram.com/_sanya_red_?igshid=MTIyMzRjYmRlZg==';
const telegram = 'https://t.me/holerion';

function render(){
    document.querySelector('.socials').innerHTML=`
    <li><a href="${linkedin}"><i class="fa-brands fa-linkedin"></i></a></li>
    <li><a href="${github}"><i class="fa-brands fa-github"></i></a></li>
    <li><a href="${instagram}"><i class="fa-brands fa-instagram"></i></a></li>
    <li><a href="${telegram}"><i class="fa-brands fa-telegram"></i></a></li>
    `


}
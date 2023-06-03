const linkedin = 'https://www.linkedin.com/in/alexander-red/';
const github = 'https://github.com/Holerion';
const instagram = 'https://instagram.com/_sanya_red_?igshid=MTIyMzRjYmRlZg==';
const telegram = 'https://t.me/holerion';

const body = document.querySelector('body')

function renderComponent(){
    setSocials();
    setNavbar();

    
   
const themeParam = window.location.href
console.log(themeParam.includes('light'))
themeParam.includes('light')
?body.classList.add('light')
:body.classList.add('dark') 
}



function setSocials() {
    document.querySelector('.socials').innerHTML=`
    <li><a href="${linkedin}"><i class="fa-brands fa-linkedin"></i></a></li>
    <li><a href="${github}"><i class="fa-brands fa-github"></i></a></li>
    <li><a href="${instagram}"><i class="fa-brands fa-instagram"></i></a></li>
    <li><a href="${telegram}"><i class="fa-brands fa-telegram"></i></a></li>
    `
  }

function setNavbar() {
    document.querySelector('#navbar').innerHTML=`
    <input class="checkbox" type="checkbox" name="" id="" />
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  
    <nav>
      <a href="./index.html">
        <img class="logo" src="./images/logo.svg" height="150px" alt="logo" />
      </a>
  
      <ul>
        <li><a class="hover" href="./aboutMe.html#light">About</a></li>
        <li><a class="hover" href="./projects.html#light">Projects</a></li>
        <li><a class="hover" href="./resume.html#light">Resume</a></li>
        <li><a class="hover" href="./contacts.html#light">Contact</a></li>
      </ul>
  
    </nav>
    `
  }


  function switchTheme() {
    body.classList.contains('light')
    ?body.classList.replace('light', 'dark')
    :body.classList.replace('dark','light')  
  }







  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
      console.log(15)
      const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
      const url = new URL(link.href);
      
      if (currentTheme === 'light') {
        url.hash = 'light' + url.hash;
      } else if (currentTheme === 'dark') {
        url.hash = 'dark' + url.hash;
      }
      
      // Змінюємо URL без перезавантаження сторінки
      history.pushState(null, '', url.href);
    });
  });
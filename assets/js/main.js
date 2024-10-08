/*===== MENU SHOW =====*/  
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*==================== DYNAMIC NAME CHANGE ====================*/
const changeNameBtn = document.getElementById('changeNameBtn');
const nameInput = document.getElementById('nameInput');
const nameLogo = document.getElementById('nameLogo');
const nameTitle = document.getElementById('nameTitle');
const footerTitle = document.getElementById('footerTitle');

// Add event listener to the button for changing name across elements
changeNameBtn.addEventListener('click', () => {
    const newName = nameInput.value.trim();  // Get the input value and remove any extra spaces

    if (newName) {
        // Replace all occurrences of the name on the webpage
        nameLogo.textContent = newName;
        nameTitle.textContent = newName;
        footerTitle.textContent = newName;
    } else {
        alert('Please enter a valid name.');
    }
});

/*==================== ADD AND REMOVE IMAGE ====================*/
const profileImage = document.getElementById('profileImage');
const addImageBtn = document.getElementById('addImage');
const removeImageBtn = document.getElementById('removeImage');

// Add event listener for adding image
addImageBtn.addEventListener('click', () => {
    profileImage.setAttribute('xlink:href', 'assets/img/perfil.png'); // Adds image back
});

// Add event listener for removing image
removeImageBtn.addEventListener('click', () => {
    profileImage.setAttribute('xlink:href', ''); // Removes image
});

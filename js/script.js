/* --- MENU variables --- */
let menuBtn = document.getElementById('menu-btn');

/* --- FORM Variables --- */
// form submit button
let formBtn = document.getElementById('form-btn');
// message div
let formMessage = document.querySelector('.success-message');
// Close message div button
let closeMessageBtn = document.getElementById('message-close-btn');

//create new Div background black 
let blockDiv = document.createElement('div');
document.body.appendChild(blockDiv);

// --Form
let nameInput = document.getElementById('input-name');
let emailInput = document.getElementById('input-email');
let messageInput = document.getElementById('input-message');
let allParagraphs = document.querySelectorAll("[data-name='error-p']");
// console.log(allParagraphs);

/* --- MENU MOBILE--- */
// Open and close menu
let showMenu = function() {
    // let navbar = document.querySelector('nav');
    // let mobileWrapper = document.querySelector('.menu-mobile-wrapper');
    let menuSideBar = document.querySelector('.first-menu');
    let mainMenu = document.querySelector('.main-menu');
    let bodyWrapper = document.querySelector('.site-wrapper');


    menuSideBar.classList.toggle('show-side-menu');
    bodyWrapper.classList.toggle('body-margin');
    mainMenu.classList.toggle('opened');
    // mobileWrapper.classList.add('side-div');


    // if(navbar.classList.contains('hid')) {
    //     // navbar.classList.remove('hidden');
    //     menuSideBar.classList.toggle('show-side-menu');
    //     bodyWrapper.classList.toggle('body-margin');
    //     // mobileWrapper.classList.add('side-div');
    //     mainMenu.classList.toggle('opened');
    // } 
    // else {
    //     // navbar.classList.add('hidden');
    //     bodyWrapper.classList.remove('body-margin');
    //     menuSideBar.classList.remove('show-side-menu');
    //     // mobileWrapper.classList.remove('side-div');
    //     mainMenu.classList.remove('opened');
    // }
}


/* --- FORM --- */
// Message Handler
let messageHandler = function() {
    //Show message
    formMessage.classList.remove('hidden')
    //display div
    blockDiv.classList.add('window-black');
    //disable scroll
    document.body.classList.add('disable-scroll');
}

//Hide Message
let messageHanlderClose = function() {
    //close message 
    formMessage.classList.add('hidden')
    //hide div
    blockDiv.classList.remove('window-black');
    //disable scroll
    document.body.classList.remove('disable-scroll')
}

// Form submit
let submitForm = function(evt) {
    evt.preventDefault();

    if( !validateForm() ) return;
}

// Form Validation
let validateForm = function () {
    let strName = nameInput.value.trim(),
        strEmail = emailInput.value.trim(),
        strMessage = messageInput.value,
        regName = new RegExp('^[a-zA-Z -]{1,30}$'),
        regMail = new RegExp('^[a-z]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$'),
        hasError = false,
        titlePError = document.getElementById('name-paragraph-error'),
        emailPError = document.getElementById('email-paragraph-error'),
        messagePError = document.getElementById('message-paragraph-error');

    // Verify if inputs are empty
    if(strName.length <= 0 ) {
        hasError = true;
        titlePError.classList.add('visible');
    }

    if(strEmail.length <= 0 ) {
        hasError = true;
        emailPError.classList.add('visible');
    }

    if(strMessage.length <= 0 ) {
        hasError = true;
        messagePError.classList.add('visible');
    }

    // Verify input name characters 
    if( !regName.test( strName ) ) {
        hasError = true;
        strName.value = '';
        titlePError.classList.add('visible');
    }

    // Verify email
    if( !regMail.test( strEmail )) {
        hasError = true;
        strEmail.value = '';
        emailPError.classList.add('visible');
    }

    // Delete error paragraph when click in the input box
    nameInput.addEventListener('click', () => titlePError.classList.remove('visible'));
    emailInput.addEventListener('click', () => emailPError.classList.remove('visible'));
    messageInput.addEventListener('click', () => messagePError.classList.remove('visible'));

    if( hasError ) return;

    // Clean input values when submit
    nameInput.value = emailInput.value = messageInput.value = '';

    // remove all error paragraphs when submit
    // allParagraphs.forEach( el => { el.classList.remove('show') });
    
    // Show success message
    messageHandler();
}

// -- Event Listeners
closeMessageBtn.addEventListener('click', messageHanlderClose);
formBtn.addEventListener('click', submitForm);
menuBtn.addEventListener('click', showMenu);
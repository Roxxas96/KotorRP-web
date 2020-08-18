const GoUpButton = document.querySelector('.go-up-button');
const DiscordButton = document.querySelector('.discord-button');
const Container = document.querySelector('.container');
const BurgerButton = document.getElementById('burger-button');
const Burger = document.querySelector('.burger');
const RightMenu = document.querySelector('.right-menu');

var RightMenuDeployed = false;

const BurgerClicked = () => {
    if(RightMenuDeployed){
        RightMenu.classList.remove('right-menu-deployed');
        Burger.classList.remove('burger-cross');
        BurgerButton.setAttribute('src', './Documents/burger-button.png');
        RightMenuDeployed = false;
    }else {
        RightMenu.classList.add('right-menu-deployed');
        Burger.classList.add('burger-cross');
        BurgerButton.setAttribute('src', './Documents/burger-button-cross.png');
        RightMenuDeployed = true;
    }
}
const GoUpButtonClicked = () => {
    window.scroll({
        top : 0,
        left : 0,
        behavior : "smooth"
    });
}
const DeployGoUpAndDiscordButton = () => {
    if(window.scrollY > 0){
        GoUpButton.classList.add('go-up-button-deployed');
    }else{
        GoUpButton.classList.remove('go-up-button-deployed');
    }
}
const CheckForMobile = () => {
    if(window.innerWidth < window.innerHeight + 400){
        Container.classList.add('mobile');
    }else{
        Container.classList.remove('mobile');
    }
}

/* On Scroll */

window.addEventListener('scroll', () => {
    DeployGoUpAndDiscordButton();
})

/* On Window Resize */

window.onresize = () => {
    DeployGoUpAndDiscordButton();
    CheckForMobile();
}

/* On Startup */

DeployGoUpAndDiscordButton();
CheckForMobile();
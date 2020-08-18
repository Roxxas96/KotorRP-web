const RightMenu = document.querySelector('.right-menu');
const BurgerButton = document.getElementById('burger-button');
const Burger = document.querySelector('.burger');
const NavBar = document.querySelector('.nav-bar');
const GoUpButton = document.querySelector('.go-up-button');
const DiscordButton = document.querySelector('.discord-button');
const Container = document.querySelector('.container');
var DeployElements = Array.from(document.querySelectorAll('.Deploy'));
var DeployedElements = [];
const DiscordJoinButton = document.querySelector('.discord-join-button');

var RightMenuDeployed = false;
var BlockDeploy = false;

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
    DeployedElements.forEach((val,key,parent) => {
        val.classList.remove('Deployed');
        parent.splice(key, 1);
    });
    BlockDeploy = true;
}
const DeployNavBar = () => {
    if(window.scrollY > window.innerHeight/2) NavBar.classList.add('nav-bar-deployed');
        else NavBar.classList.remove('nav-bar-deployed');
}
const CloseRightMenu = () => {
    if(window.scrollY > 0){
        RightMenu.classList.remove('right-menu-deployed');
        Burger.classList.remove('burger-cross');
        BurgerButton.setAttribute('src', './Documents/burger-button.png');
        RightMenuDeployed = false;
    }
}
const DeployGoUpAndDiscordButton = () => {
    if(window.scrollY > 0){
        GoUpButton.classList.add('go-up-button-deployed');
        DiscordButton.classList.add('discord-button-deployed');
    }else{
        GoUpButton.classList.remove('go-up-button-deployed');
        DiscordButton.classList.remove('discord-button-deployed');
    }
}
const CheckForMobile = () => {
    if(window.innerWidth < window.innerHeight + 400){
        Container.classList.add('mobile');
    }else{
        Container.classList.remove('mobile');
    }
}
const CheckForDeploy = () => {
    if(BlockDeploy) return;
    DeployElements.forEach((val,key,parent) => {
        var scrollPosition = window.scrollY + window.innerHeight
        var elementPosition = val.getBoundingClientRect().top + window.scrollY + val.clientHeight

        if(scrollPosition > elementPosition){
            val.classList.add('Deployed');
            DeployElements.slice(key, 1);
            DeployedElements.push(val);
        }
    })
}
const CheckForDiscordStick = () => {
    const rect = DiscordJoinButton.getBoundingClientRect();

    if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
        DiscordButton.classList.add('discord-button-disabled');
        GoUpButton.classList.add('go-up-discord-undeployed');
    }else{
        DiscordButton.classList.remove('discord-button-disabled');
        GoUpButton.classList.remove('go-up-discord-undeployed');
    }
}

/* On Scroll */

window.addEventListener('scroll', () => {
    DeployNavBar();
    CloseRightMenu();
    DeployGoUpAndDiscordButton();
    CheckForDeploy();
    if(window.scrollY == 0) BlockDeploy = false;
    CheckForDiscordStick();
})

/* On Window Resize */

window.onresize = () => {
    CheckForMobile();
    DeployNavBar();
    CloseRightMenu();
    DeployGoUpAndDiscordButton();
    CheckForDeploy();
    CheckForDiscordStick();
}

/* On Startup */

CheckForMobile();
DeployNavBar();
CloseRightMenu();
DeployGoUpAndDiscordButton();
CheckForDeploy();
CheckForDiscordStick();
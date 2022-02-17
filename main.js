const alerta = () => {
    window.alert('Alerta!')
}

const darkMode = () => {
    buttonText = document.querySelector('.button')

    background = document.querySelector('body')
    title = document.querySelector('h1')
    text = document.querySelector('p')
    textLink = document.querySelector('p.link')
    jumbotron = document.querySelector('main')
    backgroundMenu = document.querySelector('div.menu')
    menuSvg = document.querySelector('img#menuSvg')
    menuLinks = document.querySelectorAll('div.menu div a')
    
    background.classList.toggle('dm-background')
    title.classList.toggle('dm-text')
    text.classList.toggle('dm-text')
    textLink.classList.toggle('dm-text')
    jumbotron.classList.toggle('dm-box')
    backgroundMenu.classList.toggle('dm-background-menu')
    menuSvg.classList.toggle('dm-img-filter')
    menuLinks.forEach(menuLinks => menuLinks.classList.toggle('dm-text'))    

    console.log(menuSvg)

    if (buttonText.innerHTML == 'Dark mode')
        buttonText.innerHTML = 'Light mode'
    else if (buttonText.innerHTML == 'Light mode')
        buttonText.innerHTML = 'Dark mode'
}

const toggleMenu = () => {
    iconMenu = document.querySelector('div.icon-menu')
    showMenu = document.querySelector('div.menu')
    showMenu.classList.toggle('hide-menu')

    if (showMenu.classList.contains('hide-menu')) {
        iconMenu.innerHTML = `<img src="./img/menu-icon.svg" id="menuSvg" alt="menu">`;
    } else {
        iconMenu.innerHTML = `<img src="./img/close-menu-icon.svg" id="menuSvg" alt="close menu">`
    }
}

document.querySelector('.button-outline').addEventListener('click', alerta)
document.querySelector('.button').addEventListener('click', darkMode)
document.querySelector('.icon-menu').addEventListener('click', toggleMenu)
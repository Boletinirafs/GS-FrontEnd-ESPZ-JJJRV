// DARK AND LIGHT MODE SWITCH
const lightModes = document.getElementById('light-dark')
lightModes.addEventListener('click',()=>{
    const currentMode = lightModes.getAttribute('alt')
    const modeSwitch = document.getElementById('mode')
    if (currentMode == 'darkMode'){
        lightModes.setAttribute('alt','lightMode')
        lightModes.setAttribute('src','images/light-dark/lightMode.svg')
        modeSwitch.setAttribute('href','css/lightStyles.css')

    }else{
        lightModes.setAttribute('alt','darkMode')
        lightModes.setAttribute('src','images/light-dark/darkMode.svg')
        modeSwitch.setAttribute('href','css/darkStyles.css')
    }
})
// DARK AND LIGHT MODE SWITCH



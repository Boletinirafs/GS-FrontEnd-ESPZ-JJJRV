
//Modifica os temas da página
const lightModes = document.getElementById('light-dark')//Seleciona o ID dos modos
lightModes.addEventListener('click',()=>{//Espera o click para dar o callback
    const currentMode = lightModes.getAttribute('alt')
    const modeSwitch = document.getElementById('mode')

    if (currentMode == 'darkMode'){ //Dark para light
        lightModes.setAttribute('alt','lightMode')
        lightModes.setAttribute('src','images/light-dark/lightMode.svg')
        modeSwitch.setAttribute('href','css/lightStyles.css')

    }else if(currentMode == 'lightMode'){ //Light para galaxy
        lightModes.setAttribute('alt','galaxyMode')
        lightModes.setAttribute('src','images/light-dark/galaxyMode.svg')
        modeSwitch.setAttribute('href','css/galaxyStyles.css')

    }else{ //Galaxy para dark
        lightModes.setAttribute('alt','darkMode')
        lightModes.setAttribute('src','images/light-dark/darkMode.svg')
        modeSwitch.setAttribute('href','css/darkStyles.css')
    }
})
// DARK AND LIGHT MODE SWITCH

//SECTION VISIBILITY

const links = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
            if (!entry.isIntersecting){
                return
            }
        
        const entrySelect = entry.target.id

        links.forEach(link =>{
            if (link.getAttribute('href')==`#${entrySelect}`){
                link.classList.add('active')
            }else{
                link.classList.remove('active')
            }
        })
    })
},{
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0
})
sections.forEach(section=>observer.observe(section))

//SECTION VISIBILITY
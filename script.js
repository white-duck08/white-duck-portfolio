let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("AutoCAD");
        habilidades[1].classList.add("SolidWorks");
        habilidades[2].classList.add("DraftingDesigning");
        habilidades[3].classList.add("ManufacturingProcesses");
        habilidades[4].classList.add("AutomotiveSystems");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("Creativite");
        habilidades[8].classList.add("Leadership");
        habilidades[9].classList.add("ProblemSolving");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new Typed(elements[i].querySelector('.wrap'), {
            strings: JSON.parse(toRotate),
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: parseInt(period, 10) || 2000,
            loop: true
          });
        }
    }
});
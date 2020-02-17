//Declaration des variables
var nombreMystere;
var compteur = 1;
var chrono = 0;
var animationId = null; // Identifiant de l'animation


function cacherMonBouton(){
    if (nombreMystere == 0)
    {
        document.getElementById("myBtn").style.visibility = "hidden";
    } else {
        document.getElementById("myBtn").style.visibility = "visible";
    }
}

function cacherImage() {
    document.getElementById("image").style.display = "none";
}

animationId = requestAnimationFrame(cacherImage);

//Generation du nombre mystère
function lancerDe(){
    nombreMystere =  Math.floor(Math.random() * 6 + 1);
    cacherMonBouton()
    console.log(nombreMystere)
}

function lancerChrono() {     
    if (chrono < 3)
    {
       console.log(chrono += 1)
    }else{
        clearInterval(intervalId);
        cacherImage();
        chrono = 0;
    }   
}

function monNombre(){  
    var nombre = document.getElementById("nombre").value;

    console.log(nombre)
    console.log(nombreMystere)
  
    if (nombre < nombreMystere){
        
        console.log("Votre nombre est trop petit.")
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Votre nombre est trop petit.";        document.getElementById("image").style.display = 'block'
        // Appelle la fonction lancerChrono toutes les secondes (1000 millisecondes)
        intervalId = setInterval(lancerChrono, 1000);

    }else if(nombre == nombreMystere){
        
        console.log("Bravo ! Vous avez deviné ce nombre en " + compteur + " essais.")

        if (compteur > 1){
            document.getElementById("message").style.color = "orange";
            document.getElementById("message").innerHTML = "Bravo ! Vous avez deviné ce nombre en " + compteur + " essais.";
        }else{
            document.getElementById("message").style.color = "green";
            document.getElementById("message").innerHTML = "Bravo ! Vous avez deviné ce nombre en " + compteur + " essai.";
        }

        nombreMystere = 0;
        compteur = 0;
        
    }else if(nombre > nombreMystere){        
        console.log("Votre nombre est trop grand.")
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Votre nombre est trop grand.";
        document.getElementById("image").style.display = 'block'
        intervalId = setInterval(lancerChrono, 1000);
    }
    //Compteur du nombre fois on a donnée un nombre
    compteur++;

    cacherMonBouton()
}

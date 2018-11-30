cartes = ["imgnaruto/Kunai_Naruto.png", "imgnaruto/sasuke.jpg", "imgnaruto/sakura.jpg", "imgnaruto/kakashi.jpg", "imgnaruto/shika.jpg", "imgnaruto/choji.jpg", "imgnaruto/ino.jpg", "imgnaruto/asuma.jpg", "imgnaruto/hinata.jpg", "imgnaruto/kiba.jpg", "imgnaruto/Kunai_Naruto.png", "imgnaruto/sasuke.jpg", "imgnaruto/sakura.jpg", "imgnaruto/kakashi.jpg", "imgnaruto/shika.jpg", "imgnaruto/choji.jpg", "imgnaruto/ino.jpg", "imgnaruto/asuma.jpg", "imgnaruto/hinata.jpg", "imgnaruto/kiba.jpg"];


cartes2 = new Array();
choix = new Array();
choix2 = new Array();
com = paire = 0;
control = false;
var cont, test, test2;

function genere()//start the game and mix the random cards and compare cards
{
    for (var i = 0; i < 10; i++) {
        do {
            choix[i] = Math.floor(Math.random() * 10);
            test = true;
            for (var j = 0; j < i; j++) {
                if (choix[j] == choix[i])
                    test = false;

            }
        }
        while (test == false);
        cartes2[i] = cartes[choix[i]];
    }
    for (var z = 0, l = 10; z < 10, l < 20; z++, l++) {
        do {
            choix2[z] = Math.floor(Math.random() * 10);
            test2 = true;
            for (var k = 0; k < z; k++) {
                if (choix2[k] == choix2[z])
                    test2 = false;
            }
        }
        while (test2 == false);
        cartes2[l] = cartes2[choix2[z]];
    }
    alert("Le jeu est prêt !\nVous pouvez cliquer sur les cartes retournées."); // alert for ready
    control = true;

    console.log(cartes2[i]);
    console.log(choix[i]);
}

var essaie = 0;


//compare and test if the cards matching
function joue(n) {
    if (control != true) {
        alert("Vous n'avez pas cliqué sur DÉMARRER !"); // alert for start
        return false;
    }
    com++;

    document.images[n].src = cartes2[n];

    if (com == 1) {
        cont = n;
        return false;
    } else if (com == 2) {
        essaie++;
        com = 0;
        console.log(control);

        if (cartes2[n] == cartes2[cont]) {
            paire++;

            if (paire == 1) {
                openModal();
                clearTimeout(time);
                score();
                paire = 0;
                document.getElementById("score").innerHTML = document.getElementById("start").innerHTML;
                document.getElementById("score2").innerHTML = essaie;
                return false;
            } else

                console.log(cartes2[n]);
            window.status = "Nombre de paires trouvées: " + paire;
        } else {
            document.images[n].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhN5_OeiKMlaPyYJRAdaBgF696cn0u-_6nezsQDrpguldBYCOig";
            document.images[cont].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhN5_OeiKMlaPyYJRAdaBgF696cn0u-_6nezsQDrpguldBYCOig";

        }
    }

}


var start = 0;
var time = 0;
var difference = 0;
var fin = 0;


//pop-up score and time
function score() {
    fin = new Date();

    difference = fin - start;

    difference = new Date(difference);

    var msec = difference.getMilliseconds();

    var sec = difference.getSeconds();

    var min = difference.getMinutes();

    if (min < 10) {

        min = "0" + min

    }

    if (sec < 10) {

        sec = "0" + sec

    }

    if (msec < 10) {

        msec = "00" + msec

    } else if (msec < 100) {

        msec = "0" + msec

    }

    document.getElementById("start").innerHTML = min + ":" + sec + ":" + msec;
    document.getElementById("start").style.fontSize = 2.5 + "vh";

    time = setTimeout("score()", 10);


}

function newscore() { // Start Timer function
    start = new Date();
    score();


}

//victory screen

var modal = document.getElementById('simpleModal'); // Victory screen ID
var closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click', closeModal);

function openModal() {

    modal.style.display = 'block'; // Display victory screen

}

function closeModal() {

    modal.style.display = 'none'; // Hide victory screen

}



const sezioneArgument = document.querySelector(".argument");


function inizializza(){
    const div = [];

    console.log(titolo[0]);

    for(let i = 0; i < 2; i++){
        div[i] = document.createElement("div");
        div[i].classList.add("sezione");
        const titoloh1 = document.createElement("h1");
        titoloh1.appendChild(document.createTextNode(titolo[i]));
        div[i].appendChild(titoloh1);

        const divPreferiti = document.createElement("div");
        divPreferiti.classList.add("preferito");
        divPreferiti.appendChild(document.createTextNode("Preferiti"));
        div[i].appendChild(divPreferiti);
        if(i === 0){
            const divImg = document.createElement("div");
            divImg.classList.add("size");
            const immagine = [];
            for(let j = 0; j < 2; j++){
                immagine[j] = document.createElement("img");
                immagine[j].src = immagini[j];
                divImg.appendChild(immagine[j]);
            }
            div[i].appendChild(divImg);
            const parag = document.createElement("div");
            const paragNascos = document.createElement("p");
            paragNascos.innerHTML = paragrafi[i];
            paragNascos.classList.add("dettaglinascosti");
            parag.appendChild(paragNascos);
            const paragNotNascos = document.createElement("p");
            paragNotNascos.classList.add("dettagli");
            paragNotNascos.innerHTML = "Mostra dettagli";
            parag.appendChild(paragNotNascos);
            div[i].appendChild(parag);
            
        }else{
            const divCenter = document.createElement("div");
            divCenter.classList.add("center");
            const divImgLast = document.createElement("img");
            divImgLast.src = immagini[2];
            divCenter.appendChild(divImgLast);
            div[i].appendChild(divCenter);

            const paragNascos = document.createElement("p");
            paragNascos.innerHTML = paragrafi[i];
            paragNascos.classList.add("dettaglinascosti");
            divCenter.appendChild(paragNascos);

            const paragNotNascos = document.createElement("p");
            paragNotNascos.classList.add("dettagli");
            paragNotNascos.innerHTML = "Mostra dettagli";
            divCenter.appendChild(paragNotNascos);

            div[i].appendChild(divCenter);
        }
        sezioneArgument.appendChild(div[i]);
        console.log("Elementi caricati");
    }

    //all'inizio era così, poi l'ho riscritto. 
  /*  const firsth1 = document.createElement("h1");
    firsth1.appendChild(document.createTextNode(titolo[0]));   
    const divPreferito1 = document.createElement("div");
    divPreferito1.classList.add("preferito");
    divPreferito1.appendChild(document.createTextNode("Preferiti"));
    const divImg = document.createElement("div");
    divImg.classList.add("size");
    const img1 = document.createElement("img");
    img1.src = immagini[0];
    const img2 = document.createElement("img")
    img2.src = immagini[1];
    divImg.appendChild(img1);
    divImg.appendChild(img2);
    const parag1 = document.createElement("p");
    parag1.classList.add("dettaglinascosti");
    parag1.innerHTML = paragrafi[0];
 
    const paragNascosto1 = document.createElement("p");
    paragNascosto1.classList.add("dettagli");
    paragNascosto1.innerHTML = "Mostra dettagli";
    const paragDiv1 = document.createElement("div");
    paragDiv1.appendChild(parag1);
    paragDiv1.appendChild(paragNascosto1);
    
    //div contenitore 1
    const firstsections = document.createElement("div");
    firstsections.classList.add("sezione");
    firstsections.appendChild(firsth1);
    firstsections.appendChild(divPreferito1);
    firstsections.appendChild(divImg);
    firstsections.appendChild(paragDiv1);
    sezioneArgument.appendChild(firstsections);

    //div contenitore 2
    const secondsection = document.createElement("div");
    secondsection.classList.add("sezione");
    const secondh1 = document.createElement("h1");
    secondh1.appendChild(document.createTextNode(titolo[1]));
    secondsection.appendChild(secondh1);
    const divPreferito2 = document.createElement("div");
    divPreferito2.classList.add("preferito");
    divPreferito2.appendChild(document.createTextNode("Preferiti"));
    secondsection.appendChild(divPreferito2);

    const divCenter = document.createElement("div");
    divCenter.classList.add("center");
    const img = document.createElement("img");
    img.src = immagini[2];
    divCenter.appendChild(img);
    const parag2 = document.createElement("p");
    parag2.innerHTML = paragrafi[1];
    parag2.classList.add("dettaglinascosti");
    divCenter.appendChild(parag2);
    const mostraDettagli2 = document.createElement("p");
    mostraDettagli2.innerHTML = "Mostra dettagli";
    mostraDettagli2.classList.add("dettagli");
    divCenter.appendChild(mostraDettagli2);
    
    secondsection.appendChild(divCenter);
    sezioneArgument.appendChild(secondsection);  */
}
inizializza();


//script per la barra di ricerca.
const barraDiRicerca = document.querySelector(".ricerca");
const saveSections = document.querySelectorAll(".sezione");
const argument = document.querySelector(".argument");
const elemTrovati = document.querySelector(".hidden");


barraDiRicerca.addEventListener("keyup", barraSearch);

function barraSearch(){
        let list = [];
       
        if(check(barraDiRicerca.value, list)){
            const divBarra = document.getElementById("barradiricerca");
            if(list.length === 0){
                console.log("Nessuno elemento trovato");
                ripristina();
            }else{
                elemTrovati.style.display = "flex";
                
                for(let i = 0; i < list.length; i++){
                    divBarra.appendChild(list[i]);
                    for(let j = 0; j < saveSections.length; j++){
                        if(!list.includes(saveSections[j])){
                          if(divBarra.contains(saveSections[j])){
                            argument.appendChild(saveSections[j]);
                          }
                        }
                    }
                    
                }
            }  
        }
}

function ripristina(){
        let divSezioni = document.getElementsByClassName("sezione");
        for(let i = 0; i < divSezioni.length; i++){
            argument.appendChild(saveSections[i]);
        }
        elemTrovati.style.display = "none";
}

function checkList(list, elem){
    if(list.length === 0){
        list.push(elem);
        return true;
    }else{
        for(let i = 0; i < list.length; i++){
            if(list[i] !== elem){
                list.push(elem);
                return true;
            }
        }
    }

    return false;
}
function check(testo, list){
    if(testo.length === 0){
        console.log("Ripristino");
        ripristina();
        return false;
    }    
    let divSezioni = document.getElementsByClassName("sezione");
    let save;
  
    for(let i = 0; i < divSezioni.length; i++){
        //cerca il titolo
        let titolo = divSezioni[i].getElementsByTagName("h1")[0];
        if(titolo.textContent.includes(testo)){
            console.log("true titolo: " + i);
            checkList(list, divSezioni[i]);
           
        }
        //cerca paragrafo
        let paragrafo = divSezioni[i].getElementsByTagName("p")[0].innerHTML;
        if(paragrafo.includes(testo)){
            console.log("true paragrafo: "+i);
            checkList(list, divSezioni[i]);

        }
    }   
    return true;
    
}


//scritp per la sezione dei preferiti.
const sezionePreferiti = document.getElementById("preferiti");
const divPreferiti = document.querySelectorAll(".preferito");
let listPreferiti = [];



for(let i = 0; i < divPreferiti.length; i++){
    divPreferiti[i].addEventListener("click", addSezionePreferiti);
}
function addSezionePreferiti(event){
    console.log("Cliccato");
    const addfavo = event.currentTarget;
    const sectionElement = event.currentTarget.parentNode;
    if(listPreferiti.includes(sectionElement)){
        console.log("c'è sta già un elemento");
    }else{
        listPreferiti.push(sectionElement);
        console.log("inserito nella lista");
        const sectionClone = event.currentTarget.parentNode.cloneNode(true);
        sectionClone.classList.remove("sezione");
        const prefButton = sectionClone.querySelector(".preferito");
        prefButton.classList.remove("preferito");
        prefButton.classList.add("removepreferito");
        prefButton.removeEventListener("click", addSezionePreferiti);
        prefButton.addEventListener("click", removeSezionePreferiti);
        const dettagli = sectionClone.querySelector(".dettagli");
        dettagli.addEventListener("click", addDescrizione);
        sezionePreferiti.appendChild(sectionClone);
        barraPreferiti();
    }
}

function removeSezionePreferiti(event){
    console.log("rimuovo sezione");
    const divToDelete = event.currentTarget.parentNode;
    sezionePreferiti.removeChild(divToDelete);
    listPreferiti.splice(divToDelete,1);
    console.log(listPreferiti.length);
    barraPreferiti();
}

function barraPreferiti(){
    if(listPreferiti.length === 0){
        sezionePreferiti.style.display = "none";
    }else{
        sezionePreferiti.style.display = "flex";
    }
}

//script per i paragrafi
const pMostraDettagli = document.querySelectorAll(".dettagli");
const paragraph = document.querySelectorAll(".dettaglinascosti");

for(let i of pMostraDettagli){
    i.addEventListener("click", addDescrizione);
}

function addDescrizione(event){
    console.log("Aggiungo descrizione");
    const mostraDettagli = event.currentTarget;
    mostraDettagli.classList.remove("dettagli");
    mostraDettagli.classList.add("dettaglinascosti");

    const paragrafo = event.currentTarget.parentNode;
    const daVedere = paragrafo.querySelector("p");
    daVedere.classList.remove("dettaglinascosti");
    daVedere.classList.add("dettagli");
    daVedere.addEventListener("click", removeDescrizione);
}

function removeDescrizione(event){
    console.log("Rimuovo descrizione");
    const paragrafo = event.currentTarget;
    const mostraDettagli = event.currentTarget.parentNode;
    const daVedere = mostraDettagli.querySelector(".dettaglinascosti");

    paragrafo.classList.remove("dettagli");
    paragrafo.classList.add("dettaglinascosti");
    
    daVedere.classList.remove("dettaglinascosti");
    daVedere.classList.add("dettagli");
    //l'ho messo solo perchè se attiviamo i dettagli e poi i preferiti, nella sezione preferiti non ti permette di rimettere la sezione in nascosta...
    daVedere.addEventListener("click", addDescrizione);
}

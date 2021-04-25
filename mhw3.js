const access_key = "ea3cd4a9d23877146e336b46928958c2";
const url = "http://api.weatherstack.com/current?";

function ricercaMeteo(){
  const input = document.querySelector(".ricercameteo").value.replace(" ", "%20");
  if(input.length !== 0){
    let completeUrl = entireUrl + "&query="+input;
    fetch(completeUrl).then(onPromise).then(onWeather);
  }else{
    console.log("nessuna città inserita");
  }
}



const entireUrl = url + "access_key="+access_key;
const buttonCerca = document.querySelector(".Cerca");
buttonCerca.addEventListener("click", ricercaMeteo);



function onWeather(json){
    const divCitta = document.querySelector(".citta");
    divCitta.innerHTML = "";

    console.log(json);
    const descrizioneMeteo = "A "+ json.location.name + " è "+ json.current.weather_descriptions[0];
    const img = document.createElement("img");
    img.src = json.current.weather_icons[0];

    divCitta.appendChild(img);
    const h1 = document.createElement("h1");
    h1.innerHTML = descrizioneMeteo;
    divCitta.appendChild(h1);
}




//OAuth script 
const follow = "https://open.spotify.com/user/hentolinizzatorhd";
const buttonFollow = document.querySelector(".follow");
const buttonPlaylist = document.querySelector(".playlist");
buttonFollow.addEventListener("click", followPoolParty);
buttonPlaylist.addEventListener("click", startPlaylist);
const client_id = '02fd1d8f64cf491d8c64adc76100e472';
const client_secret = 'b54eb9427a9e4692acaf0291048e8c7a';

let token;
function followPoolParty(){
  window.open(follow);
}

function onPromise(promise)
{
  return promise.json();
}
function onTokenJson(json)
{
  token = json.access_token;
  console.log("Token preso ");
}


function playlist(json){
    const sezione = document.getElementById("modale");
    sezione.addEventListener("click", removeModale);
    console.log(sezione);
    const playlis = json;
    console.log(json);
    const tracksPlaylist = playlis.tracks.items;
    console.log(tracksPlaylist);
    const h1 = document.createElement("h1");
    h1.innerHTML = "Apri playlist!";
    const link = document.createElement("a");
    link.href = "https://open.spotify.com/playlist/1XrOBHAEoouDXtQEV4oEiy";
    link.appendChild(h1);
    sezione.appendChild(link);
    for(let i = 0; i < tracksPlaylist.length; i++){
      let img = document.createElement("img");
      let a = document.createElement("a");
      a.href = "https://open.spotify.com/track/"+ tracksPlaylist[i].track.id;
      img.src = tracksPlaylist[i].track.album.images[0].url;
      a.appendChild(img);
      sezione.appendChild(a);
    }

    console.log("Playlist radio di PoolParty e' stata caricata!");
}

function removeModale(){
    const divModale = document.getElementById("modale");
    divModale.innerHTML = "";
    modale.setAttribute("id", "");
    const body = document.querySelector("body");
    body.classList.remove("scorrimento");
    console.log(divModale);
}



fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onPromise).then(onTokenJson);




function startPlaylist(){
  fetch("https://api.spotify.com/v1/playlists/1XrOBHAEoouDXtQEV4oEiy", {
        headers:
        {
          'Authorization': 'Bearer ' + token
        }
      
      }).then(onPromise).then(playlist);
      const body = document.querySelector("body");
      body.classList.add("scorrimento");
      const modale = document.querySelector(".sezionemodale");
      modale.setAttribute("id", "modale");
}

//Dans ce projet, nous allons récupérer la météo grâce à l'API de OpenWeatherMap. 
//Et plus particulièrement, grâce à l'API qui permet de récupérer la météo actuelle.

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'

/*q - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)

appid - pour spécifier votre clé secrète 
(9745b272e6f312ca99794a979760245c)

units - pour spécifier que nous voulons la température en Celsius*/

const requette = new XMLHttpRequest();

let temperature_label = document.querySelector('#temperature_label');
let ville_label = document.querySelector('#ville');
let changer_ville = document.querySelector('#changer');
let villeChoisie;


function recevoirTemperature(ville){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=secreyKey&units=metric`;
    requette.open('get', url);
    requette.responseType = 'json';
    requette.send();
    
    // console.log(requette);
    
    requette.onload = function(){
        if (requette.readyState === XMLHttpRequest.DONE){//Si la requete est bien terminée
            if (requette.status === 200){
                let reponse = requette.response
                // console.log(reponse);
                ville_label.textContent = ville;
                temperature_label.textContent = reponse.main.temp;
    
            }
            else{
                alert('Un problème est survenu lors du chargement de la requete.')
            }
        }
    }
}

if (geolocation in navigator){

}
else{
    recevoirTemperature('Abidjan');
}



changer_ville.addEventListener('click', ()=>{
    let villeChoisie = prompt('Veuillez choisir une ville : ');
    recevoirTemperature(villeChoisie);
})


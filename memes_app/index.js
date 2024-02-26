const Memes  = document.getElementById('meme');
const Titlee = document.getElementById('title');
const button = document.getElementById('btn');
let url = " https://meme-api.com/gimme";
const getmeme=  ()=>{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      console.log(data)
    })
}
button.addEventListener('click',getmeme)
window.addEventListener('load',getmeme)
getmeme()

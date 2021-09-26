const next=document.querySelector('#next');
const word=document.querySelector('#word');
const quotetrans=document.querySelector('#trans');
const quotenotes=document.querySelector('#notes');
const audio=document.querySelector("audio")
const an=document.getElementById("an")
function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}
count=0;
function f(){
    word.textContent=data[count]["name"];
   next.setAttribute("width","10px")
   quotetrans.textContent=data[count]["trans"];
   str='';
   for(i in data[count]["notes"]){
       str+=data[count]["notes"][i]
   };
   quotenotes.textContent=str;

   audio.src="http://media.shanbay.com/audio/us/"+data[count]["name"]+".mp3";
   audio.play();
   setTimeout('audio.play()','1500');
   count++;
   clearInterval(delay);
delay=setInterval(f,3500);
}
next.onclick=f;
delay=setInterval(f,3500);
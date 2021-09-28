const next=document.querySelector('#next');
const word=document.querySelector('#word');
const quotetrans=document.querySelector('#trans');
const quotenotes=document.querySelector('#notes');
const audio=document.querySelector("audio")
const an=document.getElementById("an")
function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}

//乱序
sortedl=[]
randl=[]
j=data.length;
for(i=0;i<50;i++){
    j--;
    sortedl[i]=j;
}
for(i=0;i<data.length-50;i++){
    randl[i]=i;
}
randl.sort(()=>Math.random()>0.5?-1:1)
randarr=sortedl.concat(randl)

count=0;
function f(){
    word.textContent=data[randarr[count]]["name"];
   next.setAttribute("width","10px")
   quotetrans.textContent=data[randarr[count]]["trans"];
   str='';
   for(i in data[randarr[count]]["notes"]){
       str+=data[randarr[count]]["notes"][i]
   };
   quotenotes.textContent=str;

   audio.src="http://media.shanbay.com/audio/us/"+data[randarr[count]]["name"]+".mp3";
   audio.play();
   setTimeout('audio.play()','1500');
   count++;
   clearInterval(delay);
delay=setInterval(f,3500);
}
next.onclick=f;
delay=setInterval(f,3500);
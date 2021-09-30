const next=document.querySelector('#next');
const word=document.querySelector('#word');
const quotetrans=document.querySelector('#trans');
const quotenotes=document.querySelector('#notes');
const audio=document.querySelector("audio")
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
function changeWord(){
    iWord=data[randarr[count]]
    word.textContent=iWord["name"];
    next.setAttribute("width","10px")
    quotetrans.textContent=iWord["trans"];
    str='';
    for(i in iWord["notes"]){
        str+=iWord["notes"][i]
    };
    quotenotes.textContent=str;
    audio.src="http://media.shanbay.com/audio/us/"+iWord["name"]+".mp3";
    audio.play();
    setTimeout('audio.play()',2000);
    count++;
    delay=1100+187.5*iWord["trans"].length;//delay function
    setTimeout(f,delay);
}
next.addEventListener('click',changeWord);
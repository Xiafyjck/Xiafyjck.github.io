const next=document.querySelector('#next');
const word=document.querySelector('#word');
const quotetrans=document.querySelector('#trans');
const quotenotes=document.querySelector('#notes');
const audio=document.querySelector("audio")
function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}

//乱序
rangelist=[]
randlist=[]
for(i=0;i<data.length;i++){
    rangelist[i]=data.length-1-i;
}
// for(i=0;i<data.length;i++){
//     r=Math.round(Math.random()*Math.log(i+1))%rangelist.length;
//     randlist[i]=rangelist[r];
//     rangelist.splice(r,1);
// }
for(i=0;i<2000;i++){
    r=Math.round(Math.random()*Math.pow(i,0.75))%rangelist.length;
    randlist[i]=rangelist[r];
    rangelist.splice(r,1);
}
//统计时间
totaltime=0;
for(i=0;i<data.length;i++){
    totaltime+=1100+187.5*data[i]["trans"].length;
}
trans.textContent=Math.round(totaltime/60000)+'min';

count=0;
function changeWord(){
    iWord=data[randlist[count]]
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
    setTimeout(changeWord,delay);
}
next.addEventListener('click',changeWord);
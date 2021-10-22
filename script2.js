//先匹配所有非标签文本，再匹配标签里面的单词，如果单词命中笔记或者经过lemmaList还原后命中笔记，则添加<span class="markedword">标签
document.body.innerHTML=document.body.innerHTML.replace(/(?<=>)[^<]*/ig,(match)=>match.replace(/\b\w+\b/ig,(match)=>{
    let lmatch=match.toLocaleLowerCase();
    if(markedWordList[lmatch]){
        sNote='<span class="sNote">'+markedWordList[lmatch]["notes"]+'</span>';
        sMarkedWord='<span class="sMarkedWord">'+match+'</span>';
        dMarkedWord='<span class="dMardkedWord">'+sMarkedWord+sNote+'</span>';
        return dMarkedWord;
    }
    if(markedWordList[lemmaList[lmatch]]){
        sNote='<span class="sNote">'+markedWordList[lemmaList[lmatch]]["notes"]+'</span>';
        sMarkedWord='<span class="sMarkedWord">'+match+'</span>';
        dMarkedWord='<span class="dMardkedWord">'+sMarkedWord+sNote+'</span>';
        return dMarkedWord;
    }
    return match;
}));


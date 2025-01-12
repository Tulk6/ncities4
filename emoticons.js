var emoticons_flex = document.getElementById("emoticons");

for (let i=0; i<9; i++){
    let elem = document.createElement("img");
    elem.src = 'emoticons/'+i+'.gif';
    elem.classList.add("emoticon-image");
    if (elem.width > elem.height){
        elem.height = 100;
    }else{
        elem.width = 100;
    }
    emoticons_flex.appendChild(elem);
}
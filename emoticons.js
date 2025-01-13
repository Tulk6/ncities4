var emoticons_flex = document.getElementById("emoticons");

var tag_form_element = document.getElementById("tag_form");
var tag_alcohol_element = document.getElementById("tag_alcohol");

tag_form_element.addEventListener("change", function() {form_change()});

for (let i=0; i<9; i++){
    let elem = document.createElement("img");
    elem.src = 'gifs/'+i+'.gif';
    elem.classList.add("emoticon-image");
    if (elem.width > elem.height){
        elem.height = 100;
    }else{
        elem.width = 100;
    }
    emoticons_flex.appendChild(elem);
}

function form_change(){
    var selected_tags = [];
    for (var el of tag_form_element.elements){
        if (el.id == "clear_selection"){
            continue;
        }
        if (el.checked){
            selected_tags.push(el.labels[0].innerHTML)
        }
        console.log(el);
    }
    console.log(selected_tags);
    /*console.log(tag_form_element.elements['tag_alcohol'].checked);*/
}
var emoticons_flex = document.getElementById("emoticons");

var tag_form_element = document.getElementById("tag_form");

tag_form_element.addEventListener("change", function() {form_change()});

var emoticons_index = {
    'all': new Set(['0.gif']),
    'desperate': new Set(['0.gif']),
    'alcohol': new Set(['0.gif'])
}

function form_change(){
    setTimeout(function(){
        // gross timeout but easy way to make reset run after selections cleared
        var selected_tags = [];
        for (var el of tag_form_element.elements){
            if (el.id == "clear_selection"){
                continue;
            }

            if (el.checked){
                selected_tags.push(el.labels[0].innerHTML)
            }
            //console.log(el);
        }
        //console.log(selected_tags);
        while (emoticons_flex.firstChild){
            emoticons_flex.firstChild.remove();
        }

        var relevant_emoticons = emoticons_index['all'];

        for (tag of selected_tags){
            relevant_emoticons = relevant_emoticons.intersection(emoticons_index[tag]);
        }
        

        for (path of relevant_emoticons){
            //console.log(path);
            let elem = document.createElement("img");
            elem.src = 'gifs/'+path;
            elem.classList.add("emoticon-image");
            emoticons_flex.appendChild(elem);
        }
    }, 0);
    /*console.log(tag_form_element.elements['tag_alcohol'].checked);*/
}

form_change();
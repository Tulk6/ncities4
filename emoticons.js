var emoticons_flex = document.getElementById("emoticons");

var tag_form_element = document.getElementById("tag_form");
var tag_flex_element = document.getElementById("tag_flex")

tag_form_element.addEventListener("change", function() {form_change()});

var emoticons_index = {
    'all': new Set(['0.gif', '1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', 'm1206.gif', 'm1212.gif', 'm1222.gif', 'm1230.gif', 'm1252.gif', 'm1258.gif', 'm1263.gif', 'm1269.gif', 'm1274.gif', 't0115.gif', 't0129.gif', 't0135.gif', 't0140.gif', 'm09035.gif', 'm09041.gif', 'm09061.gif', 'm09074.gif', 'aim1.gif', 'aim25.gif', 'aim26.gif', 'aim29.gif', 'anim_20.gif', 'anim_25.gif', 'anim_27.gif', 'anim_47.gif', 'cool0010.gif', 'cool0044.gif', 'happy0030.gif', 'happy0158.gif', 'indifferent0006.gif', 'indifferent0025.gif', 'love0005.gif', 'love0029.gif', 'love0030.gif', 'love0045.gif', 'love0047.gif', 'love0050.gif', 'love0056.gif', 'love0063.gif', 'mad0013.gif', 'mad0040.gif', 'mad0079.gif', 'mad0159.gif', 'mad0217.gif', 'mad0233.gif', 'mad0244.gif', 'msn8.gif', 'msn15.gif', 'msn24.gif', 'msn32.gif', 'rolleye0009.gif', 'sad0025.gif', 'sad0071.gif', 'sad0098.gif', 'sad0125.gif', 'sad0144.gif', 'winking0070.gif', 'alien.gif', 'angel.gif', 'angel3.gif', 'angry.gif', 'angryfire.gif', 'argue.gif', 'arrow.gif', 'baaa.gif', 'banana.gif', 'banana_funky.gif', 'banana-001.gif', 'banana-002.gif', 'banana2.gif', 'banana-003.gif', 'banana-004.gif', 'banana-006.gif', 'banana-008.gif', 'banana-010.gif', 'banana-011.gif', 'banana-012.gif', 'banana-015.gif', 'banana-016.gif', 'banana-017.gif', 'banana-018.gif', 'banana-019.gif', 'banana-021.gif', 'banana-022.gif', 'banghead.gif', 'bazooka.gif', 'beer.gif', 'beer2.gif', 'biggrinangel.gif', 'blahblah.gif', 'bow.gif', 'brick.gif', 'bs.gif', 'c00l.gif', 'chef.gif', 'clap.gif', 'comeandgetsome.gif', 'confused.gif', 'confused3.gif', 'cool2.gif', 'crazy.gif', 'cthulhu.gif', 'dance.gif', 'danceangel.gif', 'dancebeer.gif', 'dancecool.gif', 'die.gif', 'drunk.gif', 'eek.gif', 'eek2.gif', 'eek3.gif', 'explode.gif', 'face2.gif', 'face4.gif', 'flamethrower.gif', 'flower2.gif', 'frog.gif', 'frog2.gif', 'frown.gif', 'frustrated.gif', 'gonk.gif', 'grouchy.gif', 'grrr.gif', 'headscratch.gif', 'hug.gif', 'lol.gif', 'nuts.gif']),
    'angry': new Set(['0.gif', 't0115.gif', 't0129.gif', 't0135.gif', 'aim1.gif', 'aim25.gif', 'anim_20.gif', 'mad0013.gif', 'mad0040.gif', 'mad0159.gif', 'mad0217.gif', 'mad0233.gif', 'mad0244.gif', 'angry.gif', 'angryfire.gif', 'argue.gif', 'banghead.gif', 'bazooka.gif', 'frustrated.gif', 'grouchy.gif', 'grrr.gif']),
    'fight': new Set(['0.gif', 't0129.gif', 't0135.gif', 'm09041.gif', 'mad0159.gif', 'argue.gif', 'bazooka.gif', 'brick.gif', 'comeandgetsome.gif', 'flamethrower.gif']),
    'ok': new Set(['1.gif', 'm1212.gif']),
    'desperate': new Set(['2.gif', '7.gif', 'love0029.gif', 'love0030.gif', 'rolleye0009.gif', 'sad0025.gif']),
    'concerned': new Set(['2.gif', '4.gif', 'mad0079.gif', 'msn32.gif', 'rolleye0009.gif', 'banana-022.gif', 'confused.gif', 'confused3.gif', 'crazy.gif', 'eek.gif', 'eek2.gif', 'eek3.gif', 'explode.gif', 'frown.gif', 'gonk.gif', 'nuts.gif']),
    'sad': new Set(['2.gif', '7.gif', 'm1258.gif', 'm1263.gif', 't0140.gif', 'm09035.gif', 'm09041.gif', 'm09061.gif', 'love0045.gif', 'love0056.gif', 'rolleye0009.gif', 'sad0025.gif', 'sad0071.gif', 'sad0098.gif', 'sad0125.gif', 'sad0144.gif', 'frown.gif']),
    'alien': new Set(['3.gif', 'alien.gif']),
    'happy': new Set(['3.gif', '5.gif', '8.gif', 'm1206.gif', 'm1222.gif', 'm1230.gif', 'm1252.gif', 'm1258.gif', 'm1263.gif', 'm1269.gif', 't0135.gif', 'anim_25.gif', 'happy0030.gif', 'happy0158.gif', 'love0047.gif', 'love0050.gif', 'mad0244.gif', 'angel.gif', 'angel3.gif', 'biggrinangel.gif']),
    'shocked': new Set(['4.gif', 'mad0079.gif', 'msn15.gif']),
    'cool': new Set(['6.gif', 'cool0010.gif', 'cool0044.gif', 'love0063.gif', 'c00l.gif', 'cool2.gif', 'dancecool.gif']),
    'chill': new Set(['6.gif']),
    'alcohol': new Set(['7.gif', '8.gif', 'm1230.gif', 'beer.gif', 'beer2.gif', 'dancebeer.gif', 'drunk.gif']),
    'friends': new Set(['m1206.gif', 'm1258.gif', 'm1263.gif', 'm1269.gif', 'm1274.gif']),
    'nice': new Set(['m1206.gif', 'anim_25.gif', 'flower2.gif', 'hug.gif', 'lol.gif']),
    'enamoured': new Set(['m1252.gif', 'love0005.gif', 'love0029.gif', 'love0030.gif', 'love0045.gif', 'love0047.gif', 'love0050.gif', 'love0056.gif', 'love0063.gif']),
    'mean': new Set(['t0129.gif', 't0135.gif', 't0140.gif', 'm09074.gif', 'aim1.gif', 'msn8.gif', 'banana-019.gif', 'banana-021.gif', 'bs.gif', 'die.gif']),
    'upset': new Set(['aim25.gif']),
    'mischievous': new Set(['aim26.gif']),
    'pensive': new Set(['aim29.gif']),
    'music': new Set(['anim_27.gif', 'anim_47.gif']),
    'indifferent': new Set(['indifferent0006.gif', 'indifferent0025.gif']),
    'annoyed': new Set(['mad0040.gif', 'rolleye0009.gif']),
    'angel': new Set(['angel.gif', 'angel3.gif', 'biggrinangel.gif', 'danceangel.gif']),
    'animal': new Set(['baaa.gif', 'frog.gif', 'frog2.gif', 'grouchy.gif']),
    'banana': new Set(['banana.gif', 'banana_funky.gif', 'banana-001.gif', 'banana-002.gif', 'banana2.gif', 'banana-003.gif', 'banana-004.gif', 'banana-006.gif', 'banana-008.gif', 'banana-010.gif', 'banana-011.gif', 'banana-012.gif', 'banana-015.gif', 'banana-016.gif', 'banana-017.gif', 'banana-018.gif', 'banana-019.gif', 'banana-021.gif', 'banana-022.gif']), 
    'dance': new Set(['banana.gif', 'banana_funky.gif', 'banana-001.gif', 'banana-002.gif', 'banana2.gif', 'banana-003.gif', 'banana-004.gif', 'banana-006.gif', 'banana-008.gif', 'banana-010.gif', 'banana-011.gif', 'banana-012.gif', 'banana-015.gif', 'banana-016.gif', 'banana-017.gif', 'banana-018.gif', 'dance.gif', 'danceangel.gif', 'dancebeer.gif', 'dancecool.gif']),
    'confused': new Set(['confused.gif', 'confused3.gif', 'headscratch.gif', 'nuts.gif']),
    'crazy': new Set(['crazy.gif', 'nuts.gif']),
    'scared': new Set(['eek.gif', 'eek2.gif', 'eek3.gif']),
    'funny': new Set(['lol.gif'])
}

function form_change(){
    console.log("hello!");
    setTimeout(function(){
        // gross timeout but easy way to make reset run after selections cleared
        var selected_tags = [];
        for (var el of tag_flex_element.children){
            if (el.id == "clear_selection"){
                continue;
            }

            if (el.firstChild.checked){
                selected_tags.push(el.textContent);
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
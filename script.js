onload = function(){
    document.getElementById('request').focus();
}

//errors

function Problem_with_Bing(){
    if(document.getElementById('title').innerHTML == "Выбирай поисковик и ищи информацию"){
        if(document.getElementById('bing').selected){
           document.getElementById('request').placeholder = "Введите запрос (русские символы не поддерживаются)";
        }
        else{document.getElementById('request').placeholder = "Введите запрос";}
    }
}

//search

function search1(){

    //yandex
    if(document.getElementById('yandex').selected){
        var v = document.getElementById('request').value;
        //just_search
        if(document.getElementById('just_search').classList.contains('filter1')){
            var a = "https://yandex.ru/search/?clid=9582&text=";
            var b = "&l10n=ru&lr=10313";
            var d = a+v+b;
            if(d != "https://yandex.ru/search/?clid=9582&text=&l10n=ru&lr=10313"){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://yandex.ru");}
        }
        //images
        else if(document.getElementById('images').classList.contains('filter1')){
            var a = "https://yandex.ru/images/search?text=";
            var d = a+v;
            if(d != "https://yandex.ru/images/search?text="){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://yandex.ru/images/");}
        }
        //video
        else if(document.getElementById('video').classList.contains('filter1')){
            var a = "https://yandex.ru/video/search?text=";
            var d = a+v;
            if(d != "https://yandex.ru/video/search?text="){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://yandex.ru/video/");}
        }
        //news
        else if(document.getElementById('news').classList.contains('filter1')){
            var a = "https://news.yandex.ru/yandsearch?text=";
            var b = "&rpt=nnews2&grhow=clutop";
            var d = a+v+b;
            if(d != "https://news.yandex.ru/yandsearch?text=&rpt=nnews2&grhow=clutop"){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://news.yandex.ru");}
        }
    }

    //google
    else if(document.getElementById('google').selected){
        var v = document.getElementById('request').value;
        //just_search
        if(document.getElementById('just_search').classList.contains('filter1')){
            var a = "https://www.google.com/search?source=hp&ei=RrhmXN-wGM_JwALw243oDA&q=";
            var b = "&btnK=Поиск+в+Google&oq=";
            var c = '"';
            var d = a+v+b+v+c;
            if(d != 'https://www.google.com/search?source=hp&ei=RrhmXN-wGM_JwALw243oDA&q=&btnK=Поиск+в+Google&oq="'){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://www.google.com");}
        }
        //images
        else if(document.getElementById('images').classList.contains('filter1')){
            var a = "https://www.google.com/search?q=";
            var b = "&source=lnms&tbm=isch&sa=X";
            var d = a+v+b;
            if(d != "https://www.google.com/search?q=&source=lnms&tbm=isch&sa=X"){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://images.google.com");}
        }
        //video
        else if(document.getElementById('video').classList.contains('filter1')){
            var a = "https://www.google.com/search?q=";
            var b = "&source=lnms&tbm=vid&sa=X";
            var d = a+v+b;
            if(d != "https://www.google.com/search?q=&source=lnms&tbm=vid&sa=X"){
                window.open(d);
                document.getElementById('request').value="";
            }
            else if(document.getElementById('rusian').classList.contains('languege2')){
                window.open("https://www.google.ru/videohp");
            }
            else {window.open("https://www.google.com");}
        }
        //news
        else if(document.getElementById('news').classList.contains('filter1')){
            var a = "https://www.google.com/search?q=";
            var b = "&source=lnms&tbm=nws&sa=X";
            var d = a+v+b;
            if(d != "https://www.google.com/search?q=&source=lnms&tbm=nws&sa=X"){
                window.open(d);
                document.getElementById('request').value="";
            }
            else {window.open("https://www.news.google.com");}
        }
    }

    //bing
    else if(document.getElementById('bing').selected){
        var v = document.getElementById('request').value;
        var a = "https://www.bing.com/search?q=";
        var b = "&qs=n&form=QBRE&sp=-1&pq=&sc=6-0&sk=&cvid=B52F311331664DA7A94B1AEECE80C45E";
        var d = a+v+b;
        if(d != "https://www.bing.com/search?q=rf&qs=n&form=QBRE&sp=-1&pq=&sc=6-0&sk=&cvid=B52F311331664DA7A94B1AEECE80C45E"){
            window.open(d);
            document.getElementById('request').value="";
        }
        else {window.open("https://www.bing.com");}
    }

    //duckduckgo
    else if(document.getElementById('duckduckgo').selected){
        var v = document.getElementById('request').value;
        var a = "https://duckduckgo.com/?q=";
        var b = "&t=h_&ia=web";
        var d = a+v+b;
        if(d != "https://duckduckgo.com/?q=&t=h_&ia=web"){
            window.open(d);
            document.getElementById('request').value="";
        }
        else{window.open("https://duckduckgo.com");}
    }

    document.getElementById('request').focus();
};

onkeydown = function(event){
    var key = event.keyCode;
    if(key == 13){
        search1();
    }
    else if(key == 37){
        change_language_to_en();
    }
    else if(key == 39){
        change_languege_to_ru();
    }
};

//filter

function filter(event){
    event.classList.add('filter2');
};
function no_filter(event){
    event.classList.remove('filter2');
};
function filter2(event){
    document.getElementById('just_search').classList.remove('filter1');
    document.getElementById('images').classList.remove('filter1');
    document.getElementById('video').classList.remove('filter1');
    document.getElementById('news').classList.remove('filter1');
    event.classList.add('filter1');
};

//swith

function change_language_to_en(){
    var en = document.getElementById('englesh');
    en.classList.add("languege2");
    document.getElementById('rusian').classList.remove("languege2");
    document.title = "Search manager | Save your time!"
    document.getElementById('title').innerHTML = "Chose search engeen and find information";
    document.getElementById('yandex').innerHTML = "Yandex";
    document.getElementById('request').placeholder = "Enter request";
    document.getElementById('search_button').innerHTML = "Search";
    document.getElementById('just_search').innerHTML = "Search";
    document.getElementById('images').innerHTML = "Images";
    document.getElementById('video').innerHTML = "Video";
    document.getElementById('news').innerHTML = "News";

    // var a = "Master of search | Give please some title";
    // var b = "Master of search | Are you want an apple?";
    // var c = "Master of search | Some title";
    // var d = "Master of search | it's pitty, that you didn't come up with some title";
    // var e = "Master of search | Is today morning again?!";
    // var arr = [a,b,c,d,e];
    // var random_number = Math.floor(Math.random() * arr.length);
    // document.title = (arr[random_number]);

};

function change_languege_to_ru(){
    var en = document.getElementById('rusian');
    en.classList.add("languege2");
    document.getElementById('englesh').classList.remove("languege2");
    document.title = "Search manager | Сохрани своё время!";
    document.getElementById('title').innerHTML = "Выбирай поисковик и ищи информацию";
    document.getElementById('yandex').innerHTML = "Яндекс";
    document.getElementById('request').placeholder = "Введите запрос";
    document.getElementById('search_button').innerHTML = "Поиск";
    document.getElementById('just_search').innerHTML = "Поиск";
    document.getElementById('images').innerHTML = "Картинки";
    document.getElementById('video').innerHTML = "Видео";
    document.getElementById('news').innerHTML = "Новости";
};

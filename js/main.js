document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('main').style.backgroundImage = `url(./img/bg-1.jpg)`; 
    let img = 'bg-';
    let index = 1;
    
    function fadeToNext() {
        index = (index + 1);
        /*document.querySelector('main').style.background = `url(../img/' ${img + index})`;*/
        document.querySelector('main').style.backgroundImage = `url(./img/${img + index}.jpg)`;
        if (index === 7)
            return;
        waitNext();
    }
    function waitNext() {
        setTimeout(function () {
            fadeToNext();
        }, 10000);
    }

    waitNext();
});
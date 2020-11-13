$(function () {
  $("html").bind("contextmenu", function (e) {
    return false;
  });
}); //]]>

    document.getElementById('vid').play();

$('button').click((e)=>{
    $('#title').html(e.target.innerHTML);
    if(e.target.classList.value == "btn1"){
        $('video').attr('src' , '');
    }
    else if(e.target.classList.value == "btn2"){
        $('video').attr('src' , '');
    }
    else if(e.target.classList.value == "btn3"){
        $('video').attr('src' , '');
    }
    else if(e.target.classList.value == "btn4"){
        $('video').attr('src' , '');
    }
})

$(function () {
  $("html").bind("contextmenu", function (e) {
    return false;
  });
}); //]]>

window.onload = function () {
  $("#title").html($(".btn1").text());
  
};

$("button").click((e) => {
  $("#title").html(e.target.innerHTML);
  if (e.target.classList.value == "btn1") {
    $("video").attr("src", "../Videos/القراءه 5 Ss-1.mp4");
  } else if (e.target.classList.value == "btn2") {
    $("video").attr("src", "../Videos/4 ألواجب Ss-1.mp4");
  } else if (e.target.classList.value == "btn3") {
    $("video").attr("src", "../Videos/3 بلاغة الجزء الثاني Ss-1.mp4");
  } else if (e.target.classList.value == "btn4") {
    $("video").attr("src", "../Videos/2 بلاغة الجزء الثاني Ss-1.mp4");
  } else if (e.target.classList.value == "btn5") {
    $("video").attr("src", "../Videos/1 نحو Ss-1.mp4");
  }
});

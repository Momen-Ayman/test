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
    $("video").attr("src", "https://media.githubusercontent.com/media/Momen-Ayman/test/main/./Videos/القراءه 5 Ss-1.mp4");
  } else if (e.target.classList.value == "btn2") {
    $("video").attr("src", "https://media.githubusercontent.com/media/Momen-Ayman/test/main/./Videos/4 ألواجب Ss-1.mp4");
  } else if (e.target.classList.value == "btn3") {
    $("video").attr("src", "https://media.githubusercontent.com/media/Momen-Ayman/test/main/./Videos/3 بلاغة الجزء الثاني Ss-1.mp4");
  } else if (e.target.classList.value == "btn4") {
    $("video").attr("src", "https://media.githubusercontent.com/media/Momen-Ayman/test/main/./Videos/2 بلاغة الجزء الثاني Ss-1.mp4");
  } else if (e.target.classList.value == "btn5") {
    $("video").attr("src", "https://media.githubusercontent.com/media/Momen-Ayman/test/main/./Videos/1 نحو Ss-1.mp4");
  }
});

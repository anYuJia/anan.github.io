$(document).ready(function () {
})
var score = 0;
function click_kaishi() {
    yinyue();
    score = 0;
    $("#kaishi").hide(1000, "linear");
    $("#youxi").show();
    $("#jiesu").hide();
    shengchengjiamian();
    sh = setInterval(() => {
        xiaochu();
        play_game(sh)
    }, 1000);
}
function click_shuoming() {
    $("#kaishi").hide("linear");
    $("#shuomingjiemian").show(1000, "linear");
}
function fanhui() {
    $("#kaishi").show(1000, "linear");
    $("#shuomingjiemian").hide(100, "linear");
    $("#youxi").hide();
    $("#jiesu").hide();
}
function shengchengjiamian() {
    var x = "";
    for (i = 0; i < $("#nandu_r option:selected").val(); i++) {
        x += "<tr" + " " + "id=a" + i + ">" + "</tr>";
        for (j = 0; j < $("#nandu_w option:selected").val(); j++) {
            x += "<td " + "id=ab" + i + j + ">" + "<img " + "src='tou.png'/>" + "</td>";
        }
    };
    $("table").html(x);
    var imgwidth = 1000 / $("#nandu_w option:selected").val() + "px";
    var imgheight = 600 / $("#nandu_r option:selected").val() + "px";
    $("table").css({ "width": "1000px", "height": "600px" });
    $("td").css({ 'width': imgwidth, 'height': imgheight, 'visibility': 'hidden' });
    $("img").css({ 'width': imgwidth, 'height': imgheight, '-webkit-user-drag': 'none' });
}
function play_game(sh) {
    var Fenshu = "分数：" + score;
    $("#defen").text(Fenshu);
    var r = Math.floor(Math.random() * $("#nandu_r option:selected").val());
    var w = Math.floor(Math.random() * $("#nandu_w option:selected").val());
    var xy = "#ab" + r + w;
    $(xy).css('visibility', 'visible');
    $('#jiamian').click(function (e) {
        if ((e.target.id) == "") {
            jiji();
            $(xy).css('visibility', 'hidden');
            score++;
            Fenshu = "分数：" + score;
            $("#defen").text(Fenshu);
        }
        else {
            youxijiesu();
            clearInterval(sh);
        }
    })
}
function youxijiesu() {
    $("#youxi").hide();
    $("#jiesu").show();
    var zzFenshu = "你死了，你最终的分数为" + score;
    $("#zzfenshu").text(zzFenshu);
}
function yinyue() {
    var music = document.getElementById("guicu");//获取ID
    console.log(music);
    console.log(music.paused);
    if (music.paused) { //判读是否播放
        music.paused = false;
        music.play(); //没有就播放
    }
}
function jiji() {
    var music = document.getElementById("dianji");
    console.log(music);
    console.log(music.paused);
    if (music.paused) {
        music.paused = false;
        music.play();
    }
}
function xiaochu() {
    //alert($("img:visible").id);
    $("td:visible").css("visibility", "hidden");
}
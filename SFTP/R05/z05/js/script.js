//-- kakunin1 --//
// $(function() {
//     $("button").click(function(){ $("button").html("書き換え") });
// });

//-- kakunin2 --//
// $(function() {
//    // idを指定して要素を取得
//     var elem = $("#sample");
//     console.log(elem.text());
// })

//-- kakunin3 --//
// $(function() {
//     // imgのsrc属性を取得
//     console.log($("#miko").attr("src"));
    
//     // imgのsrc属性を変更
//     $("#miko").attr("src", "img/Usada-Pekora.png");
//     // 入力欄に文字を入力
//     $("#name").val("vtuber");
//     // 入力欄の値を取得
//     console.log($("#name").val());
// })

//-- kakunin4 --//
// $(function() {
//     // 要素の先頭に追加
//     $("#holo").prepend("<li>ときのそら</li>");
//     // 要素の最後に追加
//     $("#holo").append("<li>姫森ルーナ</li>");
//     // 要素の削除
//     $("#peko").remove();
// })

//-- kakunin5 --//
// $(function() {
//     $("#btn").click(function() {
//         //今回のthisは取得したイベント("#btn"を)再利用するという意味
//         $(this).css("background-color", "#FF0000");})
// })

//-- kakunin6 --//
// $(function() {
//     $("p").hover(function() {
//         $(this).css("background-color", "#FF0000");
//     }, function() {
//         $(this).css("background-color", "#00FFFF");
//     })
// })

//-- 課題1 --//
$(function() {
    $("#btn1").click(function() {
        var text = $("#text");
        text.css("color", "#FF0000");
    })

    $("#btn2").click(function() {
        var text = $("#text");
        text.css("color", "#0000FF");
    })

    $("#btn3").click(function() {
        var text = $("#text");
        text.css("color", "#00FF00");
    })
})

//-- 課題2 --//
$(function() {
    $("#img").hover(function() {
        $(this).attr("src", "img/Sakura-miko.png");
        $("#text2").text("さくらみこ");
    }, function() {
        $(this).attr("src", "img/Usada-pekora.png");
        $("#text2").text("兎田ぺこら");
    })
})

//-- 課題3 --//
var isHide = false;
$(function() {
    $("#btnChange").click(function() {
        if(!isHide) {
            $("#imgChange").hide();
            isHide = true;
        }else if(isHide) {
            $("#imgChange").show();
            isHide = false;
        }
    })
})

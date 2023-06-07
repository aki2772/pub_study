//-- 課題1 --//
var imgNumber = 1;
$(function() {
    $("#imgChange").click(function() {
        if(imgNumber == 0) {
            imgChange("img/Sakura-Miko.png", "さくらみこ")
            imgNumber++;
        }else if(imgNumber == 1) {
            imgChange("img/Usada-Pekora.png", "兎田ぺこら");
            imgNumber++;
        }else if(imgNumber == 2) {
            imgChange("img/Inugami-Korone.png", "戌神ころね")
            imgNumber = 0;
        }
    })
})

// ホロライバーの画像と名前を書き換える.
function imgChange(imgpath, name) {
    $("#img").attr("src", imgpath);
    $("#name").text(name);
}

//-- 課題2 --//
$(function() {
	$("#holo").slick({
		dots: true,			 // スライダー切り替えのドットs
		Infinity: true, 	 // 無限にスクロールするか？
		autoplay: false, 	 // 自動再生するか
		accessibility: true, // 左右のボタンでスライダーを切り替えるか
        slidesToShow: 3,
        slidesToScroll: 3
	})
})
    
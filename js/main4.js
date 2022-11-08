// // jQueryで「マウスオーバー」イベントを設定する
// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").css({"background-color":"#0000ff"});
//   });
// });



// 「マウスアウト」イベントを追加する
$(function(){
  $(".box1").mouseover(function(){
    $(".box1").addClass("box1-ext")
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
});

// 予備知識
// 【マウスクリックイベントの記述】

// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });
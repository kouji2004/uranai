

// ⓵ジャバスクリプトではletが変数
//  let hello = "hellooo0";
//  alert(hello);


// //⓶while文の記述
// let max = 100;
// let num = 1;
// let count = 0;

// while(num<max){
//   num = num*2;
//   count = count+1;
// }
// alert("２をかけ続けて"+max+"を超えるのに必要な回数は"+count+"回です");


// // ⓷for文
// let i;
// let num =0;
// for(i=1; i<10; i++){
//   num = num+i;
// }
// alert("１から１０まで足し算した結果は"+num+"です");

// ⓸関数
//   ↓↓↓↓
// //メイン部分
// let alertString;
//  alertString = addString("ミウラ");
// //  作成した関数を呼び出す
// alert(alertString);
// // 作成した関数
// function addString(name){
//   let name2 =name+"コウジ";
//   return name2;
// }
// // 実行結果　→　ミウラコウジ


// //⓹入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);


// //⓺複数の関数を定義する
// let user_hand = prompt("じゃんけんの手を、グーチョキパーから選んでください");
// alert("あなたが選んだ手は"+user_hand+"です");








//⓻じゃんけん
// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}
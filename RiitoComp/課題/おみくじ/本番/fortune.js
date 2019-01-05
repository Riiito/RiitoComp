/*
[仕様]
1:ボタンを押す
2:ランダムな数字を出力
3:数字によって表示する文字列を指定
4:文字列を画面に表示
*/
(function(){
    'use strict';
    var btn = document.getElementById('btn');

    btn.addEventListener('click',function(){
        var n = Math.floor(Math.random() *5);
        switch(n){
            case 0:
                this.textContent = "大吉";
                break;
            case 1:
                this.textContent ="中吉";
                break;
            case 2:
                this.textContent = "小吉";
                break;
            case 3:
                this.textContent = "吉";
                break;
            case 4:
                this.textContent = "凶";
                break;
            default:
                Error;
                break;
        }
    });
})();
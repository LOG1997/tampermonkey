// ==UserScript==
// @name         bilibili script
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  bilibili网站操作脚本
// @author       You
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // bilibili网站加载成功后执行，去除一些模块
  window.onload = function () {
    //方法内容
    let section_index = [
      6, 7, 8, 9, 10, 11, 13, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33,
    ];
    let documentary = document.querySelectorAll(".bili-grid");
    // console.log('纪录片',documentary);
    for (let i = 0; i < section_index.length; i++) {
      documentary[section_index[i]].remove();
      // documentary[section_index[i]].style.display="none";
    }
    let bili_footer = document.querySelectorAll(".bili-footer");
    // console.log('bili_footer',bili_footer);
    bili_footer[0].remove();
    console.log(
      "%csuccess%c:",
      "background:#47c00e;padding:3px;border-radius:3px",
      "",
      "脚本加载成功"
    );
    // 执行刷新操作
    RefreshRecommend();
  };

  // 快捷键，快捷刷新推荐视频
  function RefreshRecommend() {
    // alt+r按键监听
    document.addEventListener("keydown", function (event) {
      if (event.altKey && event.keyCode == 82) {
        event.preventDefault();
        // console.log('alt+r');
        // 快捷键按下后，执行的方法
        let refresh_button =
          document.querySelectorAll(".roll-btn-wrap")[0].children[0];
        refresh_button.click();
      }
      //   监听数字键盘
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        event.preventDefault();
        let num = event.keyCode - 48 > 0 ? event.keyCode - 48 : 10;
        let recommend_video = document.querySelectorAll(
          ".recommend-container__2-line"
        )[0].children[num].children[1].children[0];
        console.log("recommend_video", recommend_video);
        recommend_video.click();
      }
    });
  }
})();

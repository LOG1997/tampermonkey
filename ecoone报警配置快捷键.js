// ==UserScript==
// @name         ecoone报警配置快捷键
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  ecoone报警配置
// @author       You
// @match        https://www.chiiot.cn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chiiot.cn
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
  /*
   * @Author: LOG
   * @FilePath: \油猴脚本\ecoone报警配置快捷键.js
   * @Descripttion:
   * @version:
   * @Date: 2022-05-30 10:06:57
   * @LastEditors: LOG
   * @LastEditTime: 2022-05-30 10:14:05
   */
  // 选择0或1报警
  function clickBreak0(rowIndex) {
    // 0是无报警，1是取0时报警，2是取1时报警
    let break0 = document.querySelectorAll(".el-radio__input")[rowIndex];
    if (break0.className == "el-radio__input is-checked") {
      console.log("已经点了");
      return;
    }
    break0.click();
    // console.log("break0", break0);
  }
  // 选择报警级别
  function selectMedium(value) {
    //   0是高报警，1是中报警，2是低报警
    let MediumAlert = document.querySelectorAll(".el-scrollbar__view")[3]
      .children[value];
    MediumAlert.click();
    // console.log("报警等级", MediumAlert);
  }
  // 输入报警描述
  function BreakInput() {
    let braekInputCon =
      document.querySelectorAll(".el-input--small")[13].children[0];
    navigator.clipboard.readText().then((text) => {
      braekInputCon.focus();
      braekInputCon.value = text;
      braekInputCon.dispatchEvent(new Event("input"));
    });
  }

  // 点击确定按钮
  function clcikEnter() {
    let enterbutton =
      document.querySelectorAll(".dialog-footer")[1].children[1];
    enterbutton.click();

    // console.log("确定按钮：", enterbutton);
  }
  // 替换指定文本
  function replaceText(text_old, text_new) {
    let braekInputCon =
      document.querySelectorAll(".el-input--small")[13].children[0];
    console.log("replaceTSTSTSTST",text_old,text_new)
    let input_text = braekInputCon.value;
    let input_text_new = input_text.replace(text_old, text_new);

    braekInputCon.focus();
    braekInputCon.value = input_text_new;
    braekInputCon.dispatchEvent(new Event("input"));
  }

  // console.log("描述：", braekInputCon);

  // 旧文本和新文本
  let text_old = "";
  let text_new = "";
  // 监听按键
  document.addEventListener("keydown", function (e) {
    if (
      (e.keyCode == 49 ||
        e.keyCode == 50 ||
        e.keyCode == 51 ||
        e.keyCode == 52) &&
      e.ctrlKey
    ) {
      e.preventDefault();
      console.log("ctrl+1、2、3、4：", e.keyCode);
      // 根据输入ctrl+数字的不同来选择不同等级的报警
      setTimeout(() => {
        clickBreak0(2);
      }, 200);
      setTimeout(() => {
        selectMedium(e.keyCode - 49);
      }, 200);
      setTimeout(() => {
        BreakInput();
        replaceText(text_old, text_new);
      }, 300);
      // 需要替换文本时才执行这部操作
          console.log("新旧：",text_old,text_new)
      if (text_old != ''&&text_new!='') {
        setTimeout(() => {
          replaceText(text_old, text_new);
        }, 500);
      }
      setTimeout(() => {
        clcikEnter();
      }, 1000);
    }
    // ctrl+`输入需要旧的文本和新文本
    if (e.keyCode == 192 && e.ctrlKey) {
      text_old = window.prompt("原始文本: ");
      text_new = window.prompt("新文本: ");
    }
    
  });
})();

/*
 * @Author: LOG
 * @FilePath: \ecoone脚本\ecoonejsopt.js
 * @Descripttion:ecoone平台脚本操作
 * @version:0.0.2
 * @Date: 2022-05-24 09:44:12
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-25 10:19:16
 * @license MIT
 */
// ==UserScript==
// @name         修改字体颜色，字体加粗
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  ecoone平台脚本操作
// @author       You
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
    "use strict";
  /**
   * 
   * @param {*} isFontColor 
   * @type {string} color 字体颜色
   */
    function changeFontColor(isFontColor) {
      let FontColorInput =
        document.querySelectorAll(".el-input--small")[31].children[0];
  
      console.log("字体颜色：", FontColorInput);
      // 改变字体颜色
      FontColorInput.focus();
      FontColorInput.value = isFontColor;
      FontColorInput.dispatchEvent(new Event("input"));
      FontColorInput.blur();
    }
    /**
     * 
     * @param {*} isFontWeight 
     * @type {string} weight 字体加粗
     */
    function changeFontWeight(isFontWeight) {
      let FontWeight =
        document.querySelectorAll(".el-input--suffix")[14].children[0];
      console.log("字体加粗：", FontWeight);
      FontWeight.click();
      // 选择下拉框选项
      setTimeout(() => {
          let SelectInput = document.querySelectorAll(".el-select-dropdown")[16].children[0].children[0].children[0]
        console.log("select:", SelectInput);
        SelectInput.children[isFontWeight].click();
  
      },200)
  
    }
    // Your code here...
  
    setTimeout(() => {
      console.log("加载脚本成功");
      var x = document.getElementById("app").childNodes[0].childNodes[1];

      // 弹窗输入参数，执行哪些操作
      let dialogParam = document.createElement("div");
      dialogParam.id = "dialogParam";
      dialogParam.innerHTML =
        "<form><span>选择颜色</span><input type='color' id='colorpick' value='#ff0000' /><input id='color_value' value='#ff0000'><br /><span>是否加粗字体</span><input type='checkbox' name='font-weight' id='isFontBold' /><br /><button id='submit'>确定</button></form>";
      dialogParam.style.cssText =
        "display:none;background:white;width:400px;height:400px;text-align:center;position:absolute;top:300px;cursor:pointer;";
      x.appendChild(dialogParam);
      var isFontColor = "";
      let isFontWeight = 0;
      let color_span = document.getElementById("color_value");
      let colorPicker = document.querySelector("#colorpick");
      let isFontBold = document.querySelector("#isFontBold");
      let submit = document.querySelector("#submit");
      colorPicker.addEventListener("change", watchColorPicker, false);
      isFontBold.addEventListener("change", watchIsFontBold, false);
      function watchColorPicker(event) {
        isFontColor = event.target.value;
        color_span.value = event.target.value;
      }
      function watchIsFontBold(event) {
          console.log("eventtarget:::",event.target)
        if (event.target.checked) {
          isFontWeight = 1;
        } else {
          isFontWeight = 0;
        }
      }
      submit.addEventListener("click", function (event) {
        event.preventDefault();
        dialogParam.style.display = "none";
      });
  
      document.addEventListener("keydown", function (e) {
        if (e.keyCode == 68) {
          if (isFontColor == "") {
            dialogParam.style.display = "block";
            return;
          }
  
          console.log("你按下了D键", isFontColor, isFontWeight);
          changeFontColor(isFontColor);
          changeFontWeight(isFontWeight);
        }
      });
    }, 5000);
  })();
  
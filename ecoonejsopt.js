/*
 * @Author: LOG
 * @FilePath: \ecoone脚本\ecoonejsopt.js
 * @Descripttion:ecoone平台脚本操作
 * @version:0.0.3
 * @Date: 2022-05-24 09:44:12
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-27 23:35:57
 * @license MIT
 */
// ==UserScript==
// @name         修改字体颜色，字体加粗
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  ecoone平台脚本操作
// @author       You
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
  "use strict";
  // Your code here...
  /**
   *
   * @param {*} isFontColor
   * @type {string} color 字体颜色
   */
  function changeFontColor(isFontColor) {
    let FontColorInputIndex = 29;
    // 获取字体颜色选择格
    let FontColorInput =
      document.querySelectorAll(".el-form-item")[FontColorInputIndex]
        .children[1].children[1].children[0];

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

  let FontWeightIndex = 32;
  function changeFontWeight(isFontWeight) {
    let FontWeightText = "加粗";
    let FontWeight =
      document.querySelectorAll(".el-form-item")[FontWeightIndex].children[1]
        .children[0];
    let FontWeightLabel =
      document.querySelectorAll(".el-form-item")[FontWeightIndex].children[0]
        .innerHTML;
    console.log("字体加粗：", FontWeight);
    console.log("字体加粗label：", FontWeightLabel);
    if (FontWeightLabel == FontWeightText) {
      FontWeight.click();
    } else {
      FontWeightIndex++;
      changeFontWeight(isFontWeight);
      return;
    }

    // 选择下拉框选项
    setTimeout(() => {
      let SelectInput = document.querySelectorAll(".el-select-dropdown")[16]
        .children[0].children[0].children[0];
      console.log("select:", SelectInput);
      SelectInput.children[isFontWeight].click();
    }, 200);
  }
  /**
   * 获取当前url
   */
  function getUrl() {
    let url = window.location.href;
    console.log("url", url);

    return url;
  }
  // 生成弹窗，配置参数
  function createDialog() {
    const x = document.getElementById("app").childNodes[0].childNodes[1];

    // 弹窗输入参数，执行哪些操作
    let dialogParam = document.createElement("div");
    dialogParam.id = "dialogParam";
    dialogParam.innerHTML =
      "<form><span>选择颜色</span><input type='color' id='colorpick' value='#ff0000' /><input id='color_value' value='#ff0000'><br /><span>是否加粗字体</span><input type='checkbox' name='font-weight' id='isFontBold' /><br /><button id='submit'>确定</button></form>";
    dialogParam.style.cssText =
      "display:none;background:white;width:400px;height:400px;text-align:center;position:absolute;top:300px;cursor:pointer;";
    x.appendChild(dialogParam);
  }
  // 修改方框长度
  function changeBoxSizeWidth() {
    let BoxSizeWidthIndex = 12;
    let BoxSizeWidth =
      document.querySelectorAll(".el-form-item")[BoxSizeWidthIndex].children[1]
        .children[0].children[0];
    console.log("方框大小：", BoxSizeWidth);
    BoxSizeWidth.focus();
    BoxSizeWidth.value = 200;
    BoxSizeWidth.dispatchEvent(new Event("input"));
    BoxSizeWidth.blur();
  }
  // 保存
  function handleSave() {
    let saveButton = document.querySelectorAll(
      ".drawPage_pageItem_container_toolBox"
    )[0].children[9];

    console.log("保存按钮：", saveButton);
    saveButton.click();
  }
  // 插入input元素输入宽度
  function insertInputWidth() {
    const x = document.getElementById("app").childNodes[0].childNodes[1];
    let inputWidth = document.createElement("div");
    inputWidth.id = "inputWidth";
    inputWidth.innerHTML =
      '<label for="inputWidthValue">宽度</label><input type="text" id="inputWidthValue"><button id="hideInputWidth">隐藏</button>';
    inputWidth.style.cssText =
      "display:block;width:400px;height:400px;text-align:center;position:absolute;top:300px;cursor:pointer;background:red";
      x.appendChild(inputWidth);
    console.log("插入了input元素");
  }
  setTimeout(() => {
    console.log("加载脚本成功");
    createDialog();
    var isFontColor = "";
    let isFontWeight = 0;
    let color_span = document.getElementById("color_value");
    let colorPicker = document.querySelector("#colorpick");
    let isFontBold = document.querySelector("#isFontBold");
    let submit = document.querySelector("#submit");
    let dialogParam = document.querySelector("#dialogParam");
    colorPicker.addEventListener("change", watchColorPicker, false);
    isFontBold.addEventListener("change", watchIsFontBold, false);
    function watchColorPicker(event) {
      isFontColor = event.target.value;
      color_span.value = event.target.value;
    }
    function watchIsFontBold(event) {
      console.log("eventtarget:::", event.target);
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
    let draw_url = new RegExp(
      "https://www.chiiot.cn/#/scada/integrated/pageLibrary/*",
      "g"
    );
    // 监听按键ctrl+D
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 68 &&e.ctrlKey) {
        if (!getUrl().match(draw_url)) {
          console.log("路径不匹配");
          return false;
        }
        if (isFontColor == "") {
          dialogParam.style.display = "block";
          return;
        }

        console.log("你按下了D键", isFontColor, isFontWeight);
        changeFontColor(isFontColor);
        changeFontWeight(isFontWeight);
      }
    });
    // 监听按键ctrl+s
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 83 && e.ctrlKey) {
        e.preventDefault();
        if (!getUrl().match(draw_url)) {
          console.log("路径不匹配");
          return false;
        }
        handleSave();
      }
    });
    // 监听按键ctrl+W
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 87 && e.ctrlKey) {
        console.log("你按下了W键");
        // 是否存在这个元素，不存在才插入
        if(!document.getElementById("inputWidth")){
        insertInputWidth();
        }
        // 监听是否隐藏input元素
        let hideInputWidth=document.querySelector("#hideInputWidth");
        hideInputWidth.addEventListener("click",function(event){
          event.preventDefault();
          document.getElementById("inputWidth").style.display="none";
        })
        let inputWidthValue = document.querySelector("#inputWidthValue");
        // 监听enter键
        inputWidthValue.addEventListener("keydown",function(e){
          if(e.keyCode==13){
            e.preventDefault();
            let inputWidthValue = document.querySelector("#inputWidthValue");
            let inputWidth = document.querySelector("#inputWidth");
          }
        })
        inputWidthValue.focus();
      }
    });
  }, 5000);
})();

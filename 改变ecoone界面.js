// ==UserScript==
// @name         Ecoone
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.chiiot.cn/
// @icon         https://www.google.com/s2/favicons?domain=chiiot.cn
// @grant unsafeWindow
// ==/UserScript==

(function () {
  const WAIT = "wait";
  const GET = "get";
  const END = "end";
  let stat = WAIT;
  let getstyle = "";
  function getClass(classname) {
    let docu = document.getElementsByClassName(classname);
    if (docu.length) {
      stat = GET;
      console.log("获取熬了", stat);
      return docu;
    }
    console.log("位置状态", stat);
    return false;
  }
  function bianstyle() {
    getClass("el-tree-node__content");

    if (stat == GET) {
      let editor = document.getElementsByClassName("el-tabs__content");
      let editor_head = document.getElementsByClassName("head-nav-icon");
      let editor_h5 = document.getElementsByTagName("h5");

      let editor_p = document.getElementsByTagName("p");
      
      for (let i = 0; i < editor_h5.length; i++) {
        editor_h5[i].style.cssText = "color: #9C82ED";
      }
      for (let j = 0; j < editor_p.length; j++) {
        editor_p[j].style.cssText = "color: #50FA7A";
      }
      for (let k = 0; k < editor_head.length; k++) {
        editor_head[k].style.cssText = "font-size:50px";
      }
      editor[0].style.cssText = "background:#282A36";
      console.log("改过后样式", editor[0].style.cssText);
      console.log("字体颜色", editor_h5);
      console.log("卢西尔", editor_p);
      console.log("头部", editor_head);
      stat = END;

      setTimeout(clearInterval(getstyle), 1000);
      return;
    }
    return;
  }
  // const getTimer = setInterval(getClass, 1000);

  getstyle = setInterval(bianstyle, 1000);

  // Your code here...
})();

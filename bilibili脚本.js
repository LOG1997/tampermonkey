/*
 * @Author: LOG
 * @FilePath: \油猴脚本\bilibili脚本.js
 * @Descripttion: 
 * @version: 
 * @Date: 2022-06-08 20:44:17
 * @LastEditors: LOG
 * @LastEditTime: 2022-06-08 21:12:21
 */
// ==UserScript==
// @name         bilibili script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function () {
        //方法内容
        let section_index=[6,7,8,9,10,11,13,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
        let documentary=document.querySelectorAll(".bili-grid");
        // console.log('纪录片',documentary);
        for(let i=0;i<section_index.length;i++){
            documentary[section_index[i]].remove();
            // documentary[section_index[i]].style.display="none";
        }
        let bili_footer=document.querySelectorAll(".bili-footer");
        // console.log('bili_footer',bili_footer);
        bili_footer[0].remove();



    }

})();
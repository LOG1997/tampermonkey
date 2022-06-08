/*
 * @Author: LOG
 * @FilePath: \油猴脚本\leetcode快捷键.js
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-29 13:54:07
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-29 14:06:05
 */
// 监听F5键
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 116) {
        e.preventDefault();
        let RunCode=document.querySelectorAll('.runcode__20UZ')[0];
        console.log("runcode:",RunCode);
        RunCode.click();
    }
});
// 监听ctrl+s键
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83 && e.ctrlKey) {
        e.preventDefault();
        let SubmitCode=document.querySelectorAll('.submit__-6u9')[0];
        console.log("SubmitCode:",SubmitCode);
    }
})
/*
 * @Author: LOG
 * @FilePath: \油猴脚本\test.js
 * @Descripttion: 
 * @version: 
 * @Date: 2022-06-13 11:39:45
 * @LastEditors: LOG
 * @LastEditTime: 2022-06-13 12:07:45
 */

  // 预览
  function handlePreview() {
    let previewButton = document.querySelectorAll(
      ".drawPage_pageItem_container_toolBox"
    )[0].children[6];

    console.log("保存按钮：", previewButton);
    previewButton.click();
  }
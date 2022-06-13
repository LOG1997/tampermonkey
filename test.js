/*
 * @Author: LOG
 * @FilePath: \油猴脚本\test.js
 * @Descripttion: 
 * @version: 
 * @Date: 2022-06-13 11:39:45
 * @LastEditors: LOG
 * @LastEditTime: 2022-06-13 11:44:18
 */

  // 只在指定的页面url内执行
  const draw_url=/https:\/\/www.chiiot.cn\/#\/scada\/integrated\/pageLibrary\//;

  function getUrl() {
    let url = window.location.href;
    return url;
  }
  console.log("getUrl))):",getUrl());
  console.log(draw_url.test(getUrl()));
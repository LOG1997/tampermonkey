/*
 * @Author: LOG
 * @FilePath: \油猴脚本\ecoone_alarm.js
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-27 23:36:21
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-30 13:09:29
 */
(function() {
    'use strict';
    // Your code here...
 function clickTreeItem(value) {
    let button = document.querySelectorAll(".el-tree-node__content")[value];
    // console.log("terr树", button);
    console.log("这是第几个设备：", value);
    button.click();
  }
  // 判断这个点位是否是设备点位
  function judgeDevice(value) {
    let DeviceItem = document.querySelectorAll(".el-tree-node__content")[value]
      .children[1].children[0].children[0].children[0];
      let xlink = DeviceItem.getAttributeNS("http://www.w3.org/1999/xlink", "href");
      let item=document.querySelectorAll(".el-tree-node__content")[value]
      .children[1].children[1].innerHTML;
      console.log("这是哪个项目:",item);
      console.log("这是第几个设备:",value)
    if (xlink=="#icon-wealth-device") {
      console.log("这是设备点位，可以操作");
      return true;
    } else {
      console.log("这不是保护点位");
      return false;
    }
  }
  // 点击点位配置按钮
  function clickpeizhi() {
    let peizhi = document.querySelectorAll(".el-tabs__item")[1];
    peizhi.click();
    // console.log("点击了点位配置按钮", peizhi);
  }
  //   点击显示条目
  function clickInputNum() {
    // 获取下拉框
    let inputNum = document.querySelectorAll(".el-select--mini");
    inputNum[0].click();
    // 获取条数，选取最大条数40条
    let maxInputnum = document.querySelectorAll(".el-scrollbar__view")[2]
      .children[3];
    maxInputnum.click();
    // console.log("选择一页显示多少条：", inputNum);
    // console.log("Nummax", maxInputnum);
  }
  function clickPage(){
    let elpage=document.querySelectorAll(".el-pager")[0].children[1];
    elpage.click();
    console.log("elpage",elpage)
    }
  // 点击配置按钮
  function clickeditor(rowIndex) {
    let breaktr =
      document.querySelectorAll(".el-table__row")[rowIndex - 1].children[1]
        .children[0].innerHTML;
    console.log("点位:", breaktr);
    if (breaktr != "设备状态") {
    //   clearInterval(timer);
      alert("这不是要配置的项");
      return;
    }
    let editor = document.querySelectorAll(".iot-point-config")[rowIndex - 1];
    editor.click();
    // console.log("点击了配置编辑按钮", editor);
  }
  //   选择报警状态
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
  // 选择报警等级
  function selectMedium(value) {
    //   0是高报警，1是中报警，2是低报警
    let MediumAlert = document.querySelectorAll(".el-scrollbar__view")[3]
      .children[value];
    MediumAlert.click();
    // console.log("报警等级", MediumAlert);
  }
  // 填入报警描述
  function BreakInput(str) {
    let braekInputCon =
      document.querySelectorAll(".el-input--small")[13].children[0];
    braekInputCon.focus();
    braekInputCon.value = str;
    braekInputCon.dispatchEvent(new Event("input"));
    // console.log("描述：", braekInputCon);
  }
  // 点击确定按钮
  function clcikEnter() {
    let enterbutton = document.querySelectorAll(".dialog-footer")[1].children[1];
    enterbutton.click();

    // console.log("确定按钮：", enterbutton);
  }
  //   判断通讯数据一共有多少条，方便判断设备种类，分别操作
  function judgeAlertTotal() {
    let totalMe = document.querySelectorAll(".el-pagination__total")[0];
    console.log("共多少条：", totalMe);
    if (totalMe.innerHTML == "共 26 条") {
      console.log("报警条数：", totalMe.innerHTML);
      return 10;
    } else if (totalMe.innerHTML == "共 52 条") {
      console.log("报警条数：", totalMe.innerHTML);
      return 31;
    }
    else if (totalMe.innerHTML == "共 3 条") {
        console.log("报警条数：", totalMe.innerHTML);
        return 1;
      }
      else if (totalMe.innerHTML == "共 12 条") {
        console.log("报警条数：", totalMe.innerHTML);
        return 7;
      }

      else{
      alert("不在范围内");
    }
  }
  // 定时器
  function InitTimer(value, count) {
    let sec = 60;
    let timer = setInterval(() => {
      if (sec > 22 && sec <= 60 && count > 0) {
        sec--;
        // 点击侧边栏项目名
        if (sec == 58) {
          let isDevice = judgeDevice(value);
          if (isDevice) {
            clickTreeItem(value);
          } else {
            value++;
            sec = 60;
          }
          console.log("sec——", sec);
        }
        // 点击点位配置按钮
        if (sec == 55) {
          clickpeizhi();
          console.log("sec——", sec);
        }
        // 显示40条
        if (sec == 53) {
            clickInputNum();
            console.log("sec——", sec);
        }
        // 点击配置编辑按钮过流一段
        if (sec == 51) {
          let shunxu = judgeAlertTotal();
          console.log("需要配置的报警位置在第几位：", shunxu);

          clickeditor(shunxu);
          console.log("sec——", sec);
        }
        //选择报警
        if (sec == 49) {
          clickBreak0(2);
          console.log("sec——", sec);
        }
        // 选择报警等级
        if (sec == 47) {
            selectMedium(2);
            console.log("sec——", sec);
        }
        if (sec == 45) {
          clcikEnter();
          console.log("sec——", sec);
          count--;
          // 还没有
          if (count > 0) {
            sec = 60;
            value++;
          } else {
            clearInterval(timer);
            setTimeout(() => {
              console.log(
                `当前item序列是${value}我猜你的下一个设备是${value + 2}`
              );
              window.alert(
                `当前item序列是${value}我猜你的下一个设备是${value + 2}`
              );
            }, 1000);
          }
        }
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }


　　　　console.log('我的脚本加载了');

setTimeout(()=>{
	var button = document.createElement("div"); //创建一个input对象（提示框按钮）
	button.id = "id001";button.innerHTML = "加载脚本";
button.style.cssText =
  "width:100px;height:100px;background-color:red;text-align:center;line-height:100px;position:absolute;top:300px;cursor:pointer;";

    var x = document.getElementById('app').childNodes[0].childNodes[1];
    //在浏览器控制台可以查看所有函数，ctrl+shift+I 调出控制台，在Console窗口进行实验测试
	x.appendChild(button);

        	//绑定按键点击功能
	button.onclick = function (){
	  const start = window.prompt("开始位置: ");

  const count = window.prompt("个数: ");
  InitTimer(Number(start), Number(count));
		return;
	};
},5000)

    //var y = document.getElementById('s_btn_wr');
    //y.appendChild(button);
})();
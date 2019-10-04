//打字特效
//第一次感受到eventLoop的坑
function input(word, next) {
  //初始下标
  let index = 0;
  let box = document.getElementById("word-box");
  //删字时获取当前文字的数量
  let curWord;
  //   初始化样式
  box.style.display = "inline";
  box.style.padding = "0 0.6rem";
  box.style.borderRight = "0.2rem solid rgba(255,255,255,1)";
  box.style.transition = "0.2s";
  //四个阶段
  let s1;
  let s2;
  let s3;
  let s4;
  //光标闪烁阶段
  let flash;
  //出现
  function fade() {
    box.style.borderRight = "0.2rem solid rgba(255,255,255,1)";
  }
  //消失
  function fadeOut() {
    box.style.borderRight = "0.2rem solid rgba(255,255,255,0)";
  }
  //闪烁
  function glow() {
    setTimeout(fadeOut, 400);
    setTimeout(fade, 0);
   
  }
  //第一步--打字
  function typing1() {
    console.log("s1 go");

    box.innerText = word.substring(0, index++);
    //
    if (index > word.length) {
      console.log("s1 stop");
      //结束第一步
      clearInterval(s1);
      //光标闪烁
      fadeOut();
      flash = setInterval(glow, 850);

      //2s后开始第二步并清除闪烁
      setTimeout(function() {
        s2 = setInterval(typing2, 100);
        clearInterval(flash);
      }, 2400);
    }
  }
  //第二步--删字

  function typing2() {
    fade();
    console.log("s2 go");
    curWord = document.getElementById("word-box").innerText;
    box.innerText = curWord.substring(0, index--);
    if (index === 0) {
      console.log("s2 stop");
      //结束第二步
      clearInterval(s2);
      //开始第三步
      s3 = setInterval(typing3, 100);
    }
  }

  //第三步--打字
  function typing3() {
    console.log("s3 go");

    box.innerText = next.substring(0, index++);

    if (index > next.length) {
      console.log("s3 stop");
      //结束第三步
      clearInterval(s3);
      //开始第四步
      s4 = setInterval(typing4, 100);
    }
  }

  //第四步--删字

  function typing4() {
    console.log("s4 go");
    curWord = document.getElementById("word-box").innerText;
    box.innerText = curWord.substring(0, index--);
    if (index === 0) {
      console.log("s4 stop");
      //结束第四步
      clearInterval(s4);
      //无限循环
      index = 0;
      s1 = setInterval(typing1, 100);
    }
  }

  //万恶之源
  s1 = setInterval(typing1, 100);
}
export default {
  input
};

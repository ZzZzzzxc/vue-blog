//滚动事件
function scrollFunc(e) {
  e = e || window.event;
  let nav = document.getElementsByTagName("nav");

  if (e.wheelDelta) {
    //判断浏览器IE，谷歌滑轮事件
    if (e.wheelDelta > 0) {
      //当滑轮向上滚动时
      nav[0].style.backgroundColor = "white";
      nav[0].style.color = "black";
      nav[0].style.display = "block";
      setTimeout(function() {
        nav[0].style.opacity = "1";
      }, 0);
    }
    if (e.wheelDelta < 0) {
      //当滑轮向下滚动时
      setTimeout(function() {
        nav[0].style.display = "none";
      }, 0);

      nav[0].style.opacity = "0";
    }
  } else if (e.detail) {
    //Firefox滑轮事件
    if (e.detail > 0) {
      //当滑轮向上滚动时
      nav[0].style.backgroundColor = "white";
      nav[0].style.color = "black";
    }
    if (e.detail < 0) {
      //当滑轮向下滚动时
      nav[0].style.backgroundColor = "black";
      nav[0].style.color = "white";
    }
  }
  //到顶部时恢复导航栏
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // window.console.log(top)
  if (top <= 200) {
    nav[0].style.background = "rgba(0,0,0,0)";
    nav[0].style.color = "white";
  }
}
export default {
  scrollFunc
};

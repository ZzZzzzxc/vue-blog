function catalog() {
  let h1 = document.getElementsByTagName("h1");
//   console.log(h1)
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = "red";
  }
}
export default {
  catalog
};

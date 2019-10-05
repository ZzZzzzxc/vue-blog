function catalog() {
  //外层容器
  let markdownBody = document.getElementsByClassName("markdown-body");
  //内容区
  let childrenList = markdownBody[0].children;
  //要匹配的tagName
  let list = ["H1", "H2", "H3", "H4", "H5", "H6"];
  let objList = [];
  // console.log(childrenList);//innerText
  //遍历获取标签的顺序
  for (let i = 0; i < childrenList.length; i++) {
    if (list.indexOf(childrenList[i].tagName) >= 0) {
      objList.push({
        scrollTop: childrenList[i].offsetTop,
        index: parseInt(childrenList[i].tagName.replace("H", "")),
        title: childrenList[i].innerText
      });
    }
  }
  // console.log(objList)
  //转换成树形结构
  let tree = treeify(objList, 0);

  function treeify(data, tag) {
    let tree = [];
    let index = 0;
    data.forEach(item => {
      item.children = [];
      let len = tree.length;
      if (len === 0) {
        item.tag =tag + (++index) + "."; // 标题索引（1.、1.1.等）
        tree.push(item); // 第一个元素，直接放进tree
      } else {
        let last = tree[len - 1];
        if (item.index <= last.index) {
          // 如果index比tree最后一个的index小或等于，说明是同级存进去
          item.tag = tag + ++index + ".";
          tree.push(item);
        } else {
          last.children.push(item); // 否则存进最后一个元素的children
        }
      }
    });
    // 因为上面一层循环，只能处理两层，所以需要遍历孩子节点，出现index不一样的说明不是同级，需要对孩子节点再递归调用生成
    tree.forEach(item => {
      let children = item.children;
      let ids = [];
      index = 0;
      // 判断是否存在index不一样的
      children.forEach(child => {
        child.tag = item.tag + ++index + ".";
        if (ids.indexOf(child.index) === -1) {
          ids.push(child.index);
        }
      });
      if (ids.length > 1) {
        // ids的元素大于1说明存在，需要再递归孩子节点
        item.children = treeify(children, item.tag);
      }
    });
    return tree;
  }
  console.log(tree)
  return tree;
}
export default {
  catalog
};

import Api from "./api";
// 页面调用方法
export async function getTagsList() {
  let res = await Api.fetchTagsList();
  return res;
}
export async function getArticlesList() {
  let res = await Api.fetchArticlesList();
  return res;
}
export async function getAboutsList() {
    let res = await Api.fetchAboutsList();
    return res;
  }
export async function getMusicsList() {
  let res = await Api.fetchMusicsList();
  return res;
}
export async function getArticle(id) {
  let res = await Api.fecthArticleById(id);
  return res;
}
export async function getTag(id) {
  let res = await Api.fecthTagById(id);
  return res;
}
export async function getMusic(id) {
  let res = await Api.fecthMusicById(id);
  return res;
}

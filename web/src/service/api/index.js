import Ax from "../axios";
// 请求后端接口
export default {
  fetchTagsList() {
    return Ax.get("tags/list");
  },
  fetchArticlesList() {
    return Ax.get("articles/list");
  },
  fetchAboutsList() {
    return Ax.get("abouts/list");
  },
  fetchMusicsList() {
    return Ax.get("musics/list");
  },
  fecthArticleById(id) {
    return Ax.get(`articles/` + id);
  },
  fecthTagById(id) {
    return Ax.get(`tags/` + id);
  },
  fecthMusicById(id) {
    return Ax.get(
      `https://api.imjad.cn/cloudmusic/?type=song&id=` + id + `&br=320000`
    );
  }
};

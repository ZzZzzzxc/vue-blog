module.exports = options => {
  //中间件
  //校验及错误处理
  const assert = require("http-assert");
  //token设置及处理
  const jwt = require("jsonwebtoken");
  //管理员模型
  const AdminUser = require("../models/AdminUser");

  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
     
    assert(token, 401, "请先登录");  
    
    const { id } = jwt.verify(token, req.app.get("secret"),function(err,decoded){
        if(err){
            err = {
                message: '请先登录',
              }
              return err;
          }
          return decoded;
          
        
    });
    
    assert(id, 401, "请先登录");
    req.user = await AdminUser.findById(id);
    assert(req.user, 401, "请先登录");
    await next();
  };
};

- 首先考虑安全 
  数据库的连接信息 统一放到.env文件下来保存
  .gitignore 本地有 但不上传githup
  env2 npm 会从.env读取
- sequelize 命令行 
  sequelize-cli 这里将集成mysql CRUD初始化
  node react app 数据库服务(数据存储)
  简化sql 操作，
  node_modules/.bin/sequelize init
  1. init
  一个应用对应一个数据库 eleme DB_NAME
  使用sequelize工具来形象化mysql操作
  代码运行环境分为开发环境 (develop) ,线上环境(production) 测试环境
  线上mysql 的密码不会给我们
  process.env.NODE_ENV 设置当前环境是何？
  线上机器走 .env 只需要有基本结构和一些数据就好了。
  env2帮我们将.env逐行
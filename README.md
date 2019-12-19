# IM消息WEB SDK与DEMO代码
/js/sdk/proto下文件为proto源文件，在其目录下执行:

```
# 环境安装，已有可忽略
npm install -g require
npm install -g browserify
npm install google-protobuf

# 生成可用js文件
browserify Message_pb.js > message_lib.js
browserify SendBody_pb.js > send_body_lib.js
browserify ReplyBody_pb.js > reply_body_lib.js
```

message_lib.js send_body_lib.js reply_body_lib.js 即为js可用文件

## 文档
- [SDK及DEMO详细](https://github.com/hslooooooool/im-proto)

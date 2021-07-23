# wiki-quiz-api-spec

## 実行手順

### 実行ファイルを書き換える

node_modules/swagger-ui-dist/index.html #42

```node_modules/swagger-ui-dist/index.html #42
// url: "https://petstore.swagger.io/v2/swagger.json",
url: "/spec/openapi.yaml",
```

### サーバーの起動

```shell
 yarn install
 yarn start
```

```
http://localhost:3000
```

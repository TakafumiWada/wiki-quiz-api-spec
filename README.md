# wiki-quiz-api-spec

## 実行手順

### モジュールのインストール

```shell
 yarn install
```

### 実行ファイルを書き換える

node_modules/swagger-ui-dist/index.html #42

```node_modules/swagger-ui-dist/index.html #42
// url: "https://petstore.swagger.io/v2/swagger.json",
url: "/spec/openapi.yaml",
```

### サーバーの起動

```shell
 yarn start
```

```
http://localhost:3000
```

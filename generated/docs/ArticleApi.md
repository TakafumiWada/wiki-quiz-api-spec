# WikiQuizApiSpec.ArticleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articleGetGet**](ArticleApi.md#articleGetGet) | **GET** /article/get | 記事データの取得
[**articleSearchGet**](ArticleApi.md#articleSearchGet) | **GET** /article/search | 検索結果を取得



## articleGetGet

> InlineResponse200 articleGetGet()

記事データの取得

Wikipediaの記事データをランダムで取得します

### Example

```javascript
import WikiQuizApiSpec from 'wiki_quiz_api_spec';

let apiInstance = new WikiQuizApiSpec.ArticleApi();
apiInstance.articleGetGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## articleSearchGet

> String articleSearchGet(text)

検索結果を取得

Wikipediaの記事データをランダムで取得します

### Example

```javascript
import WikiQuizApiSpec from 'wiki_quiz_api_spec';

let apiInstance = new WikiQuizApiSpec.ArticleApi();
let text = "text_example"; // String | 検索をかけてほしいワード
apiInstance.articleSearchGet(text, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| 検索をかけてほしいワード | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


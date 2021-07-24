/**
 * wiki-quiz-api-spec
 * [QuizWiki](https://www.quiz-wiki.com/)のバックエンドです。
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WikiQuizApiSpec);
  }
}(this, function(expect, WikiQuizApiSpec) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WikiQuizApiSpec.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instane = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be.a(WikiQuizApiSpec.InlineResponse200);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property contents (base name: "contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property words (base name: "words")', function() {
      // uncomment below and update the code to test the property words
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new WikiQuizApiSpec.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));

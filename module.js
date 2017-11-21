(function(){

  angular
    .module("storyApp", ["ngRoute"])
    .config(function($routeProvider) {
      $routeProvider
        .when("/Enter Text", {
          template: `<form-component></form-component>`,
          controller: "FormController as form"
        })
        .when("/View your story", {
          template: `<p>One confusing {{display.wordInfo.one}}, I woke up to {{display.wordInfo.two}} singing {{display.wordInfo.three}}. It sounded just like {{display.wordInfo.four}}.</p>`,
          controller: "DisplayController as display"
        })
    });
})();

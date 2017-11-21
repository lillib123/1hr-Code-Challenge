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
          template: `<story-component></story-component>`,
          controller: "DisplayController as display"
        })
    });
})();

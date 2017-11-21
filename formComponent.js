(function(){
  var formComponent = {
    controller: "FormController as form",
    template: `<div><input placeholder="time of day" ng-model="form.info.one">
    <input placeholder="a famous person" ng-model="form.info.two">
    <input placeholder="adverb" ng-model="form.info.three">
    <input placeholder="sound" ng-model="form.info.four">
    <button ng-click="form.changeWords(form.info); form.redirect();">Submit your words!</button>
    </div>`
  };
  angular
  .module("storyApp")
  .component("formComponent", formComponent);
})();

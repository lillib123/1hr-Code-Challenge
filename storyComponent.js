(function(){
var storyComponent = {
  controller: "DisplayController as display",
  template: `<p>One confusing {{form.display.wordInfo.one}}, I woke up to {{display.wordInfo.two}} singing {{display.wordInfo.three}}. It sounded just like {{display.wordInfo.four}}.</p>
             <button ng-click="display.redirect()">Restart Story</button>`
};
angular
.module("storyApp")
.component("storyComponent", storyComponent);
})();

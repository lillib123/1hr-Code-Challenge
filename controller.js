(function(){
  function FormController(StoryService) {
    var vm=this;
      vm.changeWords = function(newWord) {
      StoryService.setWords(newWord);
    };
  }
  function DisplayController(StoryService) {
    var vm=this;
    vm.wordInfo = StoryService.getWords();
  }

  angular
   .module("storyApp")
   .controller("FormController", FormController)
   .controller("DisplayController", DisplayController);
})();

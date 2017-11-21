(function(){
  function FormController(StoryService) {
    var vm=this;
      vm.changeWords = function(newWord) {
      StoryService.setWords(newWord);
    };
      vm.redirect = function() {
        window.location = "#!/View your story";
    };
  }
  function DisplayController(StoryService) {
    var vm=this;
    vm.wordInfo = StoryService.getWords();

    vm.redirect = function() {
      window.location = "#!/Enter Text";
  };
  }

  angular
   .module("storyApp")
   .controller("FormController", FormController)
   .controller("DisplayController", DisplayController);
})();

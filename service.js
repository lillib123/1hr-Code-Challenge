(function() {
  function StoryService($http) {
    var displayWords;
    return {
      setWords: setWords,
      getWords: getWords
    }
  };
  function setWords(newWord) {
    displayWords = newWord;
  }
  function getWords() {
    return displayWords;
  }
  angular
  .module("storyApp")
  .factory("StoryService", StoryService);
})();

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
    
      var userInput = $("input." + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});



/*$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});
There's one last thing to fix, though. If you don't refresh the page and you change the value of 
one of the inputs, it just adds it after the first value, 
instead of replacing it. We need to replace the existing text rather than just appending to it 
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});*/

/* their is a lot of repetation in DRY UP OUR CODE  USE LOOP 
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#story").show();

      event.preventDefault();
    });
  }); */ 
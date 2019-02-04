

$(document).ready(function () {
  console.log("loading app.js")
  const adminData = {
    admin: {
      name: "Aqua",
      email: "poggers@email.c",
      question: "what should we eat?",
      choices: [{ choice1: "description" }, { choice2: "description" }, { choice3: "description" }]
    }
  }


  //create onsubmit event handler prevent default
  $("form.question").on("submit", function (event) {
    event.preventDefault();
    console.log("submit");

    $.ajax({
      method: "POST",
      url: "/api/polls",
      data: {
        question: $("textarea.form-control").val(),
      },
    }).done((links) => {
      console.log(links)
    });

    //creates the html for the choices
    createQuestion()
    makeOptions()
    makePollButton()

    //displays the choices on the page
    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();

      const options = {
        method: "POST",
        url: "api/polls/1",
        dataType:"JSON",
        data: {
          options: $("textarea.choiceOption").val(),
          description: $("textarea.choiceDesc").val(),
          choice_number: $("ul.choices").children("li").length + 1
        }

      }

      request(options, function(){
        console.log("success")
      })

      createOption()
    })

    // adds the poll to the database
    $("form.pollCreation").on("submit", function (event) {
      event.preventDefault();

      const options = {
       method: "GET",
       url: "api/polls/1",
      }

      request(options, function(results){


      })
    })
  })








  //ajax request call test with reusbale ajax call function
  // haven't properly test it out yet
  $('.test').on("click", (event) => {
    const options = {
      url: `/api/polls/1/choices`,
      method: "GET",
      datatype: "JSON"
    };

    request(options, response => {
      console.log(response)
    });
  })





  //adding ajax request calls to all the routes from poll.js

  //need to add event listener for each,

  //create html tags to associate the choice routes with


  // reusable ajax request, use it where you need to make the call
  const request = (options, cb) => {
    $.ajax(options)
      .done(response => {
        cb(response);
      })
      .fail(err => {
        console.log("Error: ", err);
      })
      .always(() => {
        console.log("Request completed.");
      });
  };


  function createOption() {
    const choiceText = $("textarea.choiceOption").val();
    const choiceDesc = $("textarea.choiceDesc").val();
    const $choiceInput = $("<li>").text(choiceText + ": " + choiceDesc);
    $(".choices").append($choiceInput);
    $(".choiceOption").val("")
    $(".choiceDesc").val("")
  }

  function createQuestion() {
    const question = $("textarea.form-control").val();
    $(".option-container").empty();
    $(".form-control").val("");
    const load = $("<h2>").text(question);
    $(".option-container").append(load);
  }
  function makeOptions() {
    const $choiceArea = $("<form>").addClass("choiceArea");
    $("<ul>").addClass("choices").appendTo($choiceArea);
    $("<textarea>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
    $("<textarea>").attr("placeholder", "add description").addClass("choiceDesc").appendTo($choiceArea);
    $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
    $(".option-container").append($choiceArea);
  }
  function makePollButton() {
    const $submitPoll = $("<form>").addClass("pollCreation");
    $("<button>").attr("type", "submit").text("create poll").addClass("pollCreate").appendTo($submitPoll);
    $(".option-container").append($submitPoll)
  }

})

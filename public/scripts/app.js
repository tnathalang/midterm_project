

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
      data: adminData,
    }).done((links) => {
      console.log(links)
    });






    //
    //creates the html for the choices
    createQuestion()
    makeEmailForm()
    makeOptions()
    makePollButton()

    //displays the choices on the page
    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();
      createOption()
    })
    //adds the poll to the database
    // $("form.choiceArea").on("submit", function (event) {
    //   event.preventDefault();
    //
    // })
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
    const $choiceInput = $("<li>").text(choiceText);
    $(".choices").append($choiceInput);
    $(".choiceOption").val("")
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
    $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
    $(".option-container").append($choiceArea);
  }
  function makePollButton() {
    const $submitPoll = $("<form>").addClass("pollCreation");
    $("<button>").attr("type", "submit").text("create poll").addClass("pollCreate").appendTo($submitPoll);
    $(".option-container").append($submitPoll)
  }





})


function makeEmailForm() {
  const $email = $("<form>").addClass("emailForm");
  $("<textarea>").attr("placeholder", "add email").addClass("userEmail").appendTo($email);
  $(".option-container").append($email)
}

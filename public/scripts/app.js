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

    const question = $("textarea.form-control").val()
    createQuestion(question)

    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();
      const choiceText = $("textarea.choiceOption").val();
      createOption(choiceText)
    })
  })

  //ajax request to users
  $('.test').on("click", (event) => {


    $.ajax({
      method: "GET",
      url: "/api/users/admins",

    }).done((users) => {
      console.log(users)
    });
  })

})

function createQuestion(question){
  $(".option-container").empty()
  const load = $("<h2>").text(question)
  $(".option-container").append(load);

  const $choiceArea = $("<form>").addClass("choiceArea");
  $("<ul>").addClass("choices").appendTo($choiceArea);
  $("<textarea>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
  $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
  $(".option-container").append($choiceArea)
}

function createOption(option){
    const $choiceInput = $("<li>").text(option);
    $(".choices").append($choiceInput);
}

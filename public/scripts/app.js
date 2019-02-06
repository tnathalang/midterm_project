

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
    $("#form21").fadeOut(300)
    $("#form21_btn").fadeOut(300, function () {
      $("form.question").css('display', 'none');
    })

<<<<<<< HEAD
=======
    $(".pollCreate").click()



>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd
    $.ajax({
      method: "POST",
      url: "/api/polls",
      data: {
        name_poll: "Generic question name to be change eventually",
        question: $("#form21").val(),
        admin_id: 1
      }
    }).done((result) => {

      localStorage.setItem('poll_id', result.id)

    });

    //creates the html for the choices
    createQuestion()
    makeOptions()
    makePollButton()

    //displays the choices on the page
    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();

<<<<<<< HEAD
=======



      const options = {
        method: "POST",
        url: `/api/polls/${localStorage.getItem('poll_id')}`,
        dataType: "JSON",
        data: {
          options: $("input.choiceOption").val(),
          description: $("textarea.choiceDesc").val(),
          choice_number: $("ul.choices").children("li").length + 1
        }

      }

>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd
      request(options, function () {
        createOption()
    })



    $('.option-container.pollCreate').on('submit', function (event) {
      event.preventDefault()
      //redirect to localhost:8080/randomURL
      localStorage.getItem('poll_id')
      //random alphanumeric string
      let r = Math.random().toString(36).substr(2, 7)






    })

    // adds the poll to the database
    $("form.pollCreation").on("submit", function (event) {
      event.preventDefault();
<<<<<<< HEAD

      const askQuestion = $("h2.question").text()
      const choiceArr = []
      const choices = $("ul.choices").children("li")

      for (let i = 0; i < choices.length; i++){
        const name = $(choices[i]).children("span.name").text()
        const descript = $(choices[i]).children("span.desc").text()
        const choiceObj = {
          name_choice: name,
          description: descript,
          choice_number: i + 1,
        }
        choiceArr.push(choiceObj);
      }
      const options = {
        url: "api/polls",
        method: "POST",
        data:{
          name_poll:"placeholder name",
          question: askQuestion,
          admin_id: "1",
          choices: choiceArr
        }
=======
      const id = localStorage.getItem("poll_id")
      const options = {
        method: "POST",
        url: `api/polls/${id}/publish`,
>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd
      }

      request(options, function(){})


    })
  })

  //adding ajax request calls to all the routes from poll.js

  //need to add event listener for each,

  //create html tags to associate the choice routes with







<<<<<<< HEAD
  //ajax request call test with reusbale ajax call function
  // haven't properly test it out yet
  $('.test').on("click", (event) => {
    const options = {
      url: `/api/polls/1/choices`,
      method: "GET",
      datatype: "JSON"
    };
=======
>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd






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

})

function createOption() {
<<<<<<< HEAD
  const choiceText = $("textarea.choiceOption").val();
  const $choiceInput = $("<li>");
  const $choiceText = $("<span>").text(choiceText).addClass("name");
  const choiceDesc = $("input.choiceDesc").val();
  const $choiceDesc = $("<span>").text(choiceDesc).addClass("desc");
  $($choiceInput).append($choiceText);
  $($choiceInput).append($choiceDesc);
=======
  const choiceText = $("input.choiceOption").val();
  const $choiceInput = $("<li>").text(choiceText);
>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd
  $(".choices").append($choiceInput);
  $(".choiceOption").val("")
  $(".choiceDesc").val("")
}

function createQuestion() {
  const question = $("input#form21").val();
  $(".option-container").empty();
  $(".form-control").val("");
  const load = $("<h2>").text(question).addClass("question");
  $(".option-container").append(load);
}
function makeOptions() {
  const $choiceArea = $("<form>").addClass("choiceArea");
  $("<ul>").addClass("choices").appendTo($choiceArea);
<<<<<<< HEAD
  $("<textarea>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
  $("<input>").attr("type", "text").addClass("choiceDesc").appendTo($choiceArea);
=======
  $("<input type='text'>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
>>>>>>> b66d382da24b5cf846ce74fe6ce9312ec50c6bcd
  $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
  $(".option-container").append($choiceArea);
}
function makePollButton() {
  const $submitPoll = $("<form>").addClass("pollCreation");
  $("<button>").attr("type", "submit").text("create poll").addClass("pollCreate").appendTo($submitPoll);
  $(".option-container").append($submitPoll)
}



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

    //creates the html for the choices
    createQuestion()
    makeOptions()
    makePollButton()

    //displays the choices on the page
    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();

        createOption()
    })

    // adds the poll to the database
    $("form.pollCreation").on("submit", function (event) {
      event.preventDefault();

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
      }

      request(options, function(){})


      // options: $("textarea.choiceOption").val(),
      // description: $("textarea.choiceDesc").val(),
      // choice_number: $("ul.choices").children("li").length + 1
      //
      // const options = {
      //   method: "POST",
      //   url: "api/polls",
      //   dataType:"JSON",
      //   data: {
      //
      //   }
      // }

      // request(options, function(results){
      //
      //   console.log(results)

        // const admin = JSON.stringify(results[0].admin_link)
        // const submit = JSON.stringify(results[0].submit_link)
        // const links = $("<section>").addClass("links")
        // $("<label>").text("admin link:").appendTo(links)
        // $("<a>").attr("href", admin).addClass("adminLink").text(admin).appendTo(links)
        // $("<label>").text("voter link:").appendTo(links)
        // $("<a>").attr("href", submit).addClass("submitLink").text(submit).appendTo(links)
        //
        // $("main.container").empty()
        // $("main.container").append(links)
      //
      //
      // })


    })
  })

  //adding ajax request calls to all the routes from poll.js

  //need to add event listener for each,

  //create html tags to associate the choice routes with







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
  const choiceText = $("textarea.choiceOption").val();
  const $choiceInput = $("<li>");
  const $choiceText = $("<span>").text(choiceText).addClass("name");
  const choiceDesc = $("input.choiceDesc").val();
  const $choiceDesc = $("<span>").text(choiceDesc).addClass("desc");
  $($choiceInput).append($choiceText);
  $($choiceInput).append($choiceDesc);
  $(".choices").append($choiceInput);
  $(".choiceOption").val("")
  $(".choiceDesc").val("")
}

function createQuestion() {
  const question = $("textarea.form-control").val();
  $(".option-container").empty();
  $(".form-control").val("");
  const load = $("<h2>").text(question).addClass("question");
  $(".option-container").append(load);
}
function makeOptions() {
  const $choiceArea = $("<form>").addClass("choiceArea");
  $("<ul>").addClass("choices").appendTo($choiceArea);
  $("<textarea>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
  $("<input>").attr("type", "text").addClass("choiceDesc").appendTo($choiceArea);
  $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
  $(".option-container").append($choiceArea);
}
function makePollButton() {
  const $submitPoll = $("<form>").addClass("pollCreation");
  $("<button>").attr("type", "submit").text("create poll").addClass("pollCreate").appendTo($submitPoll);
  $(".option-container").append($submitPoll)
}

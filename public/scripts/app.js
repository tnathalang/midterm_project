

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



    $.ajax({
      method: "POST",
      url: "/api/polls",
      data: {
        name_poll: "Generic question name to be change eventually",
        question: $("#exampleFormControlTextarea1").val(),
        admin_id: 1
      }
    }).done((id) => {
      console.log(id)
      localStorage.setItem('poll_id', id)

    });


    //
    //creates the html for the choices
    createQuestion()
    makeOptions()
    makePollButton()

    //displays the choices on the page
    $("form.choiceArea").on("submit", function (event) {
      event.preventDefault();




      const options = {
        method: "POST",
        url: `/api/polls/${localStorage.getItem('poll_id')}`,
        dataType: "JSON",
        data: {
          options: $("textarea.choiceOption").val(),
          description: $("textarea.choiceDesc").val(),
          choice_number: $("ul.choices").children("li").length + 1
        }

      }

      request(options, function () {
        createOption()
      })


    })

    // adds the poll to the database
    $("form.pollCreation").on("submit", function (event) {
      event.preventDefault();

      const options = {
        method: "GET",
        url: "api/polls/1/choices",
      }

      request(options, function (results) {

        console.log(results)

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


      })


    })
  })

  //adding ajax request calls to all the routes from poll.js

  //need to add event listener for each,

  //create html tags to associate the choice routes with







  //ajax request call test with reusbale ajax call function
  // haven't properly test it out yet
  $('.test').on("click", (event) => {
    const options = {
      url: `/ api / polls / 1 / choices`,
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
  const $choiceInput = $("<li>").text(choiceText);
  $(".choices").append($choiceInput);
  $(".choiceOption").val("")
}

function createQuestion() {
  const question = $("input#form21").val();
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

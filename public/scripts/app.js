$(document).ready(function () {
  console.log("loading app.js")

  //create onsubmit event handler prevent default
  $("form.question").on("submit", function (event) {
    event.preventDefault();
    console.log("submit");
    $("#form21").fadeOut(300)
    $("#form21_btn").fadeOut(300, function () {
      $("form.question").css('display', 'none');
    })

    $(".pollCreate").click()

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

      request(options, function () {
        createOption()
      })
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

      const id = localStorage.getItem("poll_id")
      const options = {
        method: "POST",
        url: `api/polls/${id}/publish`,
      }
      request(options, function (result) {
        window.location.href = result.url
      })
    })
  })
  // add publish result to dabatbase
  $('').on('submit', function (event) {
    event.preventDefault()
    // const key = 
    const options = {
      method: "POST",
      url: `polls/:{key}/vote`
    }
    request(options, function (result) {

    })

  })





  $("button.votePoll").on("click", function (event) {
    event.preventDefault();

    const key = (window.location.pathname).split("/polls/").join("").split("/vote").join("");
    const votesRank = []

    const choices = $("ul.voting").children("li");
    $.each(choices, function(i, element){
      const choice = {
        choice_id: $(element).attr("id"),
        vote_id: $(element).children("input").val()
      }
      votesRank.push(choice)
    })

    console.log(votesRank);
    const options = {
      method:"POST",
      url: `/polls/${key}/final`,
      data: votesRank
    }



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
  const choiceText = $("input.choiceOption").val();
  const $choiceInput = $("<li>").text(choiceText);
  $(".choices").append($choiceInput);
  $(".choiceOption").val("")
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
  $("<ul>").addClass("choices").appendTo($choiceArea)
  $("<input type='text'>").attr("placeholder", "add option").addClass("choiceOption").appendTo($choiceArea);
  $("<button>").attr("type", "submit").text("add choice").addClass("choice").appendTo($choiceArea);
  $(".option-container").append($choiceArea);
}

function makePollButton() {
  const $submitPoll = $("<form>").addClass("pollCreation");
  $("<button>").attr("type", "submit").text("create poll").addClass("pollCreate").appendTo($submitPoll);
  $(".option-container").append($submitPoll)
}

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

  })

  //ajax request to users
  $('.test').on("click", (event) => {


    $.ajax({
      method: "GET",
      url: `/api/polls/${1}/choices`
      // url: `/ api / polls / ${ id }` for next route

    }).done((results) => {
      console.log(results)
    });
  })



})
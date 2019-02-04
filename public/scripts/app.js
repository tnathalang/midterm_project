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

  //ajax request test calls
  $('.test').on("click", (event) => {


    $.ajax({
      method: "GET",
      url: `/api/polls/${}/choices`
      // url: `/ api / polls / ${ id }` for next route

    }).done((results) => {
      console.log(results)
    });
  })



  //ajax request call test with reusbale ajax call function
  // haven't properly test it out yet
  $('.test').on("click", (event) => {
    const options = {
      url: `/api/polls/${req.params.id}/choices`,
      method: "GET",
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







})
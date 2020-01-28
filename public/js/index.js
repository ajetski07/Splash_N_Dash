// Get references to page elements
var $searchText = $("#search-input");
var $searchBtn = $("#search-btn");
var $viewBtn = $("#view-Btn");
var tr = $("<tr>");

console.log("javascript loaded");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getLocations: function() {
    return $.ajax({
      url: "api/hosts",
      type: "GET"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  // storing the zipcode from the form submit into a variable //
  var zipCode = $searchText.val().trim();

  // if the zipcode is not 5 digits alert the user that they must enter a valid 5 digit zipcode //
  if (!(zipCode.length === 5)) {
    alert("You must enter a five digit zipcode!");
    return;
  }

  // returning data from the database as an array //
  API.getLocations().then(function(data) {
    console.log(data);

    // attempting to append the database data to the available bathrooms table //

    $(tr).append("<td>" + data[0].id + "</td>");
    $(tr).append("<td>" + data[0].host + "</td>");
    $(tr).append("<td>" + data[0].address + "</td>");
    $(tr).append("<td>" + data[0].amenities + "</td>");

    $("tbody").append(tr);
  });
  $searchText.val("");
};

var handleViewSubmit = function() {
  // event.preventDefault();

  window.location.replace("/example");
};


// Add event listeners to the submit and delete buttons
$searchBtn.on("click", handleFormSubmit);
$viewBtn.on("click", handleViewSubmit);

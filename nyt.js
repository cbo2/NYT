<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Favorite Movies</title>
  <style type="text/css">
    button,
    div,
    form,
    input {
      margin: 10px;
    }
  </style>
</head>

<body>

  <div class="container">
    <h1>Data</h1>

    <!-- Movies will Get Dumped Here -->
    <div id="view"></div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
 
 window.onload = function() {
    $("#search").click(function() {
        // grab things from the UI into vars
        // call the callNYT function
    }); 
 }
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function callNYT(queryInfo, beginDate, endDate, limit) {

        // I need to impliment the limit myself since NYT doesn't seem to have that in the API
        var movie = $(this).attr("data-name");
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "4b2365b52e4e4dc98d5c8c0eea51fda7",
            'q': queryInfo,
            'begin_date': beginDate,
            'end_date': endDate
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
        return result;
      }

      callNYT("prince", "20140101", "20161231");

    //     // Creating an AJAX call for the specific movie button being clicked
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).then(function(response) {

    //       // Creating a div to hold the movie
    //       var movieDiv = $("<div class='movie'>");

    //       // Storing the rating data
    //       var rating = response.Rated;

    //       // Creating an element to have the rating displayed
    //       var pOne = $("<p>").text("Rating: " + rating);

    //       // Displaying the rating
    //       movieDiv.append(pOne);

    //       // Storing the release year
    //       var released = response.Released;

    //       // Creating an element to hold the release year
    //       var pTwo = $("<p>").text("Released: " + released);

    //       // Displaying the release year
    //       movieDiv.append(pTwo);

    //       // Storing the plot
    //       var plot = response.Plot;

    //       // Creating an element to hold the plot
    //       var pThree = $("<p>").text("Plot: " + plot);

    //       // Appending the plot
    //       movieDiv.append(pThree);

    //       // Retrieving the URL for the image
    //       var imgURL = response.Poster;

    //       // Creating an element to hold the image
    //       var image = $("<img>").attr("src", imgURL);

    //       // Appending the image
    //       movieDiv.append(image);

    //       // Putting the entire movie above the previous movies
    //       $("#movies-view").prepend(movieDiv);
    //     });

    //   }

    //   // Function for displaying movie data
    //   function renderButtons() {

    //     // Deleting the movies prior to adding new movies
    //     // (this is necessary otherwise you will have repeat buttons)
    //     $("#buttons-view").empty();

    //     // Looping through the array of movies
    //     for (var i = 0; i < movies.length; i++) {

    //       // Then dynamicaly generating buttons for each movie in the array
    //       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    //       var a = $("<button>");
    //       // Adding a class of movie-btn to our button
    //       a.addClass("movie-btn");
    //       // Adding a data-attribute
    //       a.attr("data-name", movies[i]);
    //       // Providing the initial button text
    //       a.text(movies[i]);
    //       // Adding the button to the buttons-view div
    //       $("#buttons-view").append(a);
    //     }
    //   }

    //   // This function handles events where a movie button is clicked
    //   $("#add-movie").on("click", function(event) {
    //     event.preventDefault();
    //     // This line grabs the input from the textbox
    //     var movie = $("#movie-input").val().trim();

    //     // Adding movie from the textbox to our array
    //     movies.push(movie);

    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    //   });

    //   // Adding a click event listener to all elements with a class of "movie-btn"
    //   $(document).on("click", ".movie-btn", displayMovieInfo);

    //   // Calling the renderButtons function to display the intial buttons
    //   renderButtons();
    </script>
  </div>
</body>

</html>
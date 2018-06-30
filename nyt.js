$(document).ready(function() {
  $("#searchButton").click(function(event) {
      event.preventDefault();
      // grab things from the UI into vars
      var search = $("#searchInput").val();
      console.log("the data in search box is: " + search);

      // make a call to our callNYT function and take the result returned and push it 
      // to the UI
      callNYT(search, "20120101", "20161231", 7);
  }); 
});

// displayMovieInfo function re-renders the HTML to display the appropriate content
function callNYT(queryInfo, beginDate, endDate, limit) {

  // I need to impliment the limit myself since NYT doesn't seem to have that in the API
  var result = Object;
  var list = [];

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
      console.log(result.status);
      console.log(result.response);
      console.log(result.response.docs);
      console.log(result.response.docs[0].web_url);
      console.log("limit is set to: " + limit);
      for (i = 0; i < limit; i++) {
        list.push(result.response.docs[i].web_url);
      }
      $("#nytResults").text(list.join("\n"));
      // $("#nytResults").text(format(list));
  }).fail(function(err) {
      throw err;
  });
}

function format(mylist) {
  var returnList = [];
  for (i = 0; i < mylist.length; i++) {
    returnList.push('<a href="' + mylist[i] + '">' + mylist[i] + "</a>\n");
  }
  return returnList;
}
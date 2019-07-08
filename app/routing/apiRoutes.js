// This will display a json object of all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
// this route will handle the incoming survey results, and calculate the compatibility. 
  app.post("/api/friends", function(req, res) {
    // fill logic in once the survey has been written
});
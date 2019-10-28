module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Root");
  });

  app.get("/test1", function(req, res) {
    res.send("TEST1");
  });
};

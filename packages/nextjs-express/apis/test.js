module.exports.start = server => {
  server.get("/api/test", (req, res) => {
    res.json({
      test: "Api test"
    });
  });
};

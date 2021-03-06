"use strict";

module.exports = (err, req, res, next) => {
  let error = { error: "Resource Not Found" };
  console.log(err);
  res.statusCode = 404;
  res.statusMessage = "Not Found";
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(error));
  res.end();
};

"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // settings

app.set("Port", process.env.PORT || 3000);
app.listen(app.get("Port"), function () {
  console.log("Servidor en el Puerto", app.get("Port"));
});
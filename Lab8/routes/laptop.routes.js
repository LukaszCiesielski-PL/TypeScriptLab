const controller = require("../controllers/laptop.controller");

module.exports = function(app) {
  app.get("/laptop", controller.getAll);
  app.post("/laptop", controller.add);
  app.put("/laptop", controller.update);
  app.delete("/laptop/:id", controller.delete);
};
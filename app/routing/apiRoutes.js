var characters = require("../data/friends");

module.exports = function (app) {
    app.get("/api/characters", function (req, res) {
        return res.json(characters)
    });

    app.post("/api/tables", function (req, res) {
        characters.push(req.body);
        res.json(true);

    });
}
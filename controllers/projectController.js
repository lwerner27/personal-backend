const db = require("../models")

module.exports = {
    createProject: function (req, res) {
        db.Project
            .create(req.body)
            .then(projectModel => res.json(projectModel))
            .catch(err => res.status(422).json(err));
    },
}
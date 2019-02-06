const db = require("../models")

module.exports = {
    findOneOrCreate: function (req, res) {
        db.Project.findOneAndUpdate(req.body, {}, {
            upsert: true
        }, () => {
            if (!error) {
                // If the document doesn't exist
                if (!result) {
                    // Create it
                    result = new Model();
                }
                // Save the document
                result.save(function (error) {
                    if (!error) {
                        res.json(result)
                    } else {
                        throw error;
                    }
                });
            }
        })
    }
}
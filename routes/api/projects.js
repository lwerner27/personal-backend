const router = require('express').Router();
const db = require('../../controllers');
const passport = require('passport');
require('../../config/passport')(passport);

// Creates a new day with default values
router.post('/newproject', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
        db.Project.findOneOrCreate(req, res);
    } else {
        return res.status(403).send({
            success: false,
            msg: 'Unauthorized.'
        });
    }
});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        require: true,
        unique: true
    },
    siteLink: {
        type: String,
        require: false
    },
    imgLink: {
        type: String,
        require: true
    }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project

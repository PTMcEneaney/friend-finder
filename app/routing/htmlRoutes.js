
var path = require("path");

//home page
function home(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log("home")
};
//survey page
function survey(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("survey")

};


module.exports = {
    home: home,
    survey: survey
}
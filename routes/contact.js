var express = require('express');
var router = express.Router();

function isEmail(inputEmail) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(inputEmail);
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    var input = req.body;

    if (input.name == '') {
        return res.send('<div class="error_message">Please enter your name.</div>');
    } else if (input.email == '') {
        return res.send('<div class="error_message">Please enter your email address.</div>');
    } else if (input.comments == '') {
        return res.send('<div class="error_message">Please enter your comments.</div>');
    } else if (isEmail(input.email) == '') {
        return res.send('<div class="error_message">Please enter a valid email address.</div>');
    }

    var address = "ratchapong.t@gmail.com";
    var e_subject = 'You have been contacted by ' + input.name + '.';

    var e_body = "You have been contacted by " + input.name + " with regards to " + e_subject + ", their additional message is as follows.";
    var e_content = input.comments;
    var e_reply = "You can contact " + input.name + " via email, " + input.email;


});

module.exports = router;

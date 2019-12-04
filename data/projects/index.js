//shared between server and fe - use commonjs

var NotableWomen = require('./notable-women.json')
var Chobani = require('./chobani.json')
var ISmokeWeed = require('./i-smoke-weed.json')
var YearInMusic = require('./year-in-music.json')
var GoogleCalendar = require('./google-calender.json')
var CampGoogle = require('./camp-google.json')

const allWorkObj = Object.assign({}, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar, CampGoogle); //as an object, for individual work routes

const allWorkArray = []; //list of keys, for next data

Object.entries(allWorkObj).forEach(key => {
    allWorkArray.push(key[0])
});

module.exports = { allWorkObj, allWorkArray }

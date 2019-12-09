//shared between server and fe - use commonjs
var SidewalkToronto = require('./sidewalk-toronto.json')
var NotableWomen = require('./notable-women.json')
var Chobani = require('./chobani.json')
var ISmokeWeed = require('./i-smoke-weed.json')
var YearInMusic = require('./year-in-music.json')
var GoogleCalendar = require('./google-calender.json')
var CampGoogle = require('./camp-google.json')

const allWebObj = Object.assign({}, SidewalkToronto, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar, CampGoogle); //as an object, for individual work routes

const allWebArray = []; //list of keys, for next data

Object.entries(allWebObj).forEach(key => {
    allWebArray.push(key[0])
});

module.exports = { allWebObj, allWebArray }

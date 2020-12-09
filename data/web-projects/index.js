//shared between server and fe - use commonjs
import SidewalkToronto from './sidewalk-toronto.js'
import NotableWomen from './notable-women.js'
import Chobani from './chobani.js'
import ISmokeWeed from './i-smoke-weed.js'
import YearInMusic from './year-in-music.js'
import GoogleCalendar from './google-calender.js'
// import CampGoogle from './camp-google.json'

const allWebObj = Object.assign({}, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar); //as an object, for individual work routes

const allWebArray = []; //list of keys, for next data

Object.entries(allWebObj).forEach(key => {
    allWebArray.push(key[0])
});

export { allWebObj, allWebArray }

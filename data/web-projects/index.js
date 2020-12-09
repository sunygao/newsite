//shared between server and fe - use commonjs
import SidewalkToronto from './sidewalk-toronto.json'
import NotableWomen from './notable-women.json'
import Chobani from './chobani.json'
import ISmokeWeed from './i-smoke-weed.json'
import YearInMusic from './year-in-music.json'
import GoogleCalendar from './google-calender.json'
// import CampGoogle from './camp-google.json'

const allWebObj = Object.assign({}, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar); //as an object, for individual work routes

const allWebArray = []; //list of keys, for next data

Object.entries(allWebObj).forEach(key => {
    allWebArray.push(key[0])
});

export { allWebObj, allWebArray }

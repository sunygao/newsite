//shared between server and fe - use commonjs
import SpotifyCountry from './spotify-country.js'
import CraigReynolds from './craig-reynolds.js'
import SidewalkToronto from './sidewalk-toronto.js'
import NotableWomen from './notable-women.js'
import Chobani from './chobani.js'
import ISmokeWeed from './i-smoke-weed.js'
import YearInMusic from './year-in-music.js'
import GoogleCalendar from './google-calender.js'
// import CampGoogle from './camp-google.json'

const allWebObj = Object.assign({}, SpotifyCountry, CraigReynolds, SidewalkToronto, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar); //as an object, for individual work routes

console.log(allWebObj, SpotifyCountry)


const allWebArray = []; //list of keys, for next data

Object.entries(allWebObj).forEach(key => {
    allWebArray.push(key[0])
});

export { allWebObj, allWebArray }

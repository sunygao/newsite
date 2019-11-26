import NotableWomen from './notable-women.json'
import Chobani from './chobani.json'
import ISmokeWeed from './i-smoke-weed.json'
import YearInMusic from './year-in-music.json'
import GoogleCalendar from './google-calender.json'
import CampGoogle from './camp-google.json'

const allWorkObj = Object.assign({}, NotableWomen, Chobani, ISmokeWeed, YearInMusic, GoogleCalendar, CampGoogle); //as an object, for individual work routes

const allWorkArray = []; //list of keys, for next data

Object.entries(allWorkObj).forEach(key => {
    allWorkArray.push(key[0])
});

export { allWorkObj, allWorkArray }

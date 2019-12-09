import RovingWoman from './roving-woman.json'
import RoomForRent from './room-for-rent.json'
import VenusFlyTraps from './10-venus-fly-traps.json'
import PrintedMatter from './printed-matter.json'
import DiaryComics from './diary-comics.json'
import Phenakistiscopes from './phenakistiscopes.json'
import IllustrationsVarious from './illustrations-various.json'

const allArtObj = Object.assign({ }, RovingWoman, RoomForRent, DiaryComics, Phenakistiscopes, IllustrationsVarious, VenusFlyTraps, PrintedMatter); //as an object, for individual work routes

const allArtArray = []; //list of keys, for next data

Object.entries(allArtObj).forEach(key => {
    allArtArray.push(key[0])
});

export { allArtObj, allArtArray }

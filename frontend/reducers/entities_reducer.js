import {combineReducers} from "redux"; 
import users from "./users_reducer"; 
import albums from "./albums_reducer"; 
import tracks from "./tracks_reducer";

const entitiesReducer = combineReducers(
{
   users: users,
   albums: albums,
   tracks: tracks
}); 

export default entitiesReducer; 

// const entitiesReducer = () => {
//     debugger
//     return combineReducers({
//         users: usersReducer,
//         albums: albumsReducer,
//         tracks: tracksReducer,
//     });
// }

// export default entitiesReducer; 
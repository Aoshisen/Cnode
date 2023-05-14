import { createStore,combineReducers} from "redux"
import topics from "./reducer/topics"
import topic from "./reducer/topic"
import user from "./reducer/user"

export default createStore(combineReducers({
    topics,
    topic,
    user
}));
import {combineReducers} from "redux"
import userReducer from "../redux/user/userreducer"
import {Dropreducer} from "../redux/dropdown/dropreducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {Directoryreducer} from "../redux/directory/directoryreducer"
import {collectionreducer} from "../redux/collection/collectionreducer"

const persistConfig={
  key:"root",
  storage,
  whitelist:["dropreducer"]
}


const combine= combineReducers({
    user: userReducer,
dropreducer:Dropreducer,
directoryreducer:Directoryreducer,
collectionreducer:collectionreducer
  });
export default persistReducer(persistConfig,combine)
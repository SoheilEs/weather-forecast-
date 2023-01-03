import { combineReducers } from "redux";
import citesReducer from "./cites/citesReducer";
import weatherReducer from "./weather/weatherReducer"

export const rootReducer = combineReducers({
    citesState : citesReducer,
    weatherState : weatherReducer
})
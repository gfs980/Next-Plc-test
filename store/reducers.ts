import { combineReducers } from "redux";
import { ItunesData } from "../pages/api/music";
import * as types from "./types";
import { SearchResultActionTypes } from "./types";

// INITIAL TIMER STATE
const initialTimerState: ItunesDataStore = {
	resultCount: null,
	results: []
};

interface ItunesDataStore {
	resultCount: number | null;
	results: ItunesData["results"];
}

export interface ApplicationState {
	results: ItunesDataStore;
}

// TIMER REDUCER
const timerReducer = (
	state = initialTimerState,
	{ type, payload }: SearchResultActionTypes
) => {
	switch (type) {
		case types.SET:
			return payload;
		default:
			return state;
	}
};

// COMBINED REDUCERS
const reducers = {
	results: timerReducer
};

export default combineReducers(reducers);

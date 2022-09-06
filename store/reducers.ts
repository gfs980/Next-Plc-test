import { combineReducers } from "redux";
import { ItunesData } from "../pages/api/music";
import * as types from "./types";
import { SearchResultActionTypes } from "./types";

// INITIAL TIMER STATE
export const initialResultsState: ItunesDataStore = {
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
export const resultReducer = (
	state = initialResultsState,
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
	results: resultReducer
};

export default combineReducers(reducers);

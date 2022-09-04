import { ItunesData } from "../pages/api/music";
import * as types from "./types";

// RESET COUNTER
export const addSearchResult = (data: ItunesData) => ({
	type: types.SET,
	payload: data
});

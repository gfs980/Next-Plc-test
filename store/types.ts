import { ItunesData } from "../pages/api/music";

export const SET = "SET";
export const RESET = "RESET";

interface SetSearchResult {
	type: typeof SET;
	payload: ItunesData;
}

export type SearchResultActionTypes = SetSearchResult;

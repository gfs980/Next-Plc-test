// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

export type ItunesDataResult = {
	wrapperType: string;
	kind: string;
	artistId: number;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	collectionArtistName?: string;
	contentAdvisoryRating?: string;
	trackCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	trackViewUrl: string;
	previewUrl: string;
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	releaseDate: string;
	collectionExplicitness: string;
	trackExplicitness: string;
	discCount: number;
	discNumber: number;
	trackCount: number;
	trackNumber: number;
	trackTimeMillis: number;
	country: string;
	currency: string;
	primaryGenreName: string;
	isStreamable: boolean;
};

export type ItunesData = {
	resultCount: number;
	results: ItunesDataResult[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ItunesData>
) {
	const searchKey = req.query.searchkey;
	const itunesData = await Axios.get<ItunesData>(
		`https://itunes.apple.com/search?term=${searchKey}&media=music&entity=musicArtist&entity=album&entity=song`
	);

	res.status(200).json(itunesData.data);
}

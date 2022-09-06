import { render, screen } from "@testing-library/react";
import ResultItem from "../ResultItem";

describe("testing render result item", () => {
	it("renders a ResultItem", () => {
		render(
			<ResultItem
				item={{
					wrapperType: "track",
					kind: "song",
					artistId: 1798556,
					collectionId: 1440858689,
					trackId: 1440859510,
					artistName: "Maroon 5",
					collectionName: "Hands All Over (Deluxe Edition)",
					trackName: "Moves Like Jagger (feat. Christina Aguilera)",
					collectionCensoredName: "Hands All Over (Deluxe Edition)",
					trackCensoredName: "Moves Like Jagger (feat. Christina Aguilera)",
					artistViewUrl:
						"https://music.apple.com/us/artist/maroon-5/1798556?uo=4",
					collectionViewUrl:
						"https://music.apple.com/us/album/moves-like-jagger-feat-christina-aguilera/1440858689?i=1440859510&uo=4",
					trackViewUrl:
						"https://music.apple.com/us/album/moves-like-jagger-feat-christina-aguilera/1440858689?i=1440859510&uo=4",
					previewUrl:
						"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1c/c2/9d/1cc29dbe-d679-8ad7-34ae-b50fc94ff084/mzaf_10742809351670988778.plus.aac.p.m4a",
					artworkUrl30:
						"https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/79/1e/dc/791edcf0-73ab-96e7-b6c4-29943a79c14c/14UMGIM27067.rgb.jpg/30x30bb.jpg",
					artworkUrl60:
						"https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/79/1e/dc/791edcf0-73ab-96e7-b6c4-29943a79c14c/14UMGIM27067.rgb.jpg/60x60bb.jpg",
					artworkUrl100:
						"https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/79/1e/dc/791edcf0-73ab-96e7-b6c4-29943a79c14c/14UMGIM27067.rgb.jpg/100x100bb.jpg",
					collectionPrice: 11.99,
					trackPrice: 1.29,
					releaseDate: "2010-08-18T12:00:00Z",
					collectionExplicitness: "notExplicit",
					trackExplicitness: "notExplicit",
					discCount: 1,
					discNumber: 1,
					trackCount: 19,
					trackNumber: 13,
					trackTimeMillis: 201240,
					country: "USA",
					currency: "USD",
					primaryGenreName: "Pop",
					isStreamable: true
				}}
			/>
		);

		const artist = screen.getByTestId("artist");
		const album = screen.getByTestId("album");
		const song = screen.getByTestId("song");
		expect(artist.textContent).toBe("Artist: Maroon 5");
		expect(album.textContent).toBe("Albums: Hands All Over (Deluxe Edition)");
		expect(song.textContent).toBe(
			"Song: Moves Like Jagger (feat. Christina Aguilera)"
		);
	});
});

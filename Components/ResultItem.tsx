import Image from "next/image";
import React from "react";
import { ItunesDataResult } from "../pages/api/music";

interface ResultItemProps {
	item: ItunesDataResult;
}

const ResultItem: React.FC<ResultItemProps> = props => {
	return (
		<div className="result-item">
			<Image
				src={props.item.artworkUrl100}
				width={100}
				height={100}
				alt={props.item.collectionName}
			/>
			<div className="details">
				<span data-testid="artist">Artist: {props.item.artistName}</span>
				<span data-testid="album">Albums: {props.item.collectionName}</span>
				<span data-testid="song">Song: {props.item.trackName}</span>
			</div>
			<style jsx>{`
				.result-item {
					display: flex;
					gap: 1rem;
				}
				.details {
					display: grid;
				}
			`}</style>
		</div>
	);
};

export default ResultItem;

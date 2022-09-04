import React from "react";
import { connect } from "react-redux";
import MagnifierIcon from "../assets/MagnifierIcon";
import { ItunesData } from "../pages/api/music";
import { addSearchResult } from "../store/actions";
import { ApplicationState } from "../store/reducers";
import debounceSearch from "../utils/debounceSearch";

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = {
	addSearchResult
};

interface SearchInputProps {
	addSearchResult: (data: ItunesData) => void;
}

const SearchInput: React.FC<SearchInputProps> = props => {
	const debounceAxios = debounceSearch(500);

	const onSearch = async (
		input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const searchText = input.target.value;

		const data = await debounceAxios<ItunesData>("/api/music", {
			searchkey: searchText
		});

		props.addSearchResult(data);
	};

	return (
		<div className="search-group">
			<MagnifierIcon
				style={{
					width: 30,
					height: 30
				}}
			/>
			<input
				className="search-input"
				data-testid="search-music"
				onChange={onSearch}
			/>
			<style jsx>{`
				.search-group {
					display: flex;
					border: 1px solid white;
				}
				.search-input {
					border: none;
					width: 100%;
					background-color: transparent;
				}
			`}</style>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

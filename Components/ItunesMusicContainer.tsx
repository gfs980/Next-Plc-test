import React from "react";
import ListResults from "./ListResults";
import SearchInput from "./SearchInput";

const ItunesMusicContainer: React.FC = props => {
	return (
		<div className="content">
			<SearchInput />
			<ListResults />
			<style jsx>{`
				.content {
					display: grid;
					gap: 2rem;
				}
			`}</style>
		</div>
	);
};

export default ItunesMusicContainer;

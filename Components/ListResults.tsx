import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { ApplicationState } from "../store/reducers";
import ResultItem from "./ResultItem";

const mapStateToProps = (state: ApplicationState) => ({
	results: state.results
});

const mapDispatchToProps = {};

interface ListResultsProps {
	results: ApplicationState["results"];
}
const paginationLimiter = 10;

const ListResults: React.FC<ListResultsProps> = props => {
	const { results, resultCount } = props.results;
	const resultsLength = resultCount || 0;
	const [page, setPage] = React.useState(1);

	const listOfItems = React.useMemo(() => {
		if (!(resultsLength > 0)) {
			return [];
		}
		const endIndex = page * paginationLimiter;

		return results.slice(0, endIndex);
	}, [page, results, resultsLength]);

	const fetchMoreData = React.useCallback(() => {
		// a fake async api call like which sends
		// 20 more records in 1.5 secs
		if (page < resultsLength / paginationLimiter)
			setTimeout(() => {
				setPage(page + 1);
			}, 500);
	}, [page, resultsLength]);

	return (
		<div>
			{resultCount == 0 ? (
				<h1>No results found</h1>
			) : (
				<InfiniteScroll
					dataLength={listOfItems.length}
					next={fetchMoreData}
					hasMore={listOfItems.length < resultsLength}
					loader={<h4>Loading...</h4>}
					style={{
						display: "grid",
						gap: "1rem"
					}}
				>
					{listOfItems.map((item, index) => (
						<ResultItem key={index} item={item} />
					))}
				</InfiniteScroll>
			)}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListResults);

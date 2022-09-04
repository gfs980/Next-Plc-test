import Axios from "axios";

const debouncerAxios = (timeout: number) => {
	let timer: any;
	const resources: { [key: string]: any } = {};

	return async <T>(url: string, query?: { searchkey: string }): Promise<T> => {
		clearTimeout(timer);
		const urlWithQuery = query ? `${url}?${query}` : url;

		const resData: T = query?.searchkey ? resources[query?.searchkey] : null;
		if (resData) {
			// Return result if it exists
			return resData;
		}

		return new Promise((resolve, reject) => {
			timer = setTimeout(async () => {
				try {
					const res = await Axios.get<T>(url, { params: query });
					resources[urlWithQuery] = res.data;
					resolve(res.data);
				} catch (error) {
					if (Axios.isCancel(error)) {
						// Handle if request was cancelled
						// console.log("Request canceled", error.message);
					} else {
						// Handle usual errors
						// console.log("Something went wrong: ", error.message);
					}
				}
			}, timeout);
		});
	};
};

const axiosDebounce = (delay: number) => debouncerAxios(delay);

export default axiosDebounce;

import axiosCilent from "./axiosCilent";

export const category = {
	movie: "movie",
	tv: "tv",
};

export const movieType = {
	uncoming: "uncoming",
	popular: "popular",
	top_rated: "top_rated",
};

export const tvType = {
	popular: "popular",
	top_rated: "top_rated",
	on_the_air: "on_the_air",
};

const tmdbApi = {
	getMoviesList: (type, params) => {
		const url = "movie/" + movieType[type];
		return axiosCilent.get(url, params);
	},
	getTvList: (type, params) => {
		const url = "tv/" + tvType[type];
		return axiosCilent.get(url, params);
	},
	getVideos: (cate, id) => {
		const url = category[cate] + "/" + id + "/videos";
		return axiosCilent.get(url, { params: {} });
	},
	search: (cate, params) => {
		const url = "search/" + category[cate];
		return axiosCilent.get(url, params);
	},
	detail: (cate, id, params) => {
		const url = category[cate] + "/" + id;
		return axiosCilent.get(url, params);
	},
	credits: (cate, id) => {
		const url = category[cate] + "/" + id + "/credits";
		return axiosCilent.get(url, { params: {} });
	},
	similar: (cate, id) => {
		const url = category[cate] + "/" + id + "/similar";
		return axiosCilent.get(url, { params: {} });
	},
};

export default tmdbApi;

const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "b796a299f9e1cd293d013e97f0ae76da",
	originalImage: (imgPath) =>
		`https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;

import "swiper/swiper.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Rou from "./config/Routes";

function App(props) {
	return (
		<BrowserRouter>
			<Header {...props} />
			<Rou />
			<Footer />
		</BrowserRouter>
	);
}

export default App;

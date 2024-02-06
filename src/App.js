import "./App.css";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import MobileSection from "./components/MobileSection";
import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<>
			<NavBar />
			<Container>
				<HeroSection />
				<MobileSection />
				<ContactUs />
			</Container>
		</>
	);
}

export default App;

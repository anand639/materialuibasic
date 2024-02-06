import React from "react";
import "./HeroSection.css";
import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
	return (
		<Box className="heroContainer">
			<Typography variant="h2" gutterBottom className="heroTitle">
				Welcome to Our iPhone Store
			</Typography>
			<Typography variant="h5" gutterBottom>
				“Think Different with Pro iPhone”
			</Typography>
			<Button variant="contained" color="primary" className="heroButton">
				Explore Now
			</Button>
		</Box>
	);
}

export default HeroSection;

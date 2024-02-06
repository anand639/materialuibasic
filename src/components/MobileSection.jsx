import React from "react";
import "./MobileSection.css";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const phones = [
	{
		name: "iPhone 16",
		description:
			"The iPhone 16 is the latest model in Apple's lineup of smartphones",
		image:
			"https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_15_Pro/nextpit_iPhone_15_Pro_Camera.jpg",
	},
	{
		name: "iPhone 16 Plus",
		description: "The iPhone 16 plus is the power house",
		image:
			"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/black__efg76fuz5hm6_large_2x.jpg",
	},
	{
		name: "iPhone 16 Pro",
		description: "Pro cameras. Pro display. Pro performance.",
		image:
			"https://static.tnn.in/thumb/msid-106554308,thumbsize-24214,width-1280,height-720,resizemode-75/106554308.jpg",
	},
	{
		name: "iPhone 16 Pro Max",
		description:
			"Pro cameras with 240 fps Slow-Mo. Pro display With Sapphire Grade. Pro performance.",
		image: "https://i.ytimg.com/vi/re9mBiI9Kns/sddefault.jpg",
	},
    {
		name: "iPhone 16",
		description:
			"The iPhone 16 is the latest model in Apple's lineup of smartphones",
		image:
			"https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_15_Pro/nextpit_iPhone_15_Pro_Camera.jpg",
	},
	{
		name: "iPhone 16 Plus",
		description: "The iPhone 16 plus is the power house",
		image:
			"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/black__efg76fuz5hm6_large_2x.jpg",
	},
	{
		name: "iPhone 16 Pro",
		description: "Pro cameras. Pro display. Pro performance.",
		image:
			"https://static.tnn.in/thumb/msid-106554308,thumbsize-24214,width-1280,height-720,resizemode-75/106554308.jpg",
	},
	{
		name: "iPhone 16 Pro Max",
		description:
			"Pro cameras with 240 fps Slow-Mo. Pro display With Sapphire Grade. Pro performance.",
		image: "https://i.ytimg.com/vi/re9mBiI9Kns/sddefault.jpg",
	},{
		name: "iPhone 16",
		description:
			"The iPhone 16 is the latest model in Apple's lineup of smartphones",
		image:
			"https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_15_Pro/nextpit_iPhone_15_Pro_Camera.jpg",
	},
	{
		name: "iPhone 16 Plus",
		description: "The iPhone 16 plus is the power house",
		image:
			"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/black__efg76fuz5hm6_large_2x.jpg",
	},
	{
		name: "iPhone 16 Pro",
		description: "Pro cameras. Pro display. Pro performance.",
		image:
			"https://static.tnn.in/thumb/msid-106554308,thumbsize-24214,width-1280,height-720,resizemode-75/106554308.jpg",
	},
	{
		name: "iPhone 16 Pro Max",
		description:
			"Pro cameras with 240 fps Slow-Mo. Pro display With Sapphire Grade. Pro performance.",
		image: "https://i.ytimg.com/vi/re9mBiI9Kns/sddefault.jpg",
	},
    {
		name: "iPhone 16",
		description:
			"The iPhone 16 is the latest model in Apple's lineup of smartphones",
		image:
			"https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_15_Pro/nextpit_iPhone_15_Pro_Camera.jpg",
	},
	{
		name: "iPhone 16 Plus",
		description: "The iPhone 16 plus is the power house",
		image:
			"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/black__efg76fuz5hm6_large_2x.jpg",
	},
	{
		name: "iPhone 16 Pro",
		description: "Pro cameras. Pro display. Pro performance.",
		image:
			"https://static.tnn.in/thumb/msid-106554308,thumbsize-24214,width-1280,height-720,resizemode-75/106554308.jpg",
	},
	{
		name: "iPhone 16 Pro Max",
		description:
			"Pro cameras with 240 fps Slow-Mo. Pro display With Sapphire Grade. Pro performance.",
		image: "https://i.ytimg.com/vi/re9mBiI9Kns/sddefault.jpg",
	},

	// Add more models here
];

function MobileSection() {
	return (
		<Grid container spacing={4} className="mobilesection">
			{phones.map((phone, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<Card className="cardRoot">
						<CardMedia
							component="img"
							height="250"
							image={phone.image}
							alt={phone.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{phone.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{phone.description}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}

export default MobileSection;

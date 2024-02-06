import React from "react";
import "./ContactUs.css";
import { Box, Typography, Button, TextField } from "@mui/material";

function ContactUs() {
	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			className="formContainer"
		>
			<Typography variant="h6" gutterBottom>
				Feel free to contact us!
			</Typography>
			<TextField
				required
				id="name"
				label="Enter Your Name"
				variant="outlined"
				className="formField"
			/>
			<TextField
				required
				id="email"
				label="Enter your Email"
				type="email"
				variant="outlined"
				className="formField"
			/>
			<TextField
				id="message"
				label="Message"
				multiline
				rows={4}
				variant="outlined"
				className="formField"
			/>
			<Button variant="contained" color="primary" className="sendButton">
				Send Message
			</Button>
		</Box>
	);
}

export default ContactUs;

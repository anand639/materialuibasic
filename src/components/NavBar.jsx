import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar() {
	return (
		<AppBar position="static">
			<Toolbar className="appbar">
				<Typography variant="h6">iPhone Store</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;

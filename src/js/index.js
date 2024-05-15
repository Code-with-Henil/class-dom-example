import { Header } from "./components/header.js";
import { Button } from "./components/button.js";
import { Footer } from "./components/footer.js";

$().ready(function () {
	new Header(["Home", "About", "Contact"]);
	new Button("Click", () => {
		console.log("works");
	});
	new Button("Login", () => {
		console.log("LOGGED IN");
	});
	new Footer("Copyright 2024. All Rights Reserved.");
});

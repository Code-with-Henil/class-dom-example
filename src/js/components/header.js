import { Component } from "../common/component.js";

export class Header extends Component {
	#links; // -> Dummy - ["Home", "About", "Contact"]

	constructor(links) {
		super();
		this.#links = links;

		this.render();
	}

	render() {
		const header = $("<header>");

		const nav = $("<nav>");

		this.#links.forEach((eachLink) => {
			const aTag = $("<a>");
			aTag.attr("href", "#");
			aTag.text(eachLink);

			nav.append(aTag);
		});

		header.append(nav);

		$("body").append(header);
	}
}

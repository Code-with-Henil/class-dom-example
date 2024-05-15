import { Component } from "../common/component.js";

export class Footer extends Component {
	#p;

	constructor(footerText) {
		super();
		this.#p = footerText;

		this.render();
	}

	render() {
		const footer = $("<footer>");

		const pTag = $("<p>");
		pTag.text(this.#p);

		footer.append(pTag);

		$("body").append(footer);
	}
}

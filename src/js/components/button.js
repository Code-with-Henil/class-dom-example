import { Component } from "../common/component.js";

export class Button extends Component {
	#buttonText;
	#clickHandler;

	constructor(btnText, onClickHandler) {
		super();
		this.#buttonText = btnText;
		this.#clickHandler = onClickHandler;

		this.render();
	}

	render() {
		const button = $("<button>");

		button.text(this.#buttonText);
		button.on("click", this.#clickHandler);

		$("body").append(button);
	}
}

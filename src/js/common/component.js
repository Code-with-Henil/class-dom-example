export class Component {
	constructor() {
		if (this.constructor.name === "Component") {
			throw new Error("Abstract classes cannot be instantiated");
		}
	}

	render() {
		throw new Error("You forgot the render() method!");
	}
}

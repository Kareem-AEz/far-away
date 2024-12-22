import { useState } from "react";

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		// Prevent the form from refreshing the page
		e.preventDefault();

		// Check if the description is empty
		if (!description.trim()) {
			console.warn("Please enter a description");

			return;
		}
		console.log("Form submitted");

		// Create a new item object
		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};
		console.log(newItem);
		onAddItems(newItem);

		// Reset the form
		setDescription("");
		setQuantity(1);

		// Dispatch an action to add the new item
	}

	return (
		<form
			className="add-form"
			onSubmit={handleSubmit}
		>
			<h3>What do you need for your 😍 trip?</h3>

			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 })
					.map((_, index) => index + 1)
					.map((number) => (
						<option
							key={number}
							value={number}
						>
							{number}
						</option>
					))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

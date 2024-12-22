import { useState } from "react";

export default function PackingList({
	items,
	onDeleteItem,
	onCheckedItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems = [...items];

	// Sort the items
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onCheckedItem={onCheckedItem}
					/>
				))}
			</ul>

			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>w
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</div>
	);
}

function Item({ item, onDeleteItem, onCheckedItem }) {
	return (
		<li key={item.id}>
			<input
				type="checkbox"
				onChange={() => onCheckedItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity}x {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

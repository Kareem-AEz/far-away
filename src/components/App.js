import { useState } from "react";

import Footer from "./Footer";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";

export default function App() {
	const [items, setItems] = useState([]);

	// add item to the list
	function handleAddItems(item) {
		setItems((prevItems) => [...prevItems, item]);
	}

	// delete item from the list
	function handleDeleteItem(id) {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	// check/uncheck item
	function handleCheckedItem(id) {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	// clear the list
	function handleClearList() {
		if (!items.length) return;

		const confirm = window.confirm("Are you sure you want to clear the list?");

		if (!confirm) return;
		setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onCheckedItem={handleCheckedItem}
				onClearList={handleClearList}
			/>
			<Footer items={items} />
		</div>
	);
}

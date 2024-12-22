export default function Footer({ items }) {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Start adding items to your list! 🚀</em>
			</footer>
		);
	}

	// calculate statistics
	const totalItems = items.length;
	const totalPackedItems = items.filter((item) => item.packed).length;
	const percentage = Math.round((totalPackedItems / totalItems) * 100) || 0;

	return (
		<footer className="stats">
			{totalPackedItems !== totalItems ? (
				<em>
					You have {totalItems} items on your list, and you already packed{" "}
					{totalPackedItems} items. That's {percentage}% of your list. Keep
					going! 🚀
				</em>
			) : (
				<em>You already packed everything. You are ready to go! 🎉</em>
			)}
		</footer>
	);
}

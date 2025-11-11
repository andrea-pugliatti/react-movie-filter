export default function searchInput({ setSearchInput }) {
	return (
		<>
			<label htmlFor="search-input">Cerca:</label>
			<input
				id="search-input"
				type="text"
				onChange={(event) => setSearchInput(event.target.value)}
			/>
		</>
	);
}

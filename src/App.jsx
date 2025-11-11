import { useState, useEffect } from "react";

function App() {
	const movieList = [
		{ title: "Inception", genre: "Fantascienza" },
		{ title: "Il Padrino", genre: "Thriller" },
		{ title: "Titanic", genre: "Romantico" },
		{ title: "Batman", genre: "Azione" },
		{ title: "Interstellar", genre: "Fantascienza" },
		{ title: "Pulp Fiction", genre: "Thriller" },
	];

	const genreList = [
		"Tutti",
		"Fantascienza",
		"Thriller",
		"Romantico",
		"Azione",
	];

	const [movies, setMovies] = useState(movieList);
	const [filtered, setFiltered] = useState(movieList);
	const [genre, setGenre] = useState(genreList[0]);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		let filtered = movies.filter(
			(item) => genre === genreList[0] || item.genre === genre,
		);

		filtered = filtered.filter((item) =>
			item.title.toLowerCase().includes(searchInput.toLowerCase()),
		);
		setFiltered(filtered);
	}, [genre, searchInput]);

	return (
		<>
			<label htmlFor="genre-selector">Scegli un genere:</label>
			<select
				name="genre-selector"
				id="genre-selector"
				onChange={(e) => setGenre(e.target.value)}
			>
				{genreList.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>

			<label htmlFor="search-input">Cerca:</label>
			<input
				id="search-input"
				type="text"
				onChange={(event) => setSearchInput(event.target.value)}
			/>

			<ul className="movie-list">
				{filtered.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;

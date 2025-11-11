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

	//const [searchInput, setSearchInput] = useState("");
	// useEffect(() => {
	// 	console.log(searchInput);
	// }, [searchInput]);

	useEffect(() => {
		const filtered = movies.filter(
			(item) => genre === genreList[0] || item.genre === genre,
		);
		setFiltered(filtered);
	}, [genre]);

	return (
		<>
			{/* <input
				type="text"
				onChange={(event) => setSearchInput(event.target.value)}
			/> */}

			<ul className="genre-selector">
				{genreList.map((item, index) => (
					<li key={index}>
						<button type="button" onClick={() => setGenre(item)}>
							{item}
						</button>
					</li>
				))}
			</ul>

			<ul className="movie-list">
				{filtered.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;

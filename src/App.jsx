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
	const [newMovieTitle, setNewMovieTitle] = useState("");
	const [newMovieGenre, setNewMovieGenre] = useState("");

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
	}, [genre, searchInput, movies]);

	const handleAddMovie = (e) => {
		e.preventDefault();
		console.log(newMovieTitle, newMovieGenre);
		if (newMovieTitle.length > 2) {
			const newMovie = { title: newMovieTitle, genre: newMovieGenre };
			setMovies([newMovie, ...movies]);
		}
		setNewMovieTitle("");
		setNewMovieGenre("");
	};

	return (
		<>
			<h1>React Movies</h1>

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

			<form className="new-movie-form" onSubmit={(e) => handleAddMovie(e)}>
				<input
					id="new-movie-input"
					type="text"
					value={newMovieTitle}
					onChange={(e) => setNewMovieTitle(e.target.value)}
				/>
				<select
					name="genre-selector"
					id="genre-selector"
					onChange={(e) => setNewMovieGenre(e.target.value)}
					required
				>
					{genreList.map((item, index) =>
						item === "Tutti" ? (
							<option key={index} value={""}>
								{"Scegli un genere:"}
							</option>
						) : (
							<option key={index} value={item}>
								{item}
							</option>
						),
					)}
				</select>
				<button type="submit">Aggiungi</button>
			</form>

			<ul className="movie-list">
				{filtered.map((item, index) => (
					<li key={index}>
						<span className="movie-title">{item.title}</span>
						<span className="movie-genre"> ({item.genre})</span>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;

/** biome-ignore-all lint/suspicious/noArrayIndexKey: <c> */
import { useEffect, useState } from "react";
import GenreSelector from "./components/GenreSelector";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import SearchInput from "./components/SearchInput";

function App() {
	const movieList = [
		{ title: "Inception", genre: "Fantascienza" },
		{ title: "Il Padrino", genre: "Thriller" },
		{ title: "Titanic", genre: "Romantico" },
		{ title: "Batman", genre: "Azione" },
		{ title: "Interstellar", genre: "Fantascienza" },
		{ title: "Pulp Fiction", genre: "Thriller" },
	];

	const generateList = (list) => {
		const set = [];
		list.forEach((current) => {
			if (!set.includes(current.genre)) {
				set.push(current.genre);
			}
		});
		return set;
	};

	const genreList = generateList(movieList);

	const [movies, setMovies] = useState(movieList);

	const [filtered, setFiltered] = useState(movieList);
	const [genre, setGenre] = useState("");
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		const filtered = movies.filter(
			(item) =>
				item.title.toLowerCase().includes(searchInput.toLowerCase()) &&
				(genre === "" || item.genre === genre),
		);

		setFiltered(filtered);
	}, [genre, searchInput, movies]);

	return (
		<>
			<h1>React Movies</h1>

			<GenreSelector genreList={genreList} setGenre={setGenre} />

			<SearchInput setSearchInput={setSearchInput} />

			<MovieForm genreList={genreList} movies={movies} setMovies={setMovies} />

			<MovieList filtered={filtered} />
		</>
	);
}

export default App;

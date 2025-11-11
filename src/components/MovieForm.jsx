import { useState } from "react";

export default function MovieForm({ genreList, movies, setMovies }) {
	const [newMovieTitle, setNewMovieTitle] = useState("");
	const [newMovieGenre, setNewMovieGenre] = useState("");

	const handleAddMovie = (e) => {
		e.preventDefault();
		if (newMovieTitle.length > 2 && newMovieGenre !== "") {
			const newMovie = { title: newMovieTitle, genre: newMovieGenre };
			setMovies([newMovie, ...movies]);
		}
		setNewMovieTitle("");
		setNewMovieGenre("");
	};

	return (
		<form className="new-movie-form" onSubmit={(e) => handleAddMovie(e)}>
			<input
				id="new-movie-input"
				type="text"
				value={newMovieTitle}
				onChange={(e) => setNewMovieTitle(e.target.value)}
				required
			/>
			<select
				name="genre-selector"
				id="genre-selector"
				value={newMovieGenre}
				onChange={(e) => setNewMovieGenre(e.target.value)}
				required
			>
				<option value={""}>Scegli un genere:</option>

				{genreList.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<button type="submit">Aggiungi</button>
		</form>
	);
}

export default function GenreSelector({ genreList, genre, setGenre }) {
	return (
		<>
			<label htmlFor="genre-selector">Scegli un genere:</label>
			<select
				name="genre-selector"
				id="genre-selector"
				value={genre}
				onChange={(e) => setGenre(e.target.value)}
			>
				<option value={""}>Tutti</option>

				{genreList.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</>
	);
}

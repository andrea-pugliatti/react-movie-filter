export default function MovieList({ filtered }) {
	return (
		<ul className="movie-list">
			{filtered.map((item, index) => (
				<li key={index}>
					<span className="movie-title">{item.title} </span>
					<span className="movie-genre"> ({item.genre})</span>
				</li>
			))}
		</ul>
	);
}

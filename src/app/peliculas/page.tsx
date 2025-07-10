const peliculas = [
  {
    title: "El mago de Oz",
    year: 1939,
    director: "Victor Fleming",
    image: "/img/oz.jpg",
  },
  {
    title: "Las aventuras de Robin Hood",
    year: 1938,
    director: "Michael Curtiz, William Keighley",
    image: "/img/robinhood.jpg",
  },
  {
    title: "Fantasía",
    year: 1940,
    director: "Varios",
    image: "/img/fantasia.jpg",
  },
  {
    title: "Niágara",
    year: 1953,
    director: "Henry Hathaway",
    image: "/img/niagara.jpg",
  },
  {
    title: "Vértigo",
    year: 1958,
    director: "Alfred Hitchcock",
    image: "/img/vertigo.jpg",
  },
  {
    title: "Star Wars: Episodio IV",
    year: 1977,
    director: "George Lucas",
    image: "/img/starwars.jpg",
  },
];

export default function PeliculasPage() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">Películas en color</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {peliculas.map(({ title, year, director, image }) => (
          <div key={title} className="bg-white shadow rounded overflow-hidden group">
            <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{title} <span className="text-gray-500 text-sm">({year})</span></h3>
              <p className="text-sm text-gray-600 mt-1">Dir: {director}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import Movie from "./Movie";

export const metadata = {
  title: "Home",
  description: "Home page goes here",
};

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <main>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {res.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

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
      <h1 className="text-lg">Hello next 13</h1>
      <div className="grid grid-cols-4 gap-4">
      {res.results.map((movie) => (
        
          <article className="shadow p-8">
            <h1>{movie.title}</h1>
          </article>
        
      ))}
      </div>
    </main>
  );
}

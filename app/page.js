import Movie from "./Movie"

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
      <h1 className="mb-5 text-xl font-bold">Hello next 13</h1>
      <div className="grid grid-cols-4 gap-4">
        {res.results.map((props) => (
          <Movie
            {...props}
           />
        ))}
      </div>
    </main>
  );
}

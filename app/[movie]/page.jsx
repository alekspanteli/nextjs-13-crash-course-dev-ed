import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h3 className="text-lg">{res.release_date}</h3>
      <p>Runtime {res.runtime} minutes</p>
      <p className="bg-green-700 inline-block px-4 py-2 my-4 text-white rounded">Status {res.status} </p>
      <Image
          src={imagePath + res.poster_path}
          alt={movie.title}
          width={20000} 
          height={20000}
          className="w-full"
          priority
        />
    </div>
  );
}

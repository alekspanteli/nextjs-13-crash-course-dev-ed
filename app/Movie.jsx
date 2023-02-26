import Link from "next/link";
import Image from "next/image";

export default async function Movie({ movie }) {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  return (
    <article className="rounded border-2 border-slate-300 p-8">
      <h1>{movie.title}</h1>
      <h2>Release date: {movie.release_date}</h2>
      <Link href={`/asd`}>
        <Image
          src={imagePath + movie.poster_path}
          alt={movie.title}
          width={500} 
          height={500}
        />
      </Link>
      {/* <img
          src={imagePath + movie.poster_path}
          alt={movie.title}
        /> */}
    </article>
  );
}

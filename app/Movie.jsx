import Link from "next/link";
import Image from "next/image";

export default async function Movie({ title, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  return (
    <article className="rounded border-2 border-slate-300 p-8">
      <h1>{title}</h1>
      <h2>Release date: {release_date}</h2>
      <Link href={`/asd`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={500} 
          height={500}
        />
      </Link>
    </article>
  );
}

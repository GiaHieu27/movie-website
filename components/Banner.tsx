import React from 'react';
import Image from 'next/image';
import { Movie } from '../typings';
import { baseUrl } from '../constant';

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = React.useState<Movie | null>(null);

  React.useEffect(() => {
    setMovie(netflixOriginals[Math.random() * netflixOriginals.length]);
  }, [netflixOriginals]);

  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        {movie !== null ? (
          <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            alt="banner-movie"
            className="w-full h-full object-cover"
            width="500"
            height={500}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Banner;

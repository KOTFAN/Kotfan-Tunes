import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import { useGetTopChartsQuery } from "../redux/services/YoutubeMusic";

import { useGetTracksQuery } from "../redux/services/MusicTracks";

import logo from "../assets/logo.png"; //in future channge to "fallback image"

import "swiper/css";
import "swiper/css/free-mode";

const RecentlyAddedCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-bgHover py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-lg text-text text-shadow-sm mr-3">
        <span className="relative">{i + 1}</span>
      </h3>

      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg "
          src={song?.coverImage || logo}
          alt="song_img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = logo;
          }}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.slug}`}>
            <p className="text-xl font-bold text-text">{song?.title} </p>
          </Link>
          <Link to={`/artists/${song.artist}`}>
            <p className="text-sm font-bold text-gray-300">{song?.artist} </p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

const RecentlyAdded = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const { data: songsData } = useGetTracksQuery();
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const lastSongs = songsData?.data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 md:max-w-[400px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-text font-bold text-2xl ">Recently Added :</h2>
          <Link to={"/all-songs"}>
            <p className="text-gray-300 cursor-pointer text-base">See more</p>
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-1">
          {data &&
            lastSongs.map((song, i) => (
              <RecentlyAddedCard
                song={song}
                i={i}
                key={song.id}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;

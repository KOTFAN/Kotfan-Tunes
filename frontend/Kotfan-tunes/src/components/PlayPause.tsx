import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

type PlayPausePropsType = {
  song: {
    title: string;
  };
  handlePause: () => void;
  handlePlay: () => void;
  isPlaying: boolean;
  activeSong: {
    title: string;
  };
};

const PlayPause = ({
  song,
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
}: PlayPausePropsType) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
};
export default PlayPause;

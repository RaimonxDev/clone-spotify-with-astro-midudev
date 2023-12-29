import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

interface Props {
  id: string;
}
export const CardPlayButton = ({ id }: Props) => {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state);

  const isPlayingThisMusic = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingThisMusic) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song: songs[0] });
      });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-2 "
    >
      {isPlayingThisMusic ? <Pause /> : <Play />}
    </button>
  );
};

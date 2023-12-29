import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

interface Props {
  id: string;
}

const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
  usePlayerStore((state) => state);

export const CardPlayButton = ({ id }: Props) => {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-2 ">
      {isPlaying ? <Pause /> : <Play />}
    </div>
  );
};

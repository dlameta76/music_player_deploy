import styles from "./App.module.css";
import { TrackItem } from "./TrackItem";
import { useTrack } from "../dll/useTrack";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TrackList(props: Props) {
  const {tracks} = useTrack()

  if (tracks === null) {
    return <span> loading... </span>;
  }

  if (tracks.length === 0) {
    return <span> no tracks </span>;
  }

  const handleResetClick = () => {
    props.onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    props.onTrackSelect?.(trackId);
  };

  return (
    <div className={styles.tracks_block}>
      <h1 className={styles.player__title}>Music player</h1>
      <ul className={styles.player__list}>
        {tracks.map((track) => {
          const itemClass =
            track.id === props.selectedTrackId
              ? `${styles.player__item} ${styles["player__item--premium"]}`
              : styles.player__item;

          return (
            <TrackItem
              key={track.id}
              track={track}
              onSelect={handleClick}
              itemClass={itemClass}
            />
          );
        })}
      </ul>
      <button className={styles.button_reset} onClick={handleResetClick}>
        Reset selection
      </button>
    </div>
  );
}

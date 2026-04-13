import styles from "./App.module.css";
import {type TrackListItemOutput} from '../dal/api'

type Props = {
  onSelect: (trackId: string)=> void,
  itemClass: string | undefined,
  track: TrackListItemOutput
}

export function TrackItem(props: Props) {
  const handleClick = () => {
   props.onSelect(props.track.id)
  }
  return (
    <li className={props.itemClass} onClick={handleClick}>
      <div className={styles.track_title}>
        {props.track.attributes.title}
      </div>

      <div className={styles.player__wrapper}>
        <audio
          src={props.track.attributes.attachments[0].url}
          controls
          className={styles.player__audio}
        />
      </div>
    </li>
  );
}
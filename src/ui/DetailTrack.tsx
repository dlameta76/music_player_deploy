import styles from "./App.module.css";
import { useTrackDetail } from "../dll/useTrackDetail";

type Props = {
  trackId: string | null;
};

export function TrackDetails({trackId}: Props) {
 
  const {trackDetails, loading} = useTrackDetail(trackId)

  return (
    <div className={styles.details_block}>
      <h2 className={styles.player__title}>Details</h2>

      {!trackId && 'Track is not selected'}
      {loading && 'Loading...'}
      {!loading && trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? 'no lyrics'}</p>
        </div>
      )}
    </div>
  );
}
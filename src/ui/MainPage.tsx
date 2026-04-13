import { TrackList } from "./TrackList.tsx";
import { TrackDetails } from "./DetailTrack.tsx";
import { PageTittle } from "./PageTittle.tsx";
import styles from "./App.module.css";
import { useTrackSelection } from "../dll/useTrackSelection.tsx";

export function MainPage() {
  const {trackId, setTrackId} = useTrackSelection()
  
  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };

  return (
    <div>
      <PageTittle />
      <div className={styles.player}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  );
}

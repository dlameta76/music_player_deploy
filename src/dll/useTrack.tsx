import { useState, useEffect } from "react";
import { type TrackListItemOutput, getTasks } from "../dal/api";


export function useTrack() {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTasks();
        setTracks(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return { tracks };
}

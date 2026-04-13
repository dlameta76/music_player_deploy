import { useState, useEffect } from "react";
import { type TrackDetailsSource, getTrackById } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsSource | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }

    const currentTrackId = trackId;

    setLoading(true);

    async function load() {
      try {
        const data = await getTrackById(currentTrackId);
        setTrackDetails(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [trackId]);

  return { trackDetails, loading };
}

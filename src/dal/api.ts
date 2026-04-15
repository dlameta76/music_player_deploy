export type TrackDetailsSource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type GetTrackDetailsOutput = {
  data: TrackDetailsSource
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  console.log("API KEY:", apiKey);

  if (!apiKey) return undefined;

  return { "api-key": apiKey };
};

export async function getTrackById(trackId: string): Promise<TrackDetailsSource> {
  const response = await fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders()
    }
  );
  

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  const json: GetTrackDetailsOutput = await response.json();
  return json.data;
}

type TrackAttachment = {
  url: string
}

type TrackListItemOutputAttributes = {
    title: string,
    attachments: Array<TrackAttachment>
  }

export type TrackListItemOutput ={
  id: string,
  attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

export async function getTasks(): Promise<Array<TrackListItemOutput>> {
  const response = await fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: prepareHeaders()
    },
  );

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  const json: GetTrackListOutput = await response.json();
  return (json.data);
}

////////////////////////////////////////////////////////////


// import mockData from '../files_json/mockTracks.json';

// // Типы (можно оставить как есть)
// type TrackAttachment = {
//   url: string;
// };

// type TrackListItemOutputAttributes = {
//   title: string;
//   attachments: Array<TrackAttachment>;
// };

// export type TrackListItemOutput = {
//   id: string;
//   attributes: TrackListItemOutputAttributes;
// };

// export type TrackDetailsSource = {
//   id: string;
//   attributes: {
//     title: string;
//     lyrics: string | null;
//   };
// };

// // Моковая реализация getTasks

// export async function getTasks(): Promise<Array<TrackListItemOutput>> {
//   await new Promise((resolve) => setTimeout(resolve, 300));
//   return mockData.data as Array<TrackListItemOutput>;
// }

// // Моковая реализация getTrackById

// export async function getTrackById(trackId: string): Promise<TrackDetailsSource> {
//   await new Promise((resolve) => setTimeout(resolve, 300));

//   const track = mockData.data.find((item) => item.id === trackId);

//   if (!track) {
//     throw new Error(`Трек с id ${trackId} не найден в моке`);
//   }

//   return {
//     id: track.id,
//     attributes: {
//       title: track.attributes.title,
//       lyrics: track.attributes.lyrics ?? null, 
//     },
//   };
// }

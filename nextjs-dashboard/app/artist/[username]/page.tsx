// import { Suspense } from "react";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ username: string }>;
// }) {
//   const { username } = await params;
//   // Get artist information
//   const artist = await getArtist(username);

//   return (
//     <>
//       <h1>{artist.name}</h1>
//       {/* Show fallback UI while the Playlists component is loading */}
//       <Suspense fallback={<div>Loading...</div>}>
//         {/* Pass the artist ID to the Playlists component */}
//         <Playlists artistID={artist.id} />
//       </Suspense>
//     </>
//   );
// }

// async function Playlists({ artistID }: { artistID: string }) {
//   // Use the artist ID to fetch playlists
//   const playlists = await getArtistPlaylists(artistID);

//   return (
//     <ul>
//       {playlists.map((playlist) => (
//         <li key={playlist.id}>{playlist.name}</li>
//       ))}
//     </ul>
//   );
// }

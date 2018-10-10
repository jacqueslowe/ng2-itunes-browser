export class Track {
    trackId: string;
    kind: string;
    artistName: string;
    trackName: string;
    genre: string;
    artworkUrl30: string;
    artworkUrl100: string;
    previewUrl: string;

    constructor(
        TrackId: string,
        Kind: string,
        ArtistName: string,
        TrackName: string,
        Genre: string,
        ArtworkUrl30: string,
        ArtworkUrl100: string,
        PreviewUrl: string) {
        this.trackId = TrackId;
        this.artworkUrl30 = ArtworkUrl30;
        this.kind = Kind;
        this.artistName = ArtistName;
        this.trackName = TrackName;
        this.trackId = TrackId;
        this.genre = Genre;
        this.artworkUrl100 = ArtworkUrl100;
        this.previewUrl = PreviewUrl;
    }
}

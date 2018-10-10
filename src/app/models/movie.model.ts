export class Movie {
    trackId: string;
    artistName: string;
    trackName: string;
    longDescription: string;
    artworkUrl30: string;
    artworkUrl100: string;
    previewUrl: string;

    constructor(
        TrackId: string,
        ArtistName: string,
        TrackName: string,
        LongDescription: string,
        ArtworkUrl30: string,
        ArtworkUrl100: string,
        PreviewUrl: string) {
        this.trackId = TrackId;
        this.artistName = ArtistName;
        this.trackName = TrackName;
        this.longDescription = LongDescription;
        this.artworkUrl30 = ArtworkUrl30;
        this.artworkUrl100 = ArtworkUrl100;
        this.previewUrl = PreviewUrl;
    }
}

import React from 'react';
import data from './../data.json';

console.log(data);

export const AlbumList = () => {
    return (
        <div className="artist-list-container">
            {
                data.albums.items.map(album => 
                    <div className="artist-container" key={album.id}>
                        <div className="image-container">
                            <img src={album.images[1].url} alt={album.name} />
                            <div className="inside-image">
                                <img src="./icons/play.svg" />
                            </div>
                        </div>
                        <p className="album-title">{album.name}</p>
                        <p className="artist-list">{album.artists.map(artist => 
                            <span key={artist.id} className="artist">{artist.name}</span>
                        )}</p>
                    </div>
                )
            }
        </div>
    );
};
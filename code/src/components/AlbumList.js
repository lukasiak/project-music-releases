import React from 'react';
import data from './../data.json';

import { Album } from './Album';

console.log(data);

export const AlbumList = () => {
    return (
        <div className="album-list-container">
            {
                data.albums.items.map(album => 
                    <Album 
                        key={album.id} 
                        name={album.name} 
                        link={album.external_urls.spotify} 
                        image={album.images[1].url} 
                        artists={album.artists} />
                )
            }
        </div>
    );
};
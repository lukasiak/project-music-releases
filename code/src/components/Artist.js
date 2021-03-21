import React from 'react';

export const Artist = (props) => {
    return (
        <>
            {
                props.artists.map((artist) => {
                    return (
                        <a key={artist.id} className="artist" href={artist.href}>
                            {artist.name}
                        </a>
                    )
                })
            }
        </>
    )
}
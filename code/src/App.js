import React from 'react'

import { PageTitle } from './components/PageTitle';
import { AlbumList } from './components/AlbumList';

export const App = () => {
    return (
        <div className="container">
            <PageTitle />
            <hr />
            <AlbumList />
        </div>
    )
}

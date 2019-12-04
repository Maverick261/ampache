import React from 'react';
import useContextMenu from 'react-use-context-menu';
import { Playlist } from '../../logic/Playlist';
import { Link } from 'react-router-dom';

interface PlaylistRowProps {
    playlist: Playlist;
}

const PlaylistRow: React.FC<PlaylistRowProps> = (props: PlaylistRowProps) => {
    const [
        bindMenu,
        bindMenuItems,
        useContextTrigger,
        { setVisible, setCoords }
    ] = useContextMenu();
    const [bindTrigger] = useContextTrigger();

    const showContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCoords(0, 0);
        setVisible(true);
    };

    return (
        <>
            <Link
                className='playlistRow'
                to={`/playlist/${props.playlist.id}`}
                {...bindTrigger}
            >
                <span
                    className='verticleMenu'
                    onClick={(e) => {
                        showContextMenu(e);
                    }}
                />
                <span className='name'>{props.playlist.name}</span>
                <span className='itemCount'>{props.playlist.items}</span>
                <span className='owner'>{props.playlist.owner}</span>
            </Link>
            <div {...bindMenu} className='contextMenu'>
                <div
                    {...bindMenuItems}
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    Start
                </div>
            </div>
        </>
    );
};

export default PlaylistRow;

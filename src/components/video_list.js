import React from 'react';
import SearchBar from "./search_bar";

const VideoList = (props) => {
    return (
        <div className="col-md-4 list-group">
            {props.videos.length}
        </div>
    );
};

export default VideoList;
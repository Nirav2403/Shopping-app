import React from 'react';
import '../style/Empty.css';

const Empty = ({emptyImage,emptyContent}) => {
    return (
        <div className="empty-container">
            <img src={emptyImage} alt="" className="empty-image" />
            <div className="empty-content"><h3>{emptyContent}</h3></div>
        </div>
    )
}

export default Empty;
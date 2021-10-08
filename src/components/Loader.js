import React from 'react';
import '../style/Loader.css'

const Loader = () => {
    return (
        <div className="loader-container">
            
                <div className="loader-circle"></div>
                <div className="loader-square"></div>
                <div id="loading-icon"><i className="fas fa-cogs" id="gear-icon"></i><span className="loading-title">Loading...</span></div>
        
        </div>
    )
}

export default Loader;
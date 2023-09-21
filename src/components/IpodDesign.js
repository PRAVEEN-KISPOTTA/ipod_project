import React from "react";
import "../App.css"

class IpodDesign extends React.Component{
    render(){
        return(
            <div className="body-container">
                <h1>Spotify</h1>
                <div className="main-container">
                    <div className="display-container"></div>

                    <div className="btn-container">

                        <div className="top-btn"></div>
                        <div className="right-btn"></div>
                        <div className="bottom-btn"></div>
                        <div className="left-btn"></div>
                        <div className="center-btn"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpodDesign;
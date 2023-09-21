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

                        <div className="top-btn">
                        <b>MENU</b>
                        </div>

                        <div className="left-btn">
                            <img className="btn-icon" src="https://cdn-icons-png.flaticon.com/128/39/39712.png"></img>
                        </div>

                        <div className="center-btn">
                        
                        </div>

                        <div className="right-btn">
                            <img className="btn-icon" src="https://cdn-icons-png.flaticon.com/128/660/660276.png"></img>
                        </div>
                        
                        <div className="bottom-btn">
                        <img className="btn-icon" src="https://cdn-icons-png.flaticon.com/128/724/724956.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpodDesign;
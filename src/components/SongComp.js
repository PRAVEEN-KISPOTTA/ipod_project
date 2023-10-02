import { Component } from "react";
import styled from "styled-components";
import song from "./Song/abc.mp3";

class SongComp extends Component{

    render(){
        return(
            <div>
                <h2 style={imgContainer}>𝘓𝘰𝘧𝘺 𝘚𝘰𝘯𝘨...</h2>
                <InnerContainer>
                    <audio style={audio} controls>
                        <source src={song} type="audio/mpeg"></source>
                    </audio>
                </InnerContainer>
            </div>
        )
    }
}

export default SongComp;

const InnerContainer = styled.div`
background-image: url("https://w0.peakpx.com/wallpaper/327/1001/HD-wallpaper-music-alone-badboy-cartoon-iphone-love-music-on-night-pubg-thumbnail.jpg");
background-position: center;
background-size: cover;
height: 35vh;
border-radius: 9px;
display: flex;
flex-direction: column-reverse;
`

const imgContainer= {
    position: "absolute",
    // transform: "translateX(-50%)",
    // left: "50%",
    color: "whiteSmoke"    
}

const audio = {
    height: "15px",
    width: "100%"
}
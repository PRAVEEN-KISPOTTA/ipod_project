import { Component } from "react";
import styled from "styled-components";

class HomeComp extends Component{
    render(){
        return(
            <InnerContainer style={backgroundImg}>
                <MenuContainer>
                    <ListItem>
                        <Items>Song</Items>
                        <Items>Album</Items>
                        <Items>Artist</Items>
                        <Items>Playlist</Items>
                    </ListItem>
                </MenuContainer>
            </InnerContainer>
        )
    }
}

export default HomeComp;

const InnerContainer = styled.div`
// background-color: lightgray;
height: 100%;
border-radius: 8px;
display: flex;
flex-direction: column-;
justify-content: start;

`

const MenuContainer = styled.div`
border: 1px solid black;
border-radius: 8px 0 0 8px;
width: 50%;
background-color: white;
opacity: 0.8
`

const ListItem = styled.div`

`
const Items = styled.div`
margin-top: 20px;
`;

const backgroundImg = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg")',
    // height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover"
}
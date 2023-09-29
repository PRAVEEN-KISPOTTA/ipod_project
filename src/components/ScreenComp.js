import { Component } from "react";
import styled from "styled-components";

class ScreenComp extends Component{
    render(){
        return(
            <InnerContainer>
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

export default ScreenComp;

const InnerContainer = styled.div`
background-color: lightgray;
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
`

const ListItem = styled.div`

`
const Items = styled.div`
margin-top: 20px;
`
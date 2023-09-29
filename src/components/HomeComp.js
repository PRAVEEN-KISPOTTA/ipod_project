import { Component } from "react";
import ScreenComp from "./ScreenComp";

class HomeComp extends Component{
    render(){
        return(
            <div style={{...styles.bodyContainer}}>
                <h1 style={{...styles.heading}}>Spotify</h1>
                <div style={{...styles.mainContainer}} >
                    <div style={{...styles.displayContainer}}><ScreenComp /></div>

                    <div style={{...styles.btnContainer}} id="parentWheel" onMouseOver={this.props.wheelGesture}>

                        <div style={{...styles.topBtn, ...styles.commonBtn}}>
                        <b>MENU</b>
                        </div>

                        <div style={{...styles.leftBtn, ...styles.commonBtn}}>
                            <img alt="" style={{...styles.btnIcon}} src="https://cdn-icons-png.flaticon.com/128/39/39712.png"></img>
                        </div>

                        <div style={{...styles.centerBtn, ...styles.commonBtn}}>
                        
                        </div>

                        <div style={{...styles.rightBtn, ...styles.commonBtn}} onClick={this.props.rightClick}>
                            <img alt="" style={{...styles.btnIcon}} src="https://cdn-icons-png.flaticon.com/128/660/660276.png"></img>
                        </div>
                        
                        <div style={{...styles.bottomBtn, ...styles.commonBtn}}>
                        <img alt="" style={{...styles.btnIcon}} src="https://cdn-icons-png.flaticon.com/128/724/724956.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const styles = {
    bodyContainer: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    mainContainer: {
        display: 'flex',
        height: '70%',
        width: '20%',
        border: '2px solid blue',
        borderRadius: '25px',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow:'lawngreen'
    },
    
    displayContainer: {
        marginTop: '20px',
        height: '50%',
        width: '90%',
        border: '2px solid red',
        borderRadius: '10px'
    },
    
    /* button container */
    
    btnContainer: {
        display: 'flex',
        /* backgroundColor:center, */
        marginTop: '30px',
        height: '35%',
        width: '60%',
        border: '2px solid orange',
        borderRadius: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative' /* Add position: relative to the container */
    },
    
     commonBtn: {
        border: '1px solid cyan',
        height: '25%',
        width: '25%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    
    /* Style for topBtn (position it at the topCenter of the circle) */
    topBtn: {
        position: 'absolute', /* Add absolute positioning */
        top: '0', /* Position it at the top */
        left: '50%', /* Center it horizontally */
        transform: 'translateX(-50%)' /* Adjust for centering */
    },
    
    bottomBtn: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    
    
    /* button icon */
    btnIcon: {
        height: '50%'
    },
    
    centerBtn: {
        backgroundColor: 'lightgray',
        height: '45%',
        width: '45%'
    },
    
    heading: {
        position: 'absolute',
        top: '0',
        left: '1%',
        border: '2px solid black',
        backgroundColor: 'green',
        color: 'white',
        padding: '5px'
    }
}

export default HomeComp;
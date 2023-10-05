import React from "react";
import ZingTouch from 'zingtouch';
import ScreenComp from "./ScreenComp";

class Ipod extends React.Component{
    constructor(){
        super();

        this.state = {
            count: 0,
            activeItems: 'song',
            activePage: "home",
            enter: 0
        }
    }

    wheelControl = () =>{

        if(!this.state.isTrue){
            var parentElement = document.getElementById('parentWheel');
        var activeRegion = ZingTouch.Region(parentElement);

        var sensitivity = 0;
        var self = this;
        self.state.enter += 1;

            // var childElement = document.getElementById('childWheel');
        activeRegion.bind(parentElement, 'rotate', (event)=>{

            // let inc = self.state.count+1;
            var newAngle = event.detail.distanceFromLast;
            console.log("new angle - ", newAngle);
            

            if(newAngle < 0){
                console.log("sensitivity - ", sensitivity);
                sensitivity++;

                if(sensitivity === 15){
                    console.log("sensitivity is 0 (-)")
                    sensitivity = 0;

                    if(self.state.activeItems === "song"){
                        self.setState({
                            activeItems: "playlist"
                        })
                    }
                    else if(self.state.activeItems === "playlist"){
                        self.setState({
                            activeItems: "artist"
                        })
                    }
                    else if(self.state.activeItems === "artist"){
                        self.setState({
                            activeItems: "album"
                        })
                    }
                    else if(self.state.activeItems === "album"){
                        self.setState({
                            activeItems: "song"
                        })
                    }
                }
                
            }
            else if(newAngle > 0){
                console.log("sensitivity + ", sensitivity);
                sensitivity++;

                if(sensitivity === 15){
                    console.log("sensitivity is 0 (+)");

                    sensitivity = 0;
                    if(self.state.activeItems === "song"){
                        self.setState({
                            activeItems: "album"
                        })
                    }
                    else if(self.state.activeItems === "album"){
                        self.setState({
                            activeItems: "artist"
                        })
                    }
                    else if(self.state.activeItems === "artist"){
                        self.setState({
                            activeItems: "playlist"
                        })
                    }
                    else if(self.state.activeItems === "playlist"){
                        self.setState({
                            activeItems: "song"
                        })
                        console.log(self.state.activeItems)
                    }
                }
            }

        });
        


        console.log("not allowed to enter", self.state.count);
        }
    }


    render(){
        return(
            <div>
                <ScreenComp wheelGesture={this.wheelControl}
                            activeItem={this.state.activeItems}
                            activePage={this.state.activePage}
                />
            </div>
        )
    }
}

export default Ipod;
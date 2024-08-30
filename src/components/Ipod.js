import React from "react";
import ZingTouch from 'zingtouch';
import ScreenComp from "./ScreenComp";

class Ipod extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            activeItems: 'song',
            activePage: "home",
            sensitivity: 0
        };
    }

    componentDidMount() {
        this.wheelControl();
    }

    wheelControl = () => {
        const parentElement = document.getElementById('parentWheel');
        if (!parentElement) return;

        const activeRegion = ZingTouch.Region(parentElement);
        const self = this;

        activeRegion.bind(parentElement, 'rotate', (event) => {
            const newAngle = event.detail.distanceFromLast;
            let { sensitivity, activeItems } = self.state;

            if (newAngle < 0) {
                sensitivity++;

                if (sensitivity === 15) {
                    sensitivity = 0;
                    activeItems = this.getNextActiveItem(activeItems, 'decrement');
                }
            } else if (newAngle > 0) {
                sensitivity++;
                

                if (sensitivity === 15) {
                    sensitivity = 0;
                    activeItems = this.getNextActiveItem(activeItems, 'increment');
                }
            }

            self.setState({ sensitivity, activeItems });
        });
    }

    getNextActiveItem = (current, direction) => {
        const items = ['song', 'playlist', 'artist', 'album'];
        const index = items.indexOf(current);

        if (direction === 'increment') {
            return items[(index + 1) % items.length];
        } else {
            return items[(index - 1 + items.length) % items.length];
        }
    }

    render() {
        return (
            <div>
                <ScreenComp 
                    wheelGesture={this.wheelControl}
                    activeItem={this.state.activeItems}
                    activePage={this.state.activePage}
                />
            </div>
        );
    }
}

export default Ipod;

import React, { Component } from "react";

import VisibilitySensor from "react-visibility-sensor";
// Import react-circular-progressbar module and styles
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// const value = 34;


class Radial extends Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    // console.log('DATAFROMPARENT', this);
    const value = this.props.dataFromParent.currentLvlXPPerc;
    // const Radial = () => (
      return(
      // <div style={{ padding: "40px 40px 40px 40px" }}>
        <Example>
          <VisibilitySensor>
          {({ isVisible }) => {
          const percentage = isVisible ? value : 0;
          return (<CircularProgressbarWithChildren
            value={percentage}
            text={`${percentage}%`}
            // stroke="url(#gradient)"
            // background="linear-gradient(red , yellow)"
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                strokeWidth: '6.5px',
                // Path color
                stroke: "#F3B42B",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                // Customize transition animation
                transition: 'stroke-dashoffset 0.5s ease 0s',
                // Rotate the path
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
                // background:'-webkit-linear-gradient(left, transparent 0%,#fff 50%,transparent 100%)'
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                strokeWidth: '2px',
                // Trail color
                stroke: '#d6d6d6',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              // Customize the text
              text: {
                // Text color
                fill: '#f88',
                // Text size
                fontSize: '16px',
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: '#3e98c7',
              },
            }}
          >
            
            
          
            <div 
            className="d-flex flex-column align-items-center justify-content-center percentage-background blue-l"
            >
              <label 
              style={{paddingTop: "0.1rem", height:'20px'}} 
              className="subtitle-1">
                XP
              </label>
              <h4 style={{height:'30px'}}
              className="font-weight-bold blue-d">
                {this.props.dataFromParent.xp}
              </h4>
              <label style={{paddingTop: "0.2rem", height:'8px'}} className="caption">
                /
              </label>    
              <h6 style={{paddingTop: "0.35rem"}}
               className="font-weight-normal">
                {this.props.dataFromParent.currentLvlMax}
                </h6>
            </div>
          </CircularProgressbarWithChildren>);
          
          }}
          </VisibilitySensor>
          
        </Example>
      // </div>
    );
    }


}





function Example(props) {
  return (
    <div className="mt-4 mb-3" style={{ width: 200 }}>{props.children}</div>
  );
}

export default Radial;

import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import badgeEntregas from '../../imgs/pages/badge-entregas.png'
import badgeLocais from '../../imgs/pages/badge-volume.png'
import badgeBomCondutor from '../../imgs/pages/badge-distancia.png'

 
// list of items
const badgesViagens = [
  { url: badgeEntregas },
  { url: badgeLocais },
  { url: badgeBomCondutor }
];
  
// All items component
export const Badges = (badgesViagens) =>
badgesViagens.map(el => {

    return <img className="badges-md" key={el.url}  src={el.url} alt=""/>;
  });
 

class Message extends Component {

  constructor(props) {
    super(props);
    // call it again if items count changes
    this.BadgesViagens = Badges(badgesViagens);
  }
 

  render() {

    // Create menu from items
    const badgesViagens = this.BadgesViagens;

    return (
      <div>
       <ScrollMenu
          data={badgesViagens}
        /> 
      </div>
    )
  }
}

export default Message

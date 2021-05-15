import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "HATS",
          imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl:'/hats'
        },
        {
          id: 2,
          title: "JACKETS",
          imageUrl:'https://i.ibb.co/px2tCc3/jackets.jpg',
          // linkUrl:'/jackets'
        },
        {
          id: 3,
          title: "SNEAKERS",
          imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.jpg',
          // linkUrl:'/sneakers'
        },
        {
          id: 4,
          title: "WOMEN",
          imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
          size:'large',
          // linkUrl:'/women'
        },
        {
          id: 5,
          title: "MEN",
          imageUrl:'https://i.ibb.co/R70vBrQ/men.jpg',
           size:'large',
          //  linkUrl:'/men'
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id,...sectionProps})=>(
            <MenuItem key={id}{...sectionProps}/>
        ))}
      </div>
    );
  }
}

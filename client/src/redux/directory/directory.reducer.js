const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
       linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.jpg",
      linkUrl:'shop/jackets'
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.jpg",
      linkUrl:'shop/sneakers'
    },
    {
      id: 4,
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl:'shop/womens'
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.jpg",
      size: "large",
       linkUrl:'shop/mens'
    },
  ],
};

const directoryReducer=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state
    }
}


export default directoryReducer
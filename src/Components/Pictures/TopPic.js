import React from 'react';
import {Parallax} from 'react-parallax'

let image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbHVNbKDjnN-rM7-sm602bUOXdt2IpdHWah8LV-EWq2L4j4JOQA'

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function TopPic(){
  return(
  <div className="ParaPic">
    <Parallax bgImage={image1} strength= {-400}>
      <div style={{ height: 550 }}>
      </div>
    </Parallax>
  
  </div>
  )
}

export default TopPic
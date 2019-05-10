import React from 'react';
import {Parallax} from 'react-parallax'
import background1 from './background2.jpg'

function TopPic(){
  return(
  <div className="ParaPic">
    <Parallax bgImage={background1} strength= {-250}>
      <div style={{ height: 450 }}>
      </div>
    </Parallax>
  
  </div>
  )
}

export default TopPic
import React from 'react';
import {Parallax} from 'react-parallax'
import background1 from './background1.jpg'

function TopPic(){
  return(
  <div className="ParaPic" id='midpic'>
    <Parallax bgImage={background1} strength= {-250}>
      <div style={{ height: 550 }}>
      </div>
    </Parallax>
  
  </div>
  )
}

export default TopPic
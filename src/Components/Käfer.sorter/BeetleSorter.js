import React from 'react';
import AddBeetle from './AddField'

function BeetleSorter() {
  return (
    <div className="BeetleSorter">
      <body>
        <div className='titleCard'>Beetle Sorter Description</div>
        <AddBeetle/>
        <div className="beetleSorter">Beetle Sorter goes here
          <div className="bsBody">Yo</div>  
        </div>
      </body>
    </div>
  );
}

export default BeetleSorter;

import React from 'react'
import './Timeline.css'

const Timeline = ({data, type}) => {
  
  const infokey = (type == 'education')?'course':'title'

  return (
    <>
      {data.map((item, ind)=>(
        <div key={ind} className='timeline-item'> 
          <div className="timeline-item-desc text-container ">
            <span className='tag timeline'>{item.start} - {item.end}</span>
            <p>{item[infokey]}</p>
            <p className='highlight'>{item.institute}</p>
          </div>
          {ind !== data.length-1 ? <div className="timeline-item-style"></div> : ''}
        </div>
      ))}
    </>
  )
}

export default Timeline;
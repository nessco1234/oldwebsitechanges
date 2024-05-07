import React from 'react'

const VedioComponent = (props) => {
  return (
    <>
        <iframe width="370" height="220" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen="" className='vediocontent'></iframe>
    </>
  )
}

export default VedioComponent

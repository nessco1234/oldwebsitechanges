import React from 'react'
import Presence from '../Components/Home/Presence'
import IntroMachine from '../Components/MachineComponent/IntroMachine'
import '../Styles/MachineComponent.css'
import DescriptionMachine from '../Components/MachineComponent/DescriptionMachine'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
const MachineComponent = (props) => {
    const data=props.data
  return (
    <>
        <IntroMachine heading={data.Heading} route={data.Route} description={data.Description}  />
        <DescriptionMachine data={data}/>
        <MachineSpecs labels={data.MachineSpecsLabels} data={data.MachineSpecs}/>
        <RelatedProducts data={data.RelatedProducts}/>
        <Presence />
    </>
  )
}

export default MachineComponent

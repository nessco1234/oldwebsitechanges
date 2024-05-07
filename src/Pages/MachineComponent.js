import React from 'react'
import Presence from '../Components/Home/Presence'
import IntroMachine from '../Components/MachineComponent/IntroMachine'
import '../Styles/MachineComponent.css'
import DescriptionMachine from '../Components/MachineComponent/DescriptionMachine'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import MachineSpecs2 from '../Components/MachineComponent/MachineSpecs2'
import MultiTable from '../Components/MachineComponent/MultiTable'
const MachineComponent = (props) => {
  const data = props.data
  return (
    <>
      <IntroMachine heading={data.Heading} route={data.Route} description={data.Description} />
      <DescriptionMachine data={data} />
      {
        !data.ExpandedTable ?
          <MachineSpecs labels={data.MachineSpecsLabels} data={data.MachineSpecs} /> :
          <MachineSpecs2 labels={data.MachineSpecsLabels} data={data.MachineSpecs} />
      }
      {
        data.MultipleTable && 
        <MultiTable labels={data.MultipleLabels} data={data.MultiTabelData}/>
      }
      <RelatedProducts data={data.RelatedProducts} />
      <Presence />
    </>
  )
}

export default MachineComponent

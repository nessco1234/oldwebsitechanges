import React from 'react'
import Presence from '../Components/Home/Presence'
import IntroMachine from '../Components/MachineComponent/IntroMachine'
import '../Styles/MachineComponent.css'
import DescriptionMachine from '../Components/MachineComponent/DescriptionMachine'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import MachineSpecs2 from '../Components/MachineComponent/MachineSpecs2'
import MultiTable from '../Components/MachineComponent/MultiTable'
import MachineSpecs3 from '../Components/MachineComponent/MachineSpecs3'
import { Helmet } from 'react-helmet'
const MachineComponent = (props) => {
  const data = props.data
  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" href="/192x192.ico" />
        <link rel="icon" type="image/x-icon" href="/192x192.ico" />
        <title>{data.seotitle}</title>
        {
          data.seometa.map(e => (
            <meta name={e.name} content={e.content} />
          ))
        }
        <link rel={data.seolink.name} href={data.seolink.url} />
      </Helmet>
      <IntroMachine heading={data.Heading} route={data.Route} description={data.Description} />
      <DescriptionMachine down={props.down} setdown={props.setdown} data={data} imgurl={props.imgurl} img2url={props.img2url} img3url={props.img3url} />
      {
        !data.ExpandedTable && !data.newTable &&
        <MachineSpecs labels={data.MachineSpecsLabels} data={data.MachineSpecs} Heading={data.Table1Heading} />
      }
      {
        data.newTable &&
        <MachineSpecs3 labels={data.MachineSpecsLabels} data={data.Table1Specs} Heading={data.Table2Heading} />
      }
      {
        data.newTable &&
        <MachineSpecs3 labels={data.MachineSpecsLabels} data={data.Table2Specs} Heading={data.Table3Heading} />
      }
      {
        data.newTable &&
        <MachineSpecs3 labels={data.MachineSpecsLabels} data={data.Table3Specs} Heading={data.Table3Heading} />
      }
      {
        data.newTable &&
        <MachineSpecs3 labels={data.MachineSpecsLabels} data={data.Table4Specs} Heading={data.Table4Heading} />
      }
      {
        data.ExpandedTable &&
        <MachineSpecs2 labels={data.MachineSpecsLabels} data={data.MachineSpecs} />
      }
      {
        data.MultipleTable &&
        <MultiTable labels={data.MultipleLabels} data={data.MultiTabelData} />
      }
      <RelatedProducts data={data.RelatedProducts} />
      <Presence />
    </>
  )
}

export default MachineComponent

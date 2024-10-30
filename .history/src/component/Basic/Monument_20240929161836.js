import React from 'react'
import Restaurant from './Restaurant'

const Monument = ({monuData}) => {
  return (
    {
      monuData.map((curElement)=>{
        return (
          <div className="card" key ={index}>
          <div className="container">
            <span className="card-title"><b>{area.Monuments}</b></span>
            <p className="description">{area.Description}</p>
            <img  alt="" src={area.Image} width="100%" height="50%"/>
          </div>
        <div>
        </div>
        </div>
        )
      })
    }
    <div>
      <section className="section-div">
    {
        monuData.map((area,index) =>{
        return (

        )})
        }
     </section>   
    </div>
  )
}

export default Monument

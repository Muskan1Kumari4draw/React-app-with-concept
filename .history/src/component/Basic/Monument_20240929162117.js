import React from 'react'


const Monument = ({monuData}) => {
  return (
    {
      monuData.map((curElement)=>{
        <section className="section-div">
        return (

          <div className="card" key ={curElement.Id}>
          <div className="container">
            <span className="card-title"><b>{area.Monuments}</b></span>
            <p className="description">{area.Description}</p>
            <img  alt="" src={area.Image} width="100%" height="50%"/>
          </div>
        <div>
        </div>
        </div>
        )
        </section>   
      })
    }
   
 
  
  )
}

export default Monument

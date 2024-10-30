import React from 'react'
const nav = [
  {
    "Id":1,
    "city": "Mumbai",
    "Monuments": "Gateway of India",
    "Description": "The Gateway of India is a 26-meter (85-foot) tall arch monument in Mumbai, India that was built to commemorate the visit of King George V and Queen Mary in 1911",
    "Image":"/Image/red fort.jpeg"
  },
  {
    "Id":2,
    "city": "Mumbai",
    "Monuments": "Gateway of India",
    "Description": "The Gateway of India is a 26-meter (85-foot) tall arch monument in Mumbai, India that was built to commemorate the visit of King George V and Queen Mary in 1911",
    "Image":"/Image/red fort.jpeg"
  },
  {
    "Id":3,
    "city": "Mumbai",
    "Monuments": "heelo ",
    "Description": "The Gateway of India is a 26-meter (85-foot) tall arch monument in Mumbai, India that was built to commemorate the visit of King George V and Queen Mary in 1911",
    "Image":"/Image/red fort.jpeg"
  },
  {
    "Id":4,
    "city": "Mumbai",
    "Monuments": "Gateway of India",
    "Description": "The Gateway of India is a 26-meter (85-foot) tall arch monument in Mumbai, India that was built to commemorate the visit of King George V and Queen Mary in 1911",
    "Image":"/Image/red fort.jpeg"
  },
  {
    "Id":5,
    "city": "Delhi",
    "Monuments": "Red Fort",
    "Description": "Red Fort Known for its architectural splendor, it is primarily constructed from red sandstone and marble, hence its name. The fort's construction began in 1639 and took nearly a decade. Originally known as 'Qila-i-Mubarak', it was later renamed Red Fort.",
     "Image":"/Image/gateway of india.jpeg"
  },
  {
    "Id":6,
    "city": "Delhi",
    "Monuments": "Red Fort",
    "Description": "Red Fort Known for its architectural splendor, it is primarily constructed from red sandstone and marble, hence its name. The fort's construction began in 1639 and took nearly a decade. Originally known as 'Qila-i-Mubarak', it was later renamed Red Fort.",
     "Image":"/Image/gateway of india.jpeg"
  },
  {
    "Id":7,
    "city": "Delhi",
    "Monuments": "Red Fort",
    "Description": "Red Fort Known for its architectural splendor, it is primarily constructed from red sandstone and marble, hence its name. The fort's construction began in 1639 and took nearly a decade. Originally known as 'Qila-i-Mubarak', it was later renamed Red Fort.",
     "Image":"/Image/gateway of india.jpeg"
  },
  {
    "Id":8,
    "city": "Delhi",
    "Monuments": "Red Fort",
    "Description": "Red Fort Known for its architectural splendor, it is primarily constructed from red sandstone and marble, hence its name. The fort's construction began in 1639 and took nearly a decade. Originally known as 'Qila-i-Mubarak', it was later renamed Red Fort.",
     "Image":"/Image/gateway of india.jpeg"
  }
]
const navLink = [
{  link :"Mumbai", id:1 },
{  link :"Delhi" , id:2 }
]
const Dropdown = () => {
  const handleClick= (item)=>{
if(item.link === 'Mumbai'){
  return(
    nav.filter(monument => monument.city === 'Mumbai').map((monument, index) => (
      <div key={index} className=' .card '>
        <h2>{monument.Monuments}</h2>
        <img src={monument.Image} alt={item.Monuments} />
        <p>{monument.Description}</p>
      </div>
    ))
  )
}else {
    return (
      nav.filter(monument => monument.city === 'Delhi').map((monument, index) => (
        <div key={index} className='card'>
          <h2>{monument.Monuments}</h2>
          <img src={monument.Image} alt={monument.Monuments} />
          <p>{monument.Description}</p>
        </div>
      ))
    );
  }
};
  return (
    <div>
      <h1>Select a City</h1>

      <ul>
        {navLink.map(item => (
          <li key={item.Id}>
            <button onClick={handleClick(item)}>
              {item.link}
            </button>
          </li>
        ))}
      </ul>
    
   
     
    </div>
  )
}

export default Dropdown

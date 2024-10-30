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
const Dropdown = () => {
  return (
    <div>
      <select placeholder="Tourist" >
        <option value="Mumbai" ><a href="/mumbai">Mumbai</a></option>
        <option value="Delhi"><a href="/delhi">Delhi</a></option>
        <option value="Patna"><a href="/patna">Patna</a></option>

      </select>
      {
        nav.filter(item => item.city === 'Mumbai').map((item, index) => (
          <div key={index}>
            <h2>{item.Monuments}</h2>
            <img src={item.Image} alt={item.Monuments} />
            <p>{item.Description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Dropdown

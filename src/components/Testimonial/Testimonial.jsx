import './testimonial.scss'

function Testimonial() {

  const data = [
    {
      id: "1",
      icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
      title: "ss",
      img: "assets/3600_15-30449-3_Soft.jpg",
      desc: "dfgwfbnadjkfbna",
      name: "fahad",
      deg: "ceo",
      
    },
    {
        id: "2",
        icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
        title: "bs",
        img: "assets/FAHADUL_HOQ.jpg",
        desc: "dfgwfbnadjkfbna",
        name: "Fahim",
        deg: "MD",
        feature: true
    },
    {
        id: "3",
        icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
        title: "as",
        img: "assets/1421147816634_Fotor.jpg",
        desc: "dfgwfbnadjkfbna",
        name: "toma",
        deg: "cto"
    },          
  ]

  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
        <div className="container">

          {
            data.map((d) => (
              <div className={d.feature ? "card featured" : "card" } >
                  
                  <div className="top">
                    <img className='left' src={d.icon} alt="" />
                    <img className='user' src={d.img} alt="" />
                    <img className='right' src={d.icon} alt="" />
                  </div>

                  <div className='center'>
                      {d.desc}
                  </div>
                  <div className='bottom'>
                    <h3>{d.name}</h3>
                    <h4>{d.deg}</h4>
                  </div>

              </div>
            ))
          }
           
        </div>
    </div>
  )
}

export default Testimonial
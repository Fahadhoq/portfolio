import './works.scss'
import {useState} from "react"

function Works() {
 const [currentSlider,setCurrentSlider] =useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
      title: "1111111111",
      img: "assets/3600_15-30449-3_Soft.jpg",
      desc: "dfgwfbnadjkfbna"
    },
    {
        id: "2",
        icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
        title: "2222222222",
        img: "assets/FAHADUL_HOQ.jpg",
        desc: "dfgwfbnadjkfbna"
    },
    {
        id: "3",
        icon: "assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg",
        title: "33333333",
        img: "assets/1421147816634_Fotor.jpg",
        desc: "dfgwfbnadjkfbna"
    },          
  ]

  const handleClick = (way) => {
    
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) :
                     setCurrentSlider(currentSlider < data.length -1 ? currentSlider+1 : 0)
    
  }

  // var counter = 0;
  // setInterval(() => {
  //   if(counter > 2){
  //     counter = 0;
  //   }
  //   setCurrentSlider(counter)
  //   counter++;
  //   console.log("counter",counter)
  // }, 5000);

  return (
    <div className='works' id='works'>
      <div className='slider' style={{transform: `translate(-${currentSlider *100}vw)`}}>
        {
          data.map((d)=>(
            <div className='container'>
              <div className='item'>
              
                <div className='left'>
                  <div className='leftContainer'>
                        <div className='imgContainer'>
                          <img src={d.icon} alt="" />
                        </div>
                        <h2>{d.title}</h2>
                        <p>
                          {d.desc}
                        </p>
                        <span>Project</span>
                  </div>
                </div>
                
                <div className='right'>
                    <img src={d.img} alt=''/>
                </div>
                
              </div>
            </div>
          ))
        }
    
      </div>

      <img src='assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg' className='arrow left' alt="" onClick={()=>handleClick('left')} />  
      <img src='assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg' className='arrow right' alt="" onClick={()=>handleClick()} />  

    </div>
  )
}

export default Works
import './intro.scss'
// import {init} from 'ityped'
import {useEffect ,useRef} from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
// import "react-simple-typewriter/dist/index.css"

function Intro() {

  // const textRef = useRef();

  // useEffect(()=>{
  //     init(textRef.current, {
  //       showCursor: true,
  //       backDelay: 1500,
  //       backSpeed: 60,
  //       strings: ["Laravel", "React"],
  //     });
  // },[]);

  const [textRef] = useTypewriter({
    words: ["Laravel", "React"],
    loop: {}
  })



  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/3600_15-30449-3_Soft.jpg" alt=''/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>MD. FAHADUL HOQ</h1>
           <h3>Junior Software Engineer <span>{textRef}<Cursor /></span></h3> 

          {/* <h3>Junior Software Engineer 
            <span>
               <Typewriter
                  loop
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={['Laravel','Recat']}
               />
            </span>
          </h3> */}

        </div>
        <a className="#portfolio">
             <img src="assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg" alt=''/>
        </a>
      </div>
    </div>
  )
}

export default Intro
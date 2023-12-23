import './portfolio.scss'
import {useEffect, useState} from "react"
import PortfolioList from "../PortfolioList/PortfolioList"
import {phpPortfolio,laravelPortfolio,reactPortfolio,officePortfolio} from "../../data"

function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(()=>{
      switch (selected){
        case "php":
          setData(phpPortfolio);
          break;
        case "laravel":
          setData(laravelPortfolio);
          break;
        case "react":
          setData(reactPortfolio);
          break;  
        case "office":
          setData(officePortfolio);
          break; 
      default:
        setData(phpPortfolio); 
      }
  },[selected])

  const list = [
      {
        id: "php",
        title: "PHP"
      },
      {
        id: "laravel",
        title: "LARAVEL"
      },
      {
        id: "react",
        title: "REACT"
      },
      {
        id: "office",
        title: "OFFICE"
      }

  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1> Portfolio</h1>
        <ul style={{fontWeight: 'bold'}}>
          {list.map((item)=> (
            <PortfolioList 
               title={item.title} 
               active={selected === item.id} 
               setSelected={setSelected}
               id={item.id}/>
          ))}
        </ul>

        <div className='container'>
          {data.map((d)=>(
            <div className='item'>
              <img src={d.img} alt=''/>
           
              <h3>{d.title}</h3>
            </div>
          ))}
            
        </div>

        
    </div>
  )
}

export default Portfolio
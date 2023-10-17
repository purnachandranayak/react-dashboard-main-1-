import React, { useEffect, useState } from "react"
import { AiFillCustomerService, AiOutlineClose, AiOutlineMenuUnfold, AiOutlineMoneyCollect, AiTwotoneDashboard } from "react-icons/ai"
import { BiHelpCircle, BiSolidOffer } from "react-icons/bi"
import { MdDashboardCustomize } from "react-icons/md"
import { RiProductHuntFill } from "react-icons/ri"
import { pages } from "../../utils/routes"
import "./dashboard.css"
const Dashboard = () => {
  const [swidth, setswidth] = useState(window.innerWidth)
  const [click, setClick] = useState(false)
  const [index,setIndex]=useState(0)
  useEffect(() => {
    const handleResize = () => {
      setswidth(window.innerWidth)
    }

    window.onresize = handleResize

    return () => {
      window.onresize = null
    }
  }, [])
  console.log('pages', pages)
console.log('Object.values(pages)', Object.values(pages)[0])
  return (
    <div className="mainDiv">
      {swidth <= 640 && !click && (
        <div className="navBar" style={{width:swidth}}>
          <AiOutlineMenuUnfold
            style={{ marginLeft: 17 }}
            color="#fff"
            size={23}
            onClick={() => setClick(true)}
          />
        </div>
      )}
      <div className={click ? "mainClick" : "main"}>
        <div className="dashboard-menu">
          <div>
            <div className="head">
              <MdDashboardCustomize color="#fff" size={23} />
              <h2 style={{color:'white'}}>Dashboard</h2>
              {swidth <= 640 && (
                <div style={{ position: "absolute", right: 12 }}>
                  <AiOutlineClose
                    size={23}
                    color="#fff"
                    onClick={() => setClick(false)}
                  />
                </div>
              )}
            </div>
            <div className="tabDiv">
             <div style={{display:"flex", flexDirection:'column'}}>
             <h4 style={{color:'white'}}><AiTwotoneDashboard color="#fff"/> Dashboard</h4>
              <h4 style={{color:'white'}}><RiProductHuntFill color="#fff"/>Product</h4>
              <h4 style={{color:'white'}}><AiFillCustomerService color="#fff"/>Custumer</h4>
              <h4 style={{color:'white'}}><AiOutlineMoneyCollect color="#fff"/>income</h4>
              <h4 style={{color:'white'}}><BiSolidOffer color="#fff"/>Promote</h4>
              <h4 style={{color:'white'}}><BiHelpCircle color="#fff"/>Help</h4>
             </div>
            </div>
          </div>
          <div className="body">
   
          </div>
        </div>
       
      </div>
        {
      pages[index]
    }
    </div>
  )
}

export default Dashboard

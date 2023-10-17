import React from "react";
import CustomChart from "../../hoc/Chart";
import Card from "../../hoc/Custum-card";
import CustomPieChart from "../../hoc/PieChart";
import cardData from "../../json/cardComponent.json";
import "./dashboardComponent.css";

const DashboardHome = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow:"scroll" }}>
      <div
        // style={{
        //   padding: 12,
        //   fontSize: 16,
        //   fontWeight: "bold",
        //   color: "black",
        // }}
        className="headingText"
      >
        Hello Rancho <img src="wave.png" alt="" height={18} />,
      </div>
      <div className="cardDiv">
        {cardData?.map((value) => (
          <Card >
            <div style={{ display: "flex" }}>
              <img src={value.image} alt="" srcset="" height={124} />
              <div style={{ padding: 12 }}>
                <div className="text1">{value.name}</div>
                <div className="text2">{value.total}</div>
                <div className="text3">

                {value.increment ? value.increment : value.decrement}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="chartDiv">
        <div className="chartContainer1">
          <Card>
            <CustomChart />
          </Card>
        </div>
        <div className="chartContainer2">
         
        <Card>
            <CustomPieChart />
            </Card>
        </div>
      </div>
      <div className="customerDetailsContainer">
        <Card>
          <div className="heading">
             <h3>Product sell</h3>
          <div>
          <input type ="search" id="search" name="search"/> 
          </div>
          </div>
           <div className="heading" style={{opacity:0.3,fontSize:18}}>
            <h4>
            Product Name
            </h4>
            <div style={{display:'flex', width:200, justifyContent:"space-between" ,fontSize:18}}>
                 <p> Stock</p>
                 <p> Price</p>
                 <p> Total sales</p>
          </div>
           </div>
           {
            [0,1].map((value)=>{
              return  <div className="heading" style={{fontSize:14}}  >
              <h4>
                <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" height={70}/>
               Abstract 3D
              </h4>
              <div style={{display:'flex', width:200, justifyContent:"space-between" ,fontSize:14}}>
                   <p> 32 in Stock</p>
                   <p> $45.99</p>
                   <p>20</p>
            </div>
             </div>
            })
           }
            
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;

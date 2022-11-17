import React from "react";
import Search from "../../components/Search/Search";
import "./home.css";
import gri1 from '../../assets/img/grid pic.png';
import Nav from '../../components/Navigation/Navbar';
import Mid from '../../components/Items/Items';
import post from '../../assets/img/postpic.png';
import Footer from '../../components/footer/footer';
import Widget from "../../components/widget/widget";
import Widget1 from "../../widgets/img/widget1.png";
import Widget2 from "../../widgets/img/widget2.png";
import Widget3 from "../../widgets/img/widget3.png";
import Widget4 from "../../widgets/img/widget4.png";
import Widget5 from "../../widgets/img/widget5.png";
import Widget6 from "../../widgets/img/widget6.png";
import Widget7 from "../../widgets/img/widget7.png";
import Widget8 from "../../widgets/img/widget8.png";
import stars from "../../widgets/img/stars.png";

const data = [
  {
    id: 0,
    image: Widget1,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 1,
    image: Widget2,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 2,
    image: Widget3,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 3,
    image: Widget4,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 4,
    image: Widget5,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 5,
    image: Widget6,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 6,
    image: Widget7,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 7,
    image: Widget8,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
];

const Home = () => {
  return (
    <div>
    <div className="App">
     <Nav />
      <div className="container">
        <div className="first-row">
          <h1>
            Rent a <span>place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p className="first-p">
            We provide you access to luxury and affordable houses in the
            metaverse,get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Search />
        </div>
        <div className="second-row">
              <img src={gri1} alt="grid-one" className="box" />
        </div>
      </div>
    </div>
    <Mid />
    <div className="mid-sec">
        <h2>Inspiration for your next adventure</h2>
        <div className="widget">
            {data.map((value) => {
              return <Widget value={value} />;
            })}
          </div>
    </div>

    <div className="third-container">
       <div className="main-third">
         <div className="col1">
            <h3>Metabnb NFTs</h3>
            <p className="sec-p">Discover our NFT gift cards collection.
            Loyal customers gets amazing gift cards which are traded as NFTs.
             These NFTs gives our cutomer access to loads of our exclusive services.</p>
             <button className="bt" type="submit">learn more</button>
         </div>
         <div className="col2">
            <img src={post} alt="post" className="post" />
         </div>
       </div>
    </div>
    <Footer />
   </div>
  );
};

export default Home;
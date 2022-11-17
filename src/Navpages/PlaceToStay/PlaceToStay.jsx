import React from "react";
import "./PlaceToStay.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";
import Mix from "../../widgets/img/mix.png";
import Widget from "../../components/widget/widget";
import Widget1 from "../../widgets/img/widget1.png";
import Widget2 from "../../widgets/img/widget2.png";
import Widget3 from "../../widgets/img/widget3.png";
import Widget4 from "../../widgets/img/widget4.png";
import Widget5 from "../../widgets/img/widget5.png";
import Widget6 from "../../widgets/img/widget6.png";
import Widget7 from "../../widgets/img/widget7.png";
import Widget8 from "../../widgets/img/widget8.png";
import Widget9 from "../../widgets/img/widget9.png";
import Widget10 from "../../widgets/img/widget10.png";
import Widget11 from "../../widgets/img/widget11.png";
import Widget12 from "../../widgets/img/widget12.png";
import Widget13 from "../../widgets/img/widget13.png";
import Widget14 from "../../widgets/img/widget14.png";
import Widget15 from "../../widgets/img/widget15.png";
import Widget16 from "../../widgets/img/widget16.png";
import stars from "../../widgets/img/stars.png";
import { SlOptions } from "react-icons/sl";
import { useState } from "react";
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
  {
    id: 8,
    image: Widget9,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 9,
    image: Widget10,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 10,
    image: Widget11,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 11,
    image: Widget12,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 12,
    image: Widget13,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 13,
    image: Widget14,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 14,
    image: Widget15,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
  {
    id: 15,
    image: Widget16,
    label1: "Desert king",
    label2: "1MBT per night",
    label3: "2345km away",
    label4: "available for 2weeks stay",
    icon: stars,
  },
];
const PlaceToStay = () => {
  const [modal, setModal] = useState(0);
  return (
    <div>
    <div className="whole"> <Nav /></div>
      <div className="placetostay">
        <div className="subnav">
          <div className="items1">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <div className="items2">
            <p>Location</p>
            <img src={Mix} alt="filter" />
          </div>
          <SlOptions
            onClick={() => {
              setModal(!modal);
            }}
            className="option-icon"
          />
        </div>
        {modal ? (
          <div className="optionModal">
            <div className="items3">
              <p>Resturant</p>
              <p>Cottage</p>
              <p>Castle</p>
              <p>fantast city</p>
              <p>beach</p>
              <p>carbins</p>
              <p>Off-grid</p>
              <p>Farm</p>
            </div>
            <div className="items4">
              <p className="loc">Location</p>
              <img src={Mix} alt="filter" className="mix" />
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          onClick={() => {
            setModal(!modal);
          }}
          className="section1"
        >
          <div className="widget">
            {data.map((value) => {
              return <Widget value={value} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceToStay;
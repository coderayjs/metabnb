import React from "react";
import "./Navbar.css";
import img from '../../assets/img/logo(1).png'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Wallet1 from "../../widgets/img/wallet1.png";
import Wallet2 from "../../widgets/img/wallet2.png";

const Navbar = () => {
    const [modal, setModal] = useState(0);
    const [popup, setPopup] = useState(0);
    return (
        <div className="main">
        <div className="navi">
        <Link to="/Home">
        <img src={img} alt="logo" className="logo" />
        </Link>
            <ul className="order">
                <li><Link to="/Home" id="contact">Home</Link></li>
                <li><Link to="/PlaceToStay" id="contact">Place To Stay</Link></li>
                <li><Link to="/NFTS" id="contact">NFTS</Link></li>
                <li><Link to="/Community" id="contact">Community</Link></li>
            </ul>
            <div className="menu">
        <Link
          onClick={() => {
            setPopup(!popup);
          }}
          to=""
          className="connect con"
        >
          Connect wallet
        </Link>
        <GiHamburgerMenu
          onClick={() => {
            setModal(!modal);
          }}
          className="hamburger"
        />
      </div>
        </div>
      {modal ? (
        <div className="modal">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/placetostay">Place to stay</Link>
            </li>
            <li>
              <Link to="">NFTs</Link>
            </li>
            <li>
              <Link to="">Community</Link>
            </li>
            <li
              onClick={() => {
                setPopup(!popup);
              }}
              className="community"
            >
              <Link to="">Connect Wallet</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {popup ? (
        <div className="popup">
          <div className="collect-wallet-modal">
            <div className="item1">
              <p>Connect Wallet</p>
              <GrClose className="close" onClick={() => setPopup(!popup)} />
            </div>
            <div className="wallet-body">
              <p>Choose your preferred wallet:</p>
              <div className="wallet1">
                <div className="wallet1-item1">
                  <img src={Wallet1} alt="wallet1" />
                  <p>Metamask</p>
                </div>
                <IoIosArrowForward className="wallt1-arrow" />
              </div>
              <div className="wallet1">
                <div className="wallet1-item1">
                  <img src={Wallet2} alt="wallet1" />
                  <p>Metamask</p>
                </div>
                <IoIosArrowForward className="wallt1-arrow" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

        </div>

    );
}    

export default Navbar;
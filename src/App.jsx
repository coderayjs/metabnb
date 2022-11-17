import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Navpages/Home/Home';
import PlaceToStay from './Navpages/PlaceToStay/PlaceToStay';
import NFTS from './NavPages/NFTS/NFTS';
import Community from './NavPages/Community/Community';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/PlaceToStay" element={<PlaceToStay/>} />
				<Route path="/NFTS" element={<NFTS/>} />
				<Route path="/Community" element={<Community/>} />
			</Routes>
		</div>
	);
};

export default App;

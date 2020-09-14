import React from "react";
import './styles.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Sezione from "./components/Sezione";
import Gusti from "./components/Gusti";
import Contatti from "./components/Contatti";
import Footer from "./components/Footer";

import { presentazione, onTheRoad, trackTheTruck } from "./data";

export default function App() {
    return (
        <div>
            <Header />
            <NavBar />
            <main>
                <Sezione data={presentazione} />
                <Gusti />
                <Sezione data={onTheRoad} />
                <Sezione data={trackTheTruck} />
            </main>
            <Contatti />
            <Footer />
        </div>
    )
};
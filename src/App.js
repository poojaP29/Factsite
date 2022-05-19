import React from "react";
import Navbar from "./navbar";
import Main from "./main";
import './style.css';

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
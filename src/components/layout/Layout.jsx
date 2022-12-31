import React from 'react';
import Header from "./../header/Header"
import Body from "../body/Body"
import Footer from "../footer/Footer.jsx"

const Layout = () => {
    return (
        <div class="react" id="layout">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
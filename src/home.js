import React from "react";
import "./home.css";
import Product from "./product.js";

function Home() {
  return (
    <div>
      <img
        className="bannerimage"
        src="https://www.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
        alt=""
      />
      <div className="products__row">
        <Product
          id={1}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />
        <Product
          id={2}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />
        <Product
          id={3}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />
      </div>
      <div className="products__row">
        <Product
          id={1}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />{" "}
        <Product
          id={2}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />{" "}
        <Product
          id={3}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />
      </div>
      <div className="products__row">
        <Product
          id={1}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />{" "}
        <Product
          id={2}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />{" "}
        <Product
          id={3}
          title="Ajio Legend Lace-Up Sports Shoes "
          price={50}
          rating={4}
          image="https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg"
        />
      </div>
    </div>
    // products
  );
}

export default Home;

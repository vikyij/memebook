import React from "react";
import { FaArrowUp, FaArrowDown, FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

import styles from "./cards.module.css";

const Cards = () => {
  const { row, column, card, Icons, Icon } = styles;

  const memeImages1 = [
    { url: img1, text: "hahaha funny" },
    { url: img3, text: "hahaha funny" },
    { url: img2, text: "hahaha funny" },
    { url: img4, text: "hahaha funny" },
  ];
  const memeImages2 = [
    { url: img4, text: "hahaha funny" },
    { url: img2, text: "hahaha funny" },
    { url: img3, text: "hahaha funny" },
    { url: img1, text: "hahaha funny" },
  ];
  const memeImages3 = [
    { url: img3, text: "hahaha funny" },
    { url: img4, text: "hahaha funny" },
    { url: img1, text: "hahaha funny" },
    { url: img2, text: "hahaha funny" },
  ];
  const memeImages4 = [
    { url: img2, text: "hahaha funny" },
    { url: img3, text: "hahaha funny" },
    { url: img1, text: "hahaha funny" },
    { url: img4, text: "hahaha funny" },
  ];

  return (
    <div className={row}>
      <div className={column}>
        {memeImages1.map((img) => {
          return (
            <div className={`${card}`} style={{ backgroundColor: "#474A51" }}>
              <img className="card-img-top" src={img.url} alt="post" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <div to="#" className={`card-text ${Icons}`}>
                  <p style={{ display: "flex" }}>
                    <FaArrowUp className={Icon} />
                    120
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaCommentAlt className={Icon} /> 19{" "}
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaArrowDown className={Icon} /> 10{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={column}>
        {memeImages2.map((img) => {
          return (
            <div className={`${card}`} style={{ backgroundColor: "#474A51" }}>
              <img className="card-img-top" src={img.url} alt="post" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <div to="#" className={`card-text ${Icons}`}>
                  <p style={{ display: "flex" }}>
                    <FaArrowUp className={Icon} />
                    120
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaCommentAlt className={Icon} /> 19{" "}
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaArrowDown className={Icon} /> 10{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={column}>
        {memeImages3.map((img) => {
          return (
            <div className={`${card}`} style={{ backgroundColor: "#474A51" }}>
              <img className="card-img-top" src={img.url} alt="post" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <div to="#" className={`card-text ${Icons}`}>
                  <p style={{ display: "flex" }}>
                    <FaArrowUp className={Icon} />
                    120
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaCommentAlt className={Icon} /> 19{" "}
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaArrowDown className={Icon} /> 10{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={column}>
        {memeImages4.map((img) => {
          return (
            <div className={`${card}`} style={{ backgroundColor: "#474A51" }}>
              <img className="card-img-top" src={img.url} alt="post" />
              <div className="card-body">
                <p className="card-title">John Doe</p>
                <div className={`card-text ${Icons}`}>
                  <p style={{ display: "flex" }}>
                    <FaArrowUp className={Icon} />
                    120
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaCommentAlt className={Icon} /> 19{" "}
                  </p>
                  <p style={{ display: "flex" }}>
                    <FaArrowDown className={Icon} /> 10{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

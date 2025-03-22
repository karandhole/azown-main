import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { Link, useParams } from "react-router-dom";
import { ServiceContext } from "../../context/ServiceContext";
import { Button, Modal } from "react-bootstrap";
import VenderData from "./VenderData";

const VenderList = () => {
  const { id, name } = useParams();
  const serviceContext = React.useContext(ServiceContext);
  const { venderList, getVenderList } = serviceContext;
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    console.log(id, name);
    getVenderList(id);
  }, []);
  return (
    <>
      <Navbar />

      <section className="light-bg min">
        <div className="container">
          <div className="sec-heading center">
            <h2>{name}</h2>
            <strong>
              We provide a {name} service to make your life easier.
            </strong>
          </div>

          <div className="row justify-content-center">
            {venderList && venderList.length === 0 && (
              <div>
                <h3>No Vender Found</h3>
              </div>
            )}
            {venderList &&
              venderList.map((vender) => {
                return (
                    <VenderData vender={vender} id= {id}/>
                 
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
     
    </>
  );
};

export default VenderList;

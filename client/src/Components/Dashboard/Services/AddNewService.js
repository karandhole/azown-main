import React, { createContext, useState, useContext } from "react";
import ShowServices from "./ShowServices";
import { ServiceContext } from "../../../context/ServiceContext";
import { ServiceData, ServiceUnit } from "./localAPI";

const AddNewService = () => {
  // context
  const context = useContext(ServiceContext);
  const {  
    addNewService} = context;

  const [serviceData, setServiceData] = useState({
    service_id: "",
    service_name: "",
    sub_service_name: "",
    service_description: "",
    service_charge: "",
    charge_unit: "",
  });
  const [serviceList, setServiceList] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let index = 0; index < ServiceData.length; index++) {
      const element = ServiceData[index];
      // console.log(element.service_name==serviceData.service_name)
      // console.log("element",element.service_name)
      // console.log("service",serviceData.service_name)
      if (element.service_name === serviceData.service_name) {
        serviceData.service_id = element.id;
      }
    }

    // context
    console.log(serviceData)
   
    addNewService(serviceData);
    
    // serviceupdate(serviceData);
    // ServiceUpdatePost(serviceData);

    // console.log(serviceData);

    setServiceData({
      service_name: "",
      sub_service_name: "",
      service_charge: "",
      charge_unit: "",
      service_description: "",
    });
  };

  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 ">
        <div className="bg-white rounded p-4">
          <h3 className="py-3">Services Page</h3>
      

          <div className="">
          <form onSubmit={handleSubmit} autoComplete="off">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Service Name:</label>
      <select
        className="form-control"
        name="service_name"
        value={serviceData.service_name}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled selected>
          Select a service
        </option>
        {ServiceData.map((service) => {
          return (
            <option value={service.service_name} key={service.id}>
              {service.service_name}
            </option>
          );
        })}
      </select>
    </div>

    <div className="form-group col-md-6">
      <label>Service Subcategory:</label>
      <input
        name="sub_service_name"
        type="text"
        className="form-control"
        value={serviceData.sub_service_name}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Charge of Service:</label>
      <input
        name="service_charge"
        value={serviceData.service_charge}
        onChange={handleInputChange}
        className="form-control"
        type="number"
        min="0"
        required
      />
    </div>

    <div className="form-group col-md-6">
      <label>Charge Unit:</label>
      <select
        className="form-control"
        name="charge_unit"
        value={serviceData.charge_unit}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled selected>
          Choose a unit
        </option>
        {ServiceUnit.map((service) => {
          return (
            <option value={service.charge_unit} key={service.id}>
              {service.charge_unit}
            </option>
          );
        })}
      </select>
    </div>
  </div>

  <div className="form-group">
  <label>Description of Service (optional):</label>
  <textarea
    name="service_description"
    className="form-control"
    value={serviceData.service_description}
    onChange={handleInputChange}
  ></textarea>
</div>


  <div className="d-flex justify-content-center">
  <button
    type="submit"
    className="btn btn-success"
    style={{
      backgroundColor: "#27ae60",
      color: "#fff",
    }}
  >
    Save Page
  </button>
</div>

</form>

            {/* <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group col-6">
                <label>Service Name :</label>

                <select
                  className="form-control"
                  name="service_name"
                  value={serviceData.service_name}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  {ServiceData.map((service) => {
                    return (
                      <option value={service.service_name} key={service.id}>
                        {service.service_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group col-6">
                <label className="">Service Sub category :</label>

                <input
                  name="sub_service_name"
                  type="text"
                  className="form-control"
                  value={serviceData.sub_service_name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group col-6">
                <label className="">Charge of Service :</label>

                <input
                  name="service_charge"
                  value={serviceData.service_charge}
                  onChange={handleInputChange}
                  className="form-control"
                  type="number"
                  min="0"
                  required
                />
              </div>
              <div className="form-group col-6">
                <label>Charge Unit</label>
                <select
                  className="form-control"
                  name="charge_unit"
                  value={serviceData.charge_unit}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
         Choose a unit
                  </option>
                  {ServiceUnit.map((service) => {
                    return (
                      <option value={service.charge_unit} key={service.id}>
                        {service.charge_unit}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className=" form-group col-6">
                <label className="mr-3">
                  Description of Service (optional) :
                </label>
                <input
                  name="service_description"
                  type="text"
                  className="form-control"
                  value={serviceData.service_description}
                  onChange={handleInputChange}
                  
                />
              </div>

              <button
                type="submit"
                className="btn btn-success m-2"
                style={{
                  backgroundColor: "#27ae60",
                 
                }}
              >
                Save Page
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewService;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropertyState from "./context/PropertyState";
import { HandlerState } from "./context/HandlerContext";
import { LeadState } from "./context/LeadContext";
import { UserState } from "./context/UserContext";
import { PremiumTempData } from "./context/PremiumContext";
import { VendorStatus } from "./context/VendorContext";
import { ServiceState } from "./context/ServiceContext";
import { AdminStatus } from "./Components/Admin/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PropertyState>
      <LeadState>
        <AdminStatus>
        <PremiumTempData>
          <VendorStatus>
            <ServiceState>
              <HandlerState>
                <UserState>
                  <App />
                </UserState>
              </HandlerState>
            </ServiceState>
          </VendorStatus>
        </PremiumTempData>
        </AdminStatus>
      </LeadState>
    </PropertyState>
  </React.StrictMode>
);

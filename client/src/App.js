import './App.css';
import Home from './Components/Home/Home';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CreateProperty from './Components/Create_Property/CreateProperty';
import ResidentialRent from './Components/Create_Property/Property_Forms/ResidentialRent';
import ResidentialResale from './Components/Create_Property/Property_Forms/ResidentialResale';
import ResidentialPg from './Components/Create_Property/Property_Forms/ResidentialPg';
import ResidentialFlatmates from './Components/Create_Property/Property_Forms/ResidentialFlatmates';
import CommercialRent from './Components/Create_Property/Property_Forms/CommercialRent';
import CommercialSale from './Components/Create_Property/Property_Forms/CommercialSale';
import PlotResale from './Components/Create_Property/Property_Forms/PlotResale';

import RrentDetail from './Components/Property_Pages/Rrent/RrentDetail';
import RrentList from './Components/Property_Pages/Rrent/RrentList';
import RsaleList from './Components/Property_Pages/Rsale/RsaleList';
import RpgList from './Components/Property_Pages/Rpg/RpgList';

import RpgDetail from './Components/Property_Pages/Rpg/RpgDetail';
import RflatList from './Components/Property_Pages/Rflat/RflatList';
import RflateDetail from './Components/Property_Pages/Rflat/RflateDetail';
import CrentList from './Components/Property_Pages/Crent/CrentList';
import CrentDetail from './Components/Property_Pages/Crent/CrentDetail';
import CsaleList from './Components/Property_Pages/Csalse/CsaleList';
import CsaleDetail from './Components/Property_Pages/Csalse/CsaleDetail';
import PlotList from './Components/Property_Pages/Plot/PlotList';
import PlotDetail from './Components/Property_Pages/Plot/PlotDetail';
import RsaleDetail from './Components/Property_Pages/Rsale/RsaleDetail';
import Dashboard from './Components/Dashboard/Dashboard';
import Alert from './Components/Alert';
import UserDetail from './Components/Property_Pages/UserDetail';
import EditRrent from './Components/Create_Property/Property_Forms/EditRrent';
import EditRsale from './Components/Create_Property/Property_Forms/EditRsale';
import EditRpg from './Components/Create_Property/Property_Forms/EditRpg';
import EditRfm from './Components/Create_Property/Property_Forms/EditRfm';
import EditCmr from './Components/Create_Property/Property_Forms/EditCmr';
import EditCms from './Components/Create_Property/Property_Forms/EditCms';
import EditPlot from './Components/Create_Property/Property_Forms/EditPlot';
import Admin from './Components/Admin/Admin';

import ScrollToTop from './Components/ScrollToTop'
import PreviewPage from './Components/Dashboard/Premium/ProfilePremium/PreviewPage';
import EditBuilder from './Components/Dashboard/Premium/ProfilePremium/EditPage';
import PreviewEdited from './Components/Dashboard/Premium/ProfilePremium/PreviewEdited';
import Services from './Components/Service_Module/Services';
import VenderList from './Components/Service_Module/VenderList';
import VenderDetail from './Components/Service_Module/VenderDetail';




import AllPropertyDetailPage from './Components/Admin/Properties/AllPropertyDetailPage';

import AllUsers from './Components/Admin/Users/AllUsers';
import Owner from './Components/Admin/Users/Owner';
import Broker from './Components/Admin/Users/Broker';
import Vender from './Components/Admin/Users/UserDetailPageAllVender';
// import Layout from './Components/Admin/Layout';
import HomeAdmin from './Components/Admin/HomeAdmin';
import ListRrent from './Components/Admin/Properties/ListRrent';
import ListRsale from './Components/Admin/Properties/ListRsale';
import ListRpg from './Components/Admin/Properties/ListRpg';
import ListRfm from "./Components/Admin/Properties/ListRfm";
import ListCmr from "./Components/Admin/Properties/ListCmr";
import ListCms from "./Components/Admin/Properties/ListCms";
import ListPlot from "./Components/Admin/Properties/ListPlot";
import VendorsProfile from './Components/Admin/Services/VendorsProfile';
// import PropertyLeads from './Components/Admin/Properties/PropertyLeads';
import BrokersDetails from './Components/Admin/Services/BrokersDetails';
import BrokersProfile from './Components/Admin/Services/BrokersProfile';
import VendorService from './Components/Admin/Services/VendorService';
import Tabs from './Components/Dashboard/Services/Tabs';
import MyProperties from './Components/Dashboard/MyProperty/MyProperties';
import AllVendorsProfile from './Components/Admin/Services/AllVendorsProfile';
import AllProperty from './Components/Admin/Properties/AllProperty';
import HandoverProperty from './Components/Admin/Properties/HandoverProperty';
import UserDetailPageAll from './Components/Admin/Users/UserDetailPageAll';
import Builder from './Components/Admin/Users/Builder';
import ExploreMoreAgentDetails from './Components/Home/Testimonial_Client/ExploreMoreAgentDetails';
import Layout from './Components/Admin/Layout';
import Premium from './Components/Dashboard/Premium/ProfilePremium/Premium';
import PreviewActivePage from './Components/Dashboard/Premium/ProfilePremium/ActiveTempPrev';
import PropTempPrev from './Components/Dashboard/Premium/PropPremium/PropTempPrev';
import PropActivePrev from './Components/Dashboard/Premium/PropPremium/PropActivePrev';
import PropertyActiveEdit from './Components/Dashboard/Premium/PropPremium/PropertyActiEdit';
import PropTempView from './Components/Dashboard/Premium/PropPremium/PropTempView';
import ActivePropertyTemp from './Components/Dashboard/Premium/PropPremium/ActiveTemp';
import ProfileActive from './Components/Dashboard/Premium/ProfilePremium/ProfileActive';
import ErrorPage from "./Components/ErrorPage";
import Theme from './Components/Theme/theme';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create-property' element={<CreateProperty />} ></Route>
          <Route path='/residential-rent' element={<ResidentialRent />} ></Route>
          <Route path='/residential-resale' element={<ResidentialResale />} ></Route>
          <Route path='/residential-pg' element={<ResidentialPg />} ></Route>
          <Route path='/residential-flatmate' element={<ResidentialFlatmates />} ></Route>
          <Route path='/commercial-rent' element={<CommercialRent />} ></Route>
          <Route path='/commercial-sale' element={<CommercialSale />} ></Route>
          <Route path='/plot-resale' element={<PlotResale />} ></Route>

          <Route path="/rrent-list" element={<RrentList />}></Route>
          <Route path="/rrent-detail/:id" element={<RrentDetail />}  ></Route>

          <Route path="/rsale-list" element={<RsaleList />}></Route>
          <Route path="/rsale-detail/:id" element={<RsaleDetail />}></Route>

          <Route path="/rpg-list" element={<RpgList />}></Route>
          <Route path="/rpg-detail/:id" element={<RpgDetail />}></Route>

          <Route path="/rfm-list" element={<RflatList />}></Route>
          <Route path="/rfm-detail/:id" element={<RflateDetail />}></Route>

          <Route path="/cmr-list" element={<CrentList />}></Route>
          <Route path="/cmr-detail/:id" element={<CrentDetail />}></Route>

          <Route path="/cms-list" element={<CsaleList />}></Route>
          <Route path="/cms-detail/:id" element={<CsaleDetail />}></Route>

          <Route path="/plot-list" element={<PlotList />}></Route>
          <Route path="/plot-detail/:id" element={<PlotDetail />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>

          <Route path='/user-detail/:id' element={<UserDetail/>} ></Route>

          <Route path="/edit-rrent/:id" element={<EditRrent/>}></Route>
          <Route path="/edit-rsale/:id" element={<EditRsale/>}></Route>
          <Route path="/edit-rpg/:id" element={<EditRpg/>}></Route>
          <Route path="/edit-rfm/:id" element={<EditRfm/>}></Route>
          <Route path="/edit-cmr/:id" element={<EditCmr/>}></Route>
          <Route path="/edit-cms/:id" element={<EditCms/>}></Route>
          <Route path="/edit-plot/:id" element={<EditPlot/>}></Route>
          <Route path="/admin" element={<HomeAdmin/>}></Route>

          <Route path="/more-services" element={<Services/>}></Route>
          <Route path="/vender-list/:id/:name" element={<VenderList/>}></Route>
          <Route path="/vender-detail/:id" element={<VenderDetail/>}></Route>
         

          <Route path='/preview-template/:id' element={<PreviewPage/>}></Route>
          <Route path='/edit-template/:id' element={<EditBuilder />}></Route>
          <Route path='/preview-edited-template/:id' element={<PreviewEdited />}></Route> 
          <Route path='/preview-active-template/:id' element={<PreviewActivePage />}></Route> 


{/* shazeb bhai */}
          <Route path="/user-detail-page/:id" element={<UserDetailPageAll/>}></Route>
          <Route path="/property-detail-page" element={<AllPropertyDetailPage/>}></Route>
          <Route path="/alluser-page" element={<AllUsers/>}></Route>
          <Route path="/owner-page" element={<Owner/>}></Route>
          <Route path="/broker-page" element={<Broker/>}></Route>
          {/* <Route path="/vender-page" element={<Vender/>}></Route> */}
          <Route path="/builder-page" element={<Builder/>}></Route>
          <Route path="/rrproperty-page" element={<ListRrent/>}></Route>
          <Route path="/rsproperty-page" element={<ListRsale/>}></Route>
          <Route path="/rpgproperty-page" element={<ListRpg/>}></Route>
          <Route path="/rfmproperty-page" element={<ListRfm/>}></Route>
          <Route path="/cmrproperty-page" element={<ListCmr/>}></Route>
          <Route path="/cmsproperty-page" element={<ListCms/>}></Route>
          <Route path="/pproperty-page" element={<ListPlot/>}></Route>
          <Route path="/service-vendor-page/:id/:name" element={<VendorsProfile/>}></Route>
          <Route path="/service-vendor-profile-page" element={<ExploreMoreAgentDetails/>}></Route>
          <Route path ="/all-vendor-profile" element={<AllVendorsProfile/>}></Route>
          <Route path="/broker-detail-page" element={<BrokersDetails/>}></Route>
          <Route path="/broker-profile-page" element={<BrokersProfile/>}></Route>
          <Route path ="/vendor-service" element={<VendorService/>}></Route>
          <Route path ="/vendor-service-leads" element={<Tabs/>}></Route>
          <Route path ="/handover-property" element={<HandoverProperty/>}></Route>

          <Route path ="/premium-page" element={<Premium/>}></Route>
          <Route path ="/property-edit-page/:id" element={<PropertyActiveEdit/>}></Route>
          <Route path='/property-active-page/:id' element={<PropActivePrev/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
          {/* shazeb bhai */}
           <Route path='/property-landing-page/:propId/:tempId' element={<PropTempPrev/>}></Route>
           <Route path='/property-template-view/:tempId' element={<PropTempView/>}></Route>
           <Route path='/premium-property/:id/:pType' element={<ActivePropertyTemp />}></Route>
           <Route path='/premium-profile/:id' element={<ProfileActive />}></Route>

           <Route path='/theme' element={<Theme/>}></Route>

        </Routes>

      </Router>
    </>


  );
}

export default App;

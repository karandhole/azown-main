import React, { useContext, useEffect, useState } from 'react'
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import LeadProfile from '../MyProperty/LeadProfile';
import Status from './Status';
import img from '../../images/p-1.png'
import { Link } from 'react-router-dom';

const Contacted = () => {
  const leadcontext = useContext(leadContext);
  const { userleadsdata } = leadcontext;
  const context = useContext(propertyContext);
  const { dash, host } = context;

  const { ownerlead, ownerleaddata } = leadcontext
  const [model, setmodel] = useState(false);
  const [rr, setrr] = useState([])
  const [rrs, setrrs] = useState([])
  const [rpg, setrpg] = useState([])
  const [rfm, setrfm] = useState([])
  const [cmr, setcmr] = useState([])
  const [cms, setcms] = useState([])
  const [plot, setplot] = useState([])


  useEffect(() => {
    async function userlead(ptype) {
      const responce = await fetch(`${host}/leadprop/userleaddata/${ptype}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      const resdata = await responce.json();
      if (ptype === 1) {
        setrr(resdata)
        console.log(resdata)
      } else if (ptype === 2) {
        setrrs(resdata)
      } else if (ptype === 3) {
        setrpg(resdata)
      } else if (ptype === 4) {
        setrfm(resdata)
        console.log(resdata)
      } else if (ptype === 5) {
        setcmr(resdata)
      } else if (ptype === 6) {
        setcms(resdata)
      } else if (ptype === 7) {
        setplot(resdata)
      }
    };

    async function brokerlead(ptype) {
      const responce = await fetch(`${host}/handler/handling-req/${ptype}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      const resdata = await responce.json();
      if (ptype === 1) {
        setrr(resdata)
        console.log(resdata)
      } else if (ptype === 2) {
        setrrs(resdata)
      } else if (ptype === 3) {
        setrpg(resdata)
      } else if (ptype === 4) {
        setrfm(resdata)
      } else if (ptype === 5) {
        setcmr(resdata)
      } else if (ptype === 6) {
        setcms(resdata)
      } else if (ptype === 7) {
        setplot(resdata)
      }
    };

{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(1) : userlead(1)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(2) : userlead(2)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(3) : userlead(3)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(4) : userlead(4)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(5) : userlead(5)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(6) : userlead(6)}
{JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? brokerlead(7) : userlead(7)}

    // userlead(1)
    // userlead(2)
    // userlead(3)
    // userlead(4)
    // userlead(5)
    // // userlead(6)
    // userlead(7)
  }, [])
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 ">
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Rent</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rr  && rr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                            {item.hasOwnProperty('title') &&  <div className="dash_prt_caption">
                                <Link to={`/rrent-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div> }
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Sale</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {rrs && rrs.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                             {item.hasOwnProperty('title') && <div className="dash_prt_caption">
                                <Link to={`/rsale-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Paying Guest</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {rpg && rpg.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                              {item.hasOwnProperty('title') && <div className="dash_prt_caption">
                                <Link to={`/rpg-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Flatmate</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {rfm && rfm.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                              {item.hasOwnProperty('title') &&   <div className="dash_prt_caption">
                                <Link to={`/rfm-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Rent</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {cmr && cmr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                              {item.hasOwnProperty('title') && <div className="dash_prt_caption">
                                <Link to={`/cmr-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Sale</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {cms && cms.map(item => {

                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="imag" />
                              </div>
                              {item.hasOwnProperty('title') &&   <div className="dash_prt_caption">
                                <Link to={`/cms-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Plot Sale</th>
                      <th scope="col" className="m2_hide">Owner Phone</th>
                      <th scope="col" className="m2_hide">Owner Name</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {plot && plot.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.imgurl.length === 0 ?img : item.imgurl[0] } className="img-fluid" alt="image" />
                              </div>
                              {item.hasOwnProperty('title') &&   <div className="dash_prt_caption">
                                <Link to={`/plot-detail/${item.property_id}`} className='font-weight-bold'>{`${item.title && item.title.slice(0, 30)}...`}</Link>
                                <div className="prt_dashb_lot">{` ${item.location && item.location.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.price}</span></div>
                              </div>}
                            </div>
                          </td>
                          <td className="m2_hide">
                          <div className="prt_leads " ><span><b>{item.phone == undefined ?"Not Updated": item.phone }</b></span></div>
                            <div className="prt_leads_list"><span>Owner Phone</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.name}</h5></div>
                            <div className="_leads_view_title"><span>Owner Name</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.property_lead_open_date && item.property_lead_open_date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><Status key={item._id} item={item} /></div>

                          </td>

                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className={model ? "modal fade show" : "modal fade"} tabIndex={-1} role="dialog" aria-labelledby="authomessage" style={{ display: model ? 'block' : 'none' }}  >
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
          <div className="modal-content" id="authomessage">
            <span className="mod-close" data-dismiss="modal" onClick={() => { setmodel(false) }} aria-hidden="true"><i className="ti-close" /></span>
            <div className="modal-body">
              <h4 className="modal-header-title">Total Lead</h4>
              <hr />
              <div className="login-form">
                {ownerleaddata && ownerleaddata.map((lead) => {
                  return <div>
                    < LeadProfile key={lead._id} lead={lead} />
                  </div>
                })}


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Contacted
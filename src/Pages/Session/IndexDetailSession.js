import React, { useEffect, useState } from "react";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
import "./DetailSession.css";
import {availableSession} from '../../Services/Api/callApi'
import { Link, useParams } from "react-router-dom";
export default function IndexDetailSession() {
    let {id} = useParams();
    const [packages, setPackages] = useState({});

    useEffect(() => {
        availableSession(id).then(res=>setPackages(res.data.data)).catch(err=>console.log(err))
    }, []);
    console.log(packages.image);
    return (
        <>
            <MoveToTop />
            <div className="page-section pb-0" id='about'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 wow fadeInRight" data-wow-delay="400ms">
                                <div className="img-place custom-img-1">
                                    <img src={packages.image} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 py-3 wow fadeInUp">
                                <div className="title-name">
                                <h1 className='text-about'>{packages.name}</h1>

                                </div>
                                <div className="rs-prices" style={{fontSize:'35px'}}>
                                    $ <span className="pr">{packages.price}</span>
                                </div>
                                <div>
                                    {/* <h3 className="benefits">BENEFITS</h3>
                                    <ul>
                                        <li>Apples are nutricious</li>
                                        <li> Apples may be good for weight loss</li>
                                        <li>  Apples may be good for bone health</li>
                                        <li>  They're linked to a lowest risk of diabetes</li>
                                    </ul> */}

                                </div>
                                <Link to={`/booking/${id}`} className="btn btn-primary btn-color">Book now</Link>

                            </div>

                        </div>

                        <div className="reviews">
                        <div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-toggle="tab"
                                        data-target="#home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        Desciption
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="profile-tab"
                                        data-toggle="tab"
                                        data-target="#profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    >
                                        View
                                    </button>
                                </li>

                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    {packages.description}
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    No data
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <hr></hr>
                </div>
                

        </>
    )
}
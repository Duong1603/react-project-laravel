import React, { useEffect, useState } from "react";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
import "./DetailSession.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function IndexDetailSession() {
    let {id } = useParams();
    const [packages, setPackages] = useState({});
    const fetchPackages = async () => {
        await axios.get(`http://localhost:8000/api/package/${1}`).then(res => {
            console.log(res.data.data);
            setPackages(res.data.data)
        })
            ;
    };
    useEffect(() => {
        fetchPackages();
    }, []);
    return (
        <>
            <MoveToTop />
            <div className="container" id="detailSession">
                <section className="product">
                    <div className="product__photo">
                        <img
                            src="http://localhost:3000/assets/img/doctors/doctor_3.jpg"
                            alt="green apple slice" className="photo-container"
                        />
                     
                    </div>
                    <div className="product__info">
                        <div className="title">
                            <h1>{packages.name}</h1>
                            {/* <span>COD: 45999</span> */}
                        </div>
                        <div className="price">
                            R$ <span>{packages.price}</span>
                        </div>
                        <div className="description">
                            <h3>BENEFITS</h3>
                            <ul>
                                <li>Apples are nutricious</li>
                                <li>Apples may be good for weight loss</li>
                                <li>Apples may be good for bone health</li>
                                <li>They're linked to a lowest risk of diabetes</li>
                            </ul>
                        </div>
                        <Link to={`/booking/${id}`} className="buy--btn">ADD TO CART</Link>
                    </div>
                </section>
                <div>
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
                                    Disciption
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
                                {packages.discription}
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

        </>
    )
}
import React, { useEffect, useState } from "react";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
// import './IndexDetailSessionCss.css';
import axios from "axios";

export default function IndexDetailSession() {
    const [packages, setPackages] = useState([]);
    const fetchPackages = async () => {
        await axios.get(`http://localhost:8000/api/package/{id}`).then(({ data }) => {
            setPackages(data.data);
        });
    };
    useEffect(() => {
        fetchPackages();
    }, []);
    return (
        <>
            <div className="container">
                <MoveToTop>
                    <section className="product">
                        <div className="product__photo">
                            <div className="photo-container">
                                <div className="photo-main">
                                    <div className="controls">
                                        <i className="material-icons">share</i>
                                        <i className="material-icons">favorite_border</i>
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
                                        alt="green apple slice" className="detail-img"
                                    />
                                </div>
                                <div className="photo-album">
                                    <ul>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product__info">
                            <div className="title">
                                <h1>{packages.name}</h1>
                                <span>COD: 45999</span>
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
                            <button className="buy--btn">ADD TO CART</button>
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
                                    chua co
                                </div>
                            </div>
                        </div>
                    </div>
                </MoveToTop>

            </div>
        </>
    )
}
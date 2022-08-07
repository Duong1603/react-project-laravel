import React from "react";

export default function Form({ lb }) {
    return (
        <>
        <div>
            <h1 className="text-center wow fadeInUp">{lb.form_name}</h1>
            <form className="contact-form mt-5">
            <div className="row mb-3">
                <div className="col-sm-6 py-2 wow fadeInLeft">
                <label htmlFor="fullName">{lb.name1}</label>
                <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder={lb.name1+"..."}
                />
                </div>
                <div className="col-sm-6 py-2 wow fadeInRight">
                <label htmlFor="emailAddress">{lb.name2}</label>
                <input
                    type="text"
                    id="emailAddress"
                    className="form-control"
                    placeholder={lb.name2+"..."}
                />
                </div>
                <div className="col-12 py-2 wow fadeInUp">
                <label htmlFor="subject">{lb.name3}</label>
                <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder={lb.name3+"..."}
                />
                </div>
                <div className="col-12 py-2 wow fadeInUp">
                <label htmlFor="message">{lb.name4}</label>
                <textarea
                    id="message"
                    className="form-control"
                    rows={8}
                    placeholder={lb.name4+"..."}
                    defaultValue={""}
                    
                />
                </div>
            </div>
            <button type="submit" className="btn btn-primary wow zoomIn">
                Send Message
            </button>
            </form>
        </div>
        </>
    );
}

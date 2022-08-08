import React from "react";
import "./Form_copy.css";

export default function Form({ data, onSummitForm, onSetForm, form }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSummitForm();
    };

    const handleChange = (e) => {
        onSetForm({ ...form, [e.target.name]: e.target.value });
    };
    return (
        <>
        <h1 className="text-center wow fadeInUp">{data.lb.form_name}</h1>
        <form onSubmit={handleSubmit} className="contact-form mt-5">
            <div className="row">
            <div className="row mb-3 col-8">
                <div className="col-sm-6 py-2 wow fadeInLeft">
                <label htmlFor="fullName">{data.lb.name1}</label>
                <input
                    name="phone"
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder={data.lb.name1 + "..."}
                    onChange={handleChange}
                    value={form.phone}
                />
                </div>
                <div className="col-sm-6 py-2 wow fadeInRight">
                <label htmlFor="emailAddress">{data.lb.name2}</label>
                <input
                    name="email"
                    type="text"
                    id="emailAddress"
                    className="form-control"
                    placeholder={data.lb.name2 + "..."}
                    onChange={handleChange}
                    value={form.email}
                />
                </div>
                <div className="col-12 py-2 wow fadeInUp">
                <label htmlFor="subject">{data.lb.name3}</label>
                <input
                    name="name"
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder={data.lb.name3 + "..."}
                    onChange={handleChange}
                    value={form.name}
                />
                </div>
                <div className="col-12 py-2 wow fadeInUp">
                <label htmlFor="message">{data.lb.name4}</label>
                <textarea
                    name="problem"
                    id="message"
                    className="form-control"
                    rows={8}
                    placeholder={data.lb.name4 + "..."}
                    defaultValue={""}
                    onChange={handleChange}
                    value={form.problem}
                />
                </div>
            </div>
            <div className="col-4" id="checkout">
                <h2>Booking summary</h2>
                <p>
                via:<span>google meeting</span>
                </p>
                <p>
                name:<span> {form.name} </span>
                </p>
                <p>
                email:<span> {form.email} </span>
                </p>
                <p>
                phone:<span> {form.phone} </span>
                </p>
                <p>
                session:
                <span>
                    {data.state.pick.length === 0
                    ? "Nothing "
                    : data.state.pick.map((item) => (
                        <>
                            <a href="# ">{item.title}</a>
                            <br />
                            start: {item.start.getHours()}:{" "}
                            {item.start.getMinutes()}
                            <br />
                            end: {item.end.getHours()}: {item.end.getMinutes()}
                        </>
                        ))}
                </span>
                </p>
                {parseInt(data.state.session) === 1 ? (
                ""
                ) : (
                <>
                    <input
                    type="radio"
                    onChange={handleChange}
                    checked={form.payment == "momo-qr"}
                    value="momo-qr"
                    name="payment"
                    />
                    momo qr code
                    <br />
                    <input
                    type="radio"
                    onChange={handleChange}
                    checked={form.payment == "momo-atm"}
                    value="momo-atm"
                    name="payment"
                    />
                    momo atm
                </>
                )}
            </div>
            </div>
            <button type="submit" className="btn btn-primary wow zoomIn">
            Send Message
            </button>
        </form>
        </>
    );
}

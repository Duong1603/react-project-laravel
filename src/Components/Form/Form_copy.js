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
      <h1 className="text-center wow fadeInUp mt-2">{data.lb.form_name}</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="row w-75 m-auto block-mobile">
          <div className="col">
            <div className="col-sm-11">
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
            <div className="col-sm-11">
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
            <div className="col-sm-11">
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
            <div className="col-sm-11">
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
            <button
              type="submit"
              className="btn btn-primary wow zoomIn mt-3 mb-3 btn-destop"
              style={{ margin: "0 auto" }}
            >
              Start
            </button>
          </div>
          <div className="col" id="">
            <h2 className="text-left">Booking summary</h2>
            <p className="col-sm-11">
              Via: <span>google meeting</span>
            </p>
            <p className="col-sm-11">
              Name:<span> {form.name} </span>
            </p>
            <p className="col-sm-11">
              Email:<span className="email-mobile"> {form.email} </span>
            </p>
            <p className="col-sm-11">
              Phone:<span> {form.phone} </span>
            </p>
            <p className="col-sm-11">
              Session:
              <span>
                {data.state.pick.length === 0
                  ? "Nothing "
                  : data.state.pick.map((item) => (
                      <>
                        <a href="# ">{item.title}</a>
                        <br />
                        Start: {item.start.getHours()}:{" "}
                        {item.start.getMinutes()}
                        <br />
                        End: {item.end.getHours()}: {item.end.getMinutes()}
                      </>
                    ))}
              </span>
            </p>
            {/* {parseInt(data.state.session) === 1 ? (
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
                Momo qr code
                <br />
                <input
                  type="radio"
                  onChange={handleChange}
                  checked={form.payment == "momo-atm"}
                  value="momo-atm"
                  name="payment"
                />
                Momo atm
              </>
            )} */}
            {/* <button
              type="submit"
              className="btn btn-primary wow zoomIn btn-mobile mb-3">
              Send Message
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
}

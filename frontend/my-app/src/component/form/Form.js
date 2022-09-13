import React from "react";

export default function Form() {
  return (
    <div>
      <div id="contact" className="contact">
        <div className="con_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Address"
                        type="type"
                        name="Address"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactusmess"
                        placeholder="Message"
                        type="type"
                        Message="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn my-3">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

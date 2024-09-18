import React, { Component } from "react";

export default function Contact() {
  return (
    <div className="container body-content contact">
      <h1 className="mb-3 text-center"><b>Contact Me!</b></h1>

      <form
        className="needs-validation"
        action="https://formsubmit.co/21cf21a5b8ab56a75a57936bb6cf5c64"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              First Name
            </label>
            <input
              name="First name"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              required
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Last Name
            </label>
            <input
              name="Last name"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Last Name"
              required
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
          <div className="col-sm-12">
            <label for="email" className="form-label">
              Email (Optional)
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="col-sm-12">
            <label for="phone" className="form-label">
              Phone Number (Optional)
            </label>
            <input
              name="phone"
              type="tel"
              className="form-control"
              id="phone"
              placeholder="123-456-7890"
            />
          </div>
          <div className="col-sm-12">
            <label for="commentTextArea" className="form-label">
              Comments/Inquires
            </label>
            <textarea
              name="message"
              className="form-control"
              id="commentTextArea"
              rows="10"
              required
            ></textarea>
            <div className="invalid-feedback">
              Valid comment/question is required.
            </div>
          </div>
          <div className="col-sm-12">
            <label for="uploadFile" className="form-label">
              Upload File (Optional)
            </label>
            <input
              name="attachment"
              accept="image/png, image/jpeg"
              className="form-control"
              type="file"
              id="uploadFile"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3" id="sendMessage">
          Submit
        </button>
        <hr />
        <footer>
          <p>© 2024 - Jeffery Hu</p>
        </footer>
        <input
          type="hidden"
          name="_next"
          value="https://jeffery05.github.io/Website/done.html"
        />
      </form>
      <div className="toast position-fixed bottom-0 start-50 translate-middle-x mb-3">
        <div
          id="sendMessage"
          className="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Jeffery</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Thank you for submitting your message. We will get back in touch
            soon!
          </div>
        </div>
      </div>
    </div>
  );
}

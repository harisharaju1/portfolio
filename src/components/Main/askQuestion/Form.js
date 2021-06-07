import React from "react";

function Form() {
  return (
    <form
      className="contact100-form validate-form"
      name="askQuestion"
      method="post"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="askQuestion" />
      <span className="contact100-form-title">Ask a Question</span>

      <div
        className="wrap-input100 rs1-wrap-input100 validate-input"
        data-validate="Name is required"
      >
        <span className="label-input100">Your Name</span>
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <span className="focus-input100" />
      </div>

      <div
        className="wrap-input100 rs1-wrap-input100 validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <span className="label-input100">Email</span>
        <input
          className="input100"
          type="text"
          name="email"
          placeholder="Enter your email addess"
        />
        <span className="focus-input100" />
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Question is required"
      >
        <span className="label-input100">Question</span>
        <textarea
          className="input100"
          name="question"
          placeholder="Your Question here..."
        />
        <span className="focus-input100" />
      </div>
      <div data-netlify-recaptcha="true" />
      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          <span>
            Submit
            <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true" />
          </span>
        </button>
      </div>
    </form>
  );
}

export default Form;

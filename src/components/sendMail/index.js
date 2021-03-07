import React from "react";
import { useForm } from "react-hook-form";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";


const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit =(data) => {
    console.log("data", data)
  }

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New message</h3>
        <Close className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && <p className="sendMail_error">Subject is required!</p>}

        <input
          ref={register({ required: true })}
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />
        {errors.message && <p className="sendMail_error">Message is required!</p>}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;

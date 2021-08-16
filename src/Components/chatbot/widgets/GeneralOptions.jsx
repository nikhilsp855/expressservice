import React from "react";

import Options from "./Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "Login",
      handler : props.actionProvider.handlelogin,
      id: 1
    },
    {
      name: "Register As customer",
      handler : props.actionProvider.handlecregister,
      id: 2

    },
    {
      name: "Register As Professional",
      handler : props.actionProvider.handlespregister,
      id: 3
    },
    {
        name: "Book a Service",
        handler : props.actionProvider.handlebook,

        id: 4
    },
    {
        name: "Cancle a service",
        handler : props.actionProvider.handlecancle,

        id: 5
    },
    {
      name: "Complaint about service",
      handler : props.actionProvider.handleContactInfo,

      id: 6
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
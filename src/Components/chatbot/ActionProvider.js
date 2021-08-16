class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  helloHandler = () => {

    const message = this.createChatBotMessage("Hello")
    this.setChatbotMessage(message)
  }

  handleContactInfo = () => {
    const message = this.createChatBotMessage(
      "If you need to speak to a real person, you can call 12 34 56 78 or mail your query at nikhilsp855@gmail.com",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );
    this.setChatbotMessage(message);


    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 2000,
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);

  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options,
      }

    );

    this.setChatbotMessage(message);
  };

  handlelogin = () => {

    const message = this.createChatBotMessage(
      "For Login you have to follow following steps",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.setChatbotMessage(message);
    const message1 = this.createChatBotMessage(
      `1) Click on Login tab 
         2) Enter Correct User name 
         3) Enter Correct Password `,
      {
        delay: 2000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message1);

    const message2 = this.createChatBotMessage(
      `If you forget password then contact to admin`,
      {
        delay: 4000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message2);

    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 6000,  
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);


  };
  handlecregister = () => {

    const message = this.createChatBotMessage(
      "For Register as customer you have to follow following steps",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.setChatbotMessage(message);
    const message1 = this.createChatBotMessage(
      `1) Click on Register tab 
         2) Enter User name 
         3) Enter Strong Password
         4) Confirm Password and click register. If both passwords are same then you will be sucessfully registered `,
      {
        delay: 2000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message1);

    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 4000,
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);

  }

  handlespregister = () => {

    const message = this.createChatBotMessage(
      "For Register as service provider you have to follow following steps",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.setChatbotMessage(message);
    const message1 = this.createChatBotMessage(
      `1) Click on Service Provider Register tab 
         2) Enter User name
         3) Enter your city and service name
         4) Enter Strong Password
         5) Upload necessary documentsand click register.`,
      {
        delay: 2000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message1);

    const message2 = this.createChatBotMessage(
      `After aproval from admin you will be sucessfully registered`,
      {
        delay: 4000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message2);

    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 6000,
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);

  }

  handlebook = () => {

    const message = this.createChatBotMessage(
      "For Booking Service follow the steps: ",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.setChatbotMessage(message);
    const message1 = this.createChatBotMessage(
      `1) Select City
         2) Select Service
         3) Select Service Provider 
         4) Add subservices in your cart
         5) Click on book service.`,
      {
        delay: 2000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message1);

    const message2 = this.createChatBotMessage(
      `After acceptance from Service provider, your service will be booked`,
      {
        delay: 4000,
        withAvatar: true,


      }
    );

    this.setChatbotMessage(message2);
    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 6000,
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);

  }

  handlecancle = () => {

    const message = this.createChatBotMessage(
      "Once your Order is accepted by Service Provider you can not cancle it",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }

    );
    this.setChatbotMessage(message);
    const message4 = this.createChatBotMessage(
      `Is there anything else i can assist you with?`,
      {
        delay: 2000,
        withAvatar: true,
        loading: true,
      }
    );

    this.setChatbotMessage(message4);


  }

  handlethank = () => {

    const message = this.createChatBotMessage("Thank you. Have an amazing day and stay safe & healthy during this unprecedented time",
      {
        delay: 500,
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      })
    this.setChatbotMessage(message)
  }



  setChatbotMessage = (message) => {

    this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }


}

export default ActionProvider;
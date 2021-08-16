class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase=message.toLowerCase()

      console.log(this.state)

      if(lowercase.includes("hi") || lowercase.includes("hello")){

          this.actionProvider.helloHandler()
      }

      if (
        lowercase.includes("options") ||
        lowercase.includes("help") ||
        lowercase.includes("do for me")
      ) {
        return this.actionProvider.handleOptions({ withAvatar: true });
      }
  
      if (
        lowercase.includes("talk") ||
        lowercase.includes("speak") ||
        lowercase.includes("real person") ||
        lowercase.includes("person") ||
        lowercase.includes("contact")
      ) {
        return this.actionProvider.handleContactInfo();
      }
      if (
        lowercase.includes("no") ||
        lowercase.includes("not")
      ) {
        return this.actionProvider.handlethank({ withAvatar: true });
      }

      if (
        lowercase.includes("book")
        
      ) {
        return this.actionProvider.handlebook();
      }

      if (
        lowercase.includes("cancle")
        
      ) {
        return this.actionProvider.handlecancle();
      }

      if (
        lowercase.includes("login")
        
      ) {
        return this.actionProvider.handlelogin();
      }

      if (
        (lowercase.includes("register") || lowercase.includes("signup")) && (lowercase.includes("customer"))
        
      ) {
        return this.actionProvider.handlecregister();
      }

      if (
        (lowercase.includes("register") || lowercase.includes("signup")) && (lowercase.includes("service provider") || lowercase.includes("professional") )
        
      ) {
        return this.actionProvider.handlespregister();
      }


      return this.actionProvider.handleOptions({ withAvatar: true });


    }

    
  }
  
  export default MessageParser;
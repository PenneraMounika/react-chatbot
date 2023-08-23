class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(this.state)
    
    if(this.state.messages[this.state.messages.length - 1].id === 1) {
      this.actionProvider.nameHandler(message);
    } else if(this.state.messages[this.state.messages.length - 1].id === 2) {
      this.actionProvider.ageHandler(message);
    }
  }
}

export default MessageParser;
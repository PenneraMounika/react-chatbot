class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  startHandler = () => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, this.createClientMessage("Got it!"), this.createChatBotMessage("Enter your Name", {id: 1})]
    }))
  }

  nameHandler = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, this.createChatBotMessage("Enter your Age", {id: 2, widget: "AgeSelector"})],
      name: name
    }))
  }

  ageHandler = (e) => {
    let age = e.target.previousElementSibling.value
    this.setState((prevState) => ({
      ...prevState,
      messages: [
        ...prevState.messages,
        this.createClientMessage(age),
        this.createChatBotMessage("Thank You. In 5 seconds the bot will exit."),
        this.createChatBotMessage("Your name is " + prevState.name + " aged " + age + " has been added to student system. You may now exit.", {delay: 5000})],
      age: age
    }))
  }
}

export default ActionProvider;
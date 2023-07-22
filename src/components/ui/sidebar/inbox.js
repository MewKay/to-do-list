const createInboxText = () => {
  const text = document.createElement("p");
  text.innerText = "Inbox";

  return text;
}

const createInboxContainer = () => {
  const container = document.createElement("div");
  container.id = "inbox";

  container.appendChild(createInboxText());

  return container;
}

const inbox = createInboxContainer();

export {
  inbox
};
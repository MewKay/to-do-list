const createInboxContainer = () => {
  const container = document.createElement("div");
  container.id = "inbox";

  return container;
}

const inbox = createInboxContainer();

export {
  inbox
};
const createPubSub = () => {
  let events = {};

  const subscribe = (eventName, functionToCall) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(functionToCall)
  }

  const unsubscribe = (eventName, functionToCall) => {
    if(!events[eventName])
      return;

    events[eventName] = events[eventName].filter(functionToDelete => functionToDelete !== functionToCall);
  }

  const publish = (eventName, data = undefined) => {
    if(!events[eventName])
      return;

    events[eventName].forEach(functionToCall => { functionToCall(data) });
  }

  return {
    subscribe,
    unsubscribe,
    publish
  };
}

const pubSub = createPubSub();

export {
  pubSub
}
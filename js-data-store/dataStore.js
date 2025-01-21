const dataStore = {
  subjects: {
    english: 0,
    tamil: 0,
    maths: 0,
    computerScience: 0,
    physics: 0,
  },
  subscribers: [],
  total: 0,
  average: 0,
};

function updateSubject(subject, marks) {
  if (dataStore.subjects[subject] !== undefined) {
    dataStore.subjects[subject] = marks;
    calculateTotalAndAverage();
    notifySubscribers();
    console.log(dataStore);
  } else {
    console.error(`Subject ${subject} does not exist in the data store.`);
  }
}

function calculateTotalAndAverage() {
  const subjects = Object.values(dataStore.subjects);
  dataStore.total = subjects.reduce((acc, marks) => acc + marks, 0);
  dataStore.average = subjects.length ? dataStore.total / subjects.length : 0;
}

function notifySubscribers() {
  dataStore.subscribers.forEach((callBack) => callBack());
}

function subscribe(subscriber) {
  if (typeof subscriber === "function") {
    dataStore.subscribers.push(subscriber);
  } else {
    console.error("Subscriber must be a function.");
  }
}

function unsubscribe(subscriber) {
  dataStore.subscribers = dataStore.subscribers.filter(
    (sub) => sub !== subscriber
  );
}

export { dataStore, updateSubject, subscribe, unsubscribe };
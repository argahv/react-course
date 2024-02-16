export const setItem = (name, value) => {
  if (!name) throw new Error("Local Storage requires name");

  const d = localStorage.setItem(name, JSON.stringify(value));
  return d;
};

export const getItem = (name) => {
  const d = localStorage.getItem(name);

  return JSON.parse(d);
};

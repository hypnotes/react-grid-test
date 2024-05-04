const notNullString = (value: string) => {
  return value === "null" ? "-" : value;
};

export default notNullString;

const getStringifiedInt = id => {
  let idx = `${id}`;
  if (idx.length === 1) {
    idx = `00${idx}`;
  } else if (idx.length === 2) {
    idx = `0${idx}`;
  }
  return idx;
};

export default {
  getStringifiedInt
};

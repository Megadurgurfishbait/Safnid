exports.resp = (res, statuscode, message) => {
  return res.status(statuscode).json({ message });
};

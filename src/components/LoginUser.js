async function loginUser({ email, password }) {
  var uuid = require("uuid");
  var id = uuid.v4();
  const response = { data: { jwt: id, username: email } };
  return response;
}
export default loginUser;

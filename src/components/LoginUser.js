async function loginUser({ email, userId }) {
  var uuid = require("uuid");
  var id = uuid.v4();
  const response = { data: { jwt: id, username: email, userId: userId } };
  return response;
}
export default loginUser;

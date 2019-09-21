const LoginAction = me => dispatch => {
  dispatch({
    type: "LOGIN",
    payload: { me }
  });
};

const OpenLogin = open => dispatch => {
  open
    ? dispatch({
        type: "OPEN"
      })
    : dispatch({
        type: "CLOSE"
      });
};

module.exports = { LoginAction, OpenLogin };

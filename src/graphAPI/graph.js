import gql from "graphql-tag";

export default class tahu {
  ME_QUERY() {
    return gql`
      query me($utoken: String) {
        me(utoken: $utoken) {
          _id
        }
      }
    `;
  }

  LOGIN_MUTATION() {
    return gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          message
          succes
        }
      }
    `;
  }
}

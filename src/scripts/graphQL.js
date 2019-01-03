const axios = require('axios');

function getMessage (email ){
}

function createMessage (input) {
 
}

function updateMessage ( id, input ) {

}

function createUser (user){
  let queryToSend = {
    query: 'query CreateUser($input: UserInput!){createUser(input: $input){id}}',
    variables: {
      input: {
      email: user.email,
      username: user.username,
      password: user.password,
      image: null
      }
    }
  }

  axios({
    url: 'http://localhost:5000/graphql', 
    method: 'post',
    data : queryToSend
    })
    .then(response => console.log(response.data.data.createUser.id))
    .catch(error => {
      console.error(error);
      this.setState({ error: 'Invalid email or password' });
    })
  }

module.exports = {
  createUser,
  createMessage,
  getMessage
}

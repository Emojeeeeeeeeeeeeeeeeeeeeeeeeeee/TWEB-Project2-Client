import axios from 'axios';
//let fetch = require('node-fetch')


function getMessage (email ){
}

function createMessage (input) {
 
}

function updateMessage ( id, input ) {

}


export function createUser (user){
  let queryToSend = {
    query: 'query CreateUser($input: UserInput!){createUser(input: $input){id}}',
    variables: {
      input: {
      email: user.email,
      username: user.username,
      password: user.password,
      }
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios({
    url: 'http://localhost:5000/graphql', 
    method: 'post',
    data : queryToSend
    })
    .then(response => response.data.data.createUser)
    .catch(error => {
      console.error(error);
      this.setState({ error: 'Invalid email or password' });
    })
  }

/*module.exports = {
  createUser,
  createMessage,
  getMessage
}*/

import axios from 'axios';
//let fetch = require('node-fetch')

function getMessage (email ) {
}

function getMessages () {
 
}

function createMessage (input) {
 
}

function updateMessage ( id, input ) {

}

export async function createUser (user){
  
  return await axios.post('http://localhost:5000/graphql', { 
    query: `query CreateUser($input: UserInput!){createUser(input: $input){id}}`,
    variables: {
      input: {
        email: user.email,
        username: user.username,
        password: user.password
      }
    },
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => res.data.data.createUser)

  /*return fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(queryToSend)
  })
  .then(res => console.log(res))
  .catch(err=> console.log("errors :", err))*/
}

/*module.exports = {
  createUser,
  createMessage,
  getMessage
}*/

let fetch = require('node-fetch')

function getMessage (email ){
}

function createMessage (input) {
 
}

function updateMessage ( id, input ) {

}

function createUser (user){
  let queryToSend = {
    query: "mutation CreateUser($input: UserInput!){createUser(input: $input){id}}",
    variables: {
      input: {
      email: user.email,
      username: user.username,
      password: user.password,
      image: null
      }
    }
  }
  
  fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(queryToSend)
  })
  .then(r => r.json())
  .then(r => console.log('data returned:', r))
  .catch(err=> console.log("erreurs :", err))
  
}

module.exports = {
  createUser,
  createMessage,
  getMessage
}

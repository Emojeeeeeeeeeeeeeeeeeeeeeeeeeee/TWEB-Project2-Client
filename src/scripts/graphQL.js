let fetch = require('node-fetch')


function getMessages(email) 
{
  const queryToSend = {
    
    query: "query GetMessages($email: String!){getMessages(email: $email){id}}",
    variables: {
      email: email
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


function createMessage (input) {
  const queryToSend = {
    query: "mutation CreateMessage($input: MessageInput){createMessage(input: $input){id}}",
    variables: {
      input: {
      content: input.content,
      author: input.author,
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

function deleteMessage(){
  
}

function createUser (user){
  const queryToSend = {
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

let t = {
  author:"coucou@test.com",
  content:"plz send only one"
}

createUser({
  email:"coucou2@coucou.com",
  password:"test",
  username:"test"
})
//createMessage(t);
//let email = "toto@tutu.tata"
//getMessages(email)
module.exports = {
  createUser,
  createMessage,
  getMessages
}

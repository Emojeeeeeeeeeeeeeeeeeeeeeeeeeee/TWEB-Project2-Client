import axios from 'axios';
//let fetch = require('node-fetch')


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
    query: "query CreateMessage($input: MessageInput){createMessage(input: $input){id}}",
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

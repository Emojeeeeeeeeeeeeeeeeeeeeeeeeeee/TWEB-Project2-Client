import axios from 'axios';
//let fetch = require('node-fetch')


function getMessage (email ){
}

export function getMessages(email, offset) {
  const queryToSend = {
    query: 'query GetMessagesFromDB($email: String!, $offset: Int!){getMessagesFromDB(email: $email, offset: $offset){id}}',
    variables: {
      email: email,
      offset: offset,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios( {
    url: 'http://localhost:5000/graphql', 
    method: 'post',
    data: queryToSend
  })
  .then(response => response.data)
  .then(response => console.log(response))
  .catch(error => {
    console.error(error);
  });
}

export function createMessage (author, content) {
  const queryToSend = {
    query: 'query CreateMessage($author: String!, $content: String!){createMessage(author: $author, content: $content){id}}',
    variables: {
      author: author,
      content: content,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios({
    url: 'http://localhost:5000/graphql',
    method: 'post',
    data: queryToSend
  })
  .then(response => console.log(response))
  .catch(error => {
    console.error(error);
  })
}

function updateMessage ( id, input ) {

}

export function createUser (user){
  const queryToSend = {
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

import axios from 'axios';
//let fetch = require('node-fetch')


function getMessage (email ){
}

export function getMessages(authorId, offset) {
  const queryToSend = {
    query: 'query GetMessagesFromDB($authorId: String!, $offset: Int!){getMessagesFromDB(authorId: $authorId, offset: $offset){id, like, content, author}}',
    variables: {
      authorId: authorId,
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
  .catch(error => {
    console.error(error);
  });
}

export function createMessage (authorId, content) {
  const queryToSend = {
    query: 'query CreateMessage($authorId: String!, $content: String!){createMessage(authorId: $authorId, content: $content){id}}',
    variables: {
      authorId: authorId,
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
  .then(response => response)
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

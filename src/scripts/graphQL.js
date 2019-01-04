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
    method: 'get',
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

export function deleteMessage(id, authorId){
  const queryToSend = {
    query: 'query  DeleteMessage(id: String, author: String){deleteMessage(id: $id, author: $authorid){id}}',
    variables: {
      input: {
      id: id,
      author : authorId,
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
    .then(response => response.data.data.deleteMessage)
    .catch(error => {
      console.error(error);
      this.setState({ error: 'Invalid email or password' });
    })
}

function updateMessage ( id, input ) {

}

export function createUser (email, username, password){
  const queryToSend = {
    query: 'query CreateUser(username: String!, password: String!, email: String!){createUser(username: $username, password: $password, email: $email){id}}',
    variables: {
      input: {
      email: email,
      username: username,
      password: password,
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


  createMessage("5c2e49d308001d4020b59891","To be deleted")

/*module.exports = {
  createUser,
  createMessage,
  getMessage
}*/

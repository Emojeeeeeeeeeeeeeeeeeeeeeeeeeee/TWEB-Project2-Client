import axios from 'axios';

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
  .then(response => response.data)
  .catch(error => {
    console.error(error);
  })
}

export function deleteMessage(id, authorId){
  const queryToSend = {
    query: 'query  DeleteMessage(messageId: String!, authorId: Stringü){deleteMessage(messageId: $id, authorId: $authorid){id}}',
    variables: {
      id: id,
      author : authorId
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
      this.setState({ error: 'Message not found ' });
    })
}

export function getUser(userId){
  const queryToSend = {
    query: 'query GetUser(userId: String!){getUser(userId: $userId)){id}}',
    variables: {
      userId: userId,
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
    .then(response => response.data.data.getUser)
    .catch(error => {
      console.error(error);
      this.setState({ error: 'User not found' });
    })
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
  .then(response => response)
  .catch(error => {
    console.error(error);
  });
}

export function createUser (email, username, password){
  const queryToSend = {
    query: 'query CreateUser(username: String!, password: String!, email: String!){createUser(username: $username, password: $password, email: $email){id}}',
    variables: {
      email: email,
      username: username,
      password: password,
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

  export function like(messageId, authorId){
    const queryToSend = {
      query: 'query Like(messageId: String!, authorId: String!){like(messageId: $messageId, authorId: $authorId){}}',
      variables: {
        messageId: messageId,
        authorId: authorId
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
      .then(response => response.data.data.like)
      .catch(error => {
        console.error(error);
        this.setState({ error: 'Can not like' });
      })
  }

  export function unlike(messageId, authorId){
    const queryToSend = {
      query: 'query Unlike(messageId: String!, authorId: String!){unlike(messageId: $messageId, authorId: $authorId){}}',
      variables: {
        messageId: messageId,
        authorId: authorId
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
      .then(response => response.data.data.like)
      .catch(error => {
        console.error(error);
        this.setState({ error: 'Can not unlike' });
      })
  }

  export function follow(targetId, userId){
    const queryToSend = {
      query: 'query Follow(targetId: String!, userId: String!){follow(targetId: $targetId, userId: $userId){}}',
      variables: {
        targetId: targetId,
        userId: userId
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
      .then(response => response.data.data.like)
      .catch(error => {
        console.error(error);
        this.setState({ error: 'Can not follow' });
      })
  }


  export function unfollow(targetId, userId){
    const queryToSend = {
      query: 'query Unollow(targetId: String!, userId: String!){unfollow(targetId: $targetId, userId: $userId){}}',
      variables: {
        targetId: targetId,
        userId: userId
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
      .then(response => response.data.data.like)
      .catch(error => {
        console.error(error);
        this.setState({ error: 'Can not unfollow' });
      })
  }



  /*
  let t = createMessage("5c2e49d308001d4020b59891","To be deleted")
  t.then(data => {
    console.log(data.id);
    deleteMessage(data.id,"5c2e49d308001d4020b59891")
  })
  */

/*module.exports = {
  createUser,
  createMessage,
  getMessage
}*/

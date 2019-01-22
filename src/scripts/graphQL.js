import axios from 'axios';

const URL = 'https://emojee-client.herokuapp.com/graphql';

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
    url: URL,
    method: 'post',
    data: queryToSend
  })
  .then(response => response.data.data.createMessage)
  .catch(error => {
    console.error(error);
  })
}

export function deleteMessage(messageId, authorId){
  const queryToSend = {
    query: 'query DeleteMessage($messageId: String!, $authorId: String!){deleteMessage(messageId: $messageId, authorId: $authorId)}',
    variables: {
      messageId: messageId,
      authorId : authorId
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios({
    url: URL, 
    method: 'post',
    data : queryToSend
    })
    .then(response => response.data.data.deleteMessage)
    .catch(error => {
      console.error(error);
    })
}

export function getUser(userId){
  const queryToSend = {
    query: 'query GetUser($userId: String!){getUser(userId: $userId){username, image, email, following, followers, id}}',
    variables: {
      userId: userId,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios({
    url: URL, 
    method: 'post',
    data : queryToSend
    })
    .then(response => response.data.data.getUser)
    .catch(error => {
      console.error(error);
    })
}

export function getUsersByIds(ids){
  const queryToSend = {
    query: 'query GetUsersByIds($ids: [String]!){getUsersByIds(ids: $ids){username, image, email, following, followers, id}}',
    variables: {
      ids: ids,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios({
    url: URL, 
    method: 'post',
    data : queryToSend
    })
    .then(response => response.data.data.getUsersByIds)
    .catch(error => {
      console.error(error);
    })
}

export function getMessages(authorId, offset) {
  const queryToSend = {
    query: 'query GetMessagesFromDB($authorId: String!, $offset: Int!){getMessagesFromDB(authorId: $authorId, offset: $offset){id, like, content, authorId}}',
    variables: {
      authorId: authorId,
      offset: offset,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios( {
    url: URL, 
    method: 'post',
    data: queryToSend
  })
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
}

export function getPersonnalMessages(userId, offset) {
  const queryToSend = {
    query: 'query GetMessagesOfUser($userId: String!, $offset: Int!){getMessagesOfUser(userId: $userId, offset: $offset){id, like, content, authorId}}',
    variables: {
      userId: userId,
      offset: offset,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios( {
    url: URL, 
    method: 'post',
    data: queryToSend
  })
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
}

export function getFavoriteMessages(userId, offset) {
  const queryToSend = {
    query: 'query GetFavoriteMessages($userId: String!, $offset: Int!){getFavoriteMessages(userId: $userId, offset: $offset){id, like, content, authorId}}',
    variables: {
      userId: userId,
      offset: offset,
    },
    headers: {
      'Content-type': 'application/json'
    }
  }

  return axios( {
    url: URL, 
    method: 'post',
    data: queryToSend
  })
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
}

export function createUser (email, username, password){
  const queryToSend = {
    query: 'query CreateUser($username: String!, $password: String!, $email: String!){createUser(username: $username, password: $password, email: $email){id}}',
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
    url: URL, 
    method: 'post',
    data : queryToSend
    })
    .then(response => response.data.data.createUser)
    .catch(error => {
      console.error(error);
    })
  }

  export function like(messageId, userId){
    const queryToSend = {
      query: 'query Like($messageId: String!, $userId: String!){like(messageId: $messageId, userId: $userId)}',
      variables: {
        messageId: messageId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.like)
      .catch(error => {
        console.error(error);
      })
  }

  export function unlike(messageId, userId){
    const queryToSend = {
      query: 'query Unlike($messageId: String!, $userId: String!){unlike(messageId: $messageId, userId: $userId)}',
      variables: {
        messageId: messageId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.unlike)
      .catch(error => {
        console.error(error);
      })
  }

  export function hasLike(messageId, userId){
    const queryToSend = {
      query: 'query HasLike($messageId: String!, $userId: String!){hasLike(messageId: $messageId, userId: $userId)}',
      variables: {
        messageId: messageId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.hasLike)
      .catch(error => {
        console.error(error);
      })
  }

  export function follow(targetId, userId){
    const queryToSend = {
      query: 'query Follow($targetId: String!, $userId: String!){follow(targetId: $targetId, userId: $userId)}',
      variables: {
        targetId: targetId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.follow)
      .catch(error => {
        console.error(error);
      })
  }


  export function unfollow(targetId, userId){
    const queryToSend = {
      query: 'query Unfollow($targetId: String!, $userId: String!){unfollow(targetId: $targetId, userId: $userId)}',
      variables: {
        targetId: targetId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.unfollow)
      .catch(error => {
        console.error(error);
      })
  }

  export function hasFollow(targetId, userId){
    const queryToSend = {
      query: 'query HasFollow($targetId: String!, $userId: String!){hasFollow(targetId: $targetId, userId: $userId)}',
      variables: {
        targetId: targetId,
        userId: userId
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.hasFollow)
      .catch(error => {
        console.error(error);
      })
  }

  export function getUserByEmail(email){
    const queryToSend = {
      query: 'query  GetUserByEmail($email: String!){getUserByEmail(email: $email){id, username, email, following, followers}}',
      variables: {
        email: email,
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.getUserByEmail)
      .catch(error => {
        console.error(error);
      })
  }

  export function getFollowers(userId, offset){
    const queryToSend = {
      query: 'query  GetFollowers($userId: String!, $offset: Int!){getFollowers(userId: $userId, offset: $offset){id}}',
      variables: {
        userId: userId,
        offset: offset,
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.getFollowers)
      .catch(error => {
        console.error(error);
      })
  }

  export function getFollowings(userId, offset){
    const queryToSend = {
      query: 'query GetFollowings($userId: String!, $offset: Int!){getFollowings(userId: $userId, offset: $offset){id}}',
      variables: {
        userId: userId,
        offset: offset,
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.getFollowings)
      .catch(error => {
        console.error(error);
      })
  }

  export function searchUser(pattern){
    const queryToSend = {
      query: 'query SearchUser($pattern: String!){searchUser(pattern: $pattern){username, image, email, following, followers, id}}',
      variables: {
        pattern: pattern,
      },
      headers: {
        'Content-type': 'application/json'
      }
    }
  
    return axios({
      url: URL, 
      method: 'post',
      data : queryToSend
      })
      .then(response => response.data.data.searchUser)
      .catch(error => {
        console.error(error);
      })
  }

  export function updateMood(userId, mood) {
    const queryToSend = {
      query: 'query ChangeImage($userId: String!, $mood: String!){changeImage(userId: $userId, mood: $mood){username, image, email, following, followers, id}}',
      variables: {
        userId: userId,
        mood: mood,
      },
      headers: {
        'Content-type': 'application/json'
      }
    }

    return axios({
      url: URL,
      method: 'post',
      data: queryToSend
    })
      .then(response => response.data)
      .catch(error => {
        console.error(error);
      });
  }

import graphql, { createUser, createMessage, deleteMessage, like, unlike, follow,unfollow, getUserByEmail, getFollowers, getFollowings } from '../scripts/graphQL';
import { assert,should,expect } from "chai";
import { string } from 'prop-types';


describe("We tests all our graphQL queries",  () =>{

  let targetId = null
  let authorId = null;
  let messageId = null;
  
  it("Should get a user form the DB (userA)",(done) => {
    getUserByEmail("toto@tutu.tata").then(data => {
      targetId = data.id
      assert.isString(targetId)
      done()
    })
  })

  it("Shoud create a new user in the DB (userB)", (done) => {
    createUser("testing@test.com","test","test").then(data => {
      authorId = data.id 
      assert.isString(authorId)
      done()
    })
  })

  it("Shoud not create a new user in the DB if he already exist", (done) => {
    createUser("testing@test.com","test","test").then(data => {
      let authorIdBis = data
      assert.isNull(authorIdBis)
      done()
    })
  })


  it("Should create a message for userB", (done) =>{
    createMessage(authorId,"Testing").then(data2 => {
      messageId = data2.id
      assert.equal(typeof(messageId),typeof(""))
      done();
    })
  })
  

  it("UserB shoud like the message he just wrote",(done) =>{
    like(messageId,authorId).then(data =>{
      assert.isTrue(data)
      done()
    })
  })

  
  it("UserB should follow userA ",(done) =>{
    follow(targetId,authorId).then(data =>{
      assert.isTrue(data)
      done()
    })
  })

  it("UserA have a follower",(done) =>{
    getFollowers(targetId).then(data =>{
      assert.isString(data[0].id)
      assert.equal(data[0].id,authorId)
      done()
    })
  })

  it("userB should have a followed person ",(done) =>{
    getFollowings(authorId).then(data => {
      assert.isString(data[0].id)
      assert.equal(data[0].id,targetId)
      done()
    })
  })

  it("userB shoud unfollow userA",(done) =>{
    unfollow(targetId,authorId).then(data =>{
      assert.isTrue(data)
      done()
    })
  })

  it("userA should not have a follower anymore",(done) => {
    getFollowers(targetId).then(data =>{
      console.log("followers", data)
      assert.isEmpty(data)
      done()
    })
  })

  it("UserB shoud not have a followed person anymore",(done) =>{
    getFollowings(authorId).then(data => {
      console.log("followd", data)
      assert.isEmpty(data)
      done()
    })
  })
  
  it("UserB should dislike the message he just liked",(done) =>{
    unlike(messageId,authorId).then(data =>{
      assert.isTrue(data)
      done()
    })
  })

  
  it("UserB shoud delete the message he just wrote", (done) => {
    deleteMessage(messageId,authorId).then(data => {
      assert.isTrue(data)
      done()
    })
  })

})

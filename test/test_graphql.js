import graphql, { createUser, createMessage, deleteMessage, like, unlike, follow,unfollow, getUserByEmail, getFollowers, getFollowings, getUser, getMessages } from '../src/scripts/graphQL';
import { assert,should,expect } from "chai";
import { string } from 'prop-types';


describe("We tests all our graphQL queries",  () =>{

  let userA;
  let userB;
  let messageId;
  
  it("Should be possible to retrieve a user from the database",(done) => {
    const userEmail = "toto@tutu.tata";
    getUserByEmail(userEmail).then(data => {
      const email = data.email
      userA = data;
      assert.equal(userEmail, email)
      done()
    })
  })

  it("Should be possible to create a new user", (done) => {
    const email = "testing@test.com";
    const username = "test";
    const password = "test";
    createUser(email,username,password)
    .then(data => {
      userB = data;
      assert.isNotNull(data)
      getUser(data.id)
      .then(data => {
        assert.equal(data.username, username);
        assert.equal(data.email, email);
        done()
      })
    })
  })

  it("Should not create a new user in the DB if he already exist", (done) => {
    createUser("testing@test.com","test","test").then(data => {
      assert.isNull(data)
      done()
    })
  })


  it("Should be possible to create a message", (done) =>{
    const messageContent = "Testing";
    createMessage(userB.id,messageContent).then(data => {
      assert.isNotNull(data);
      messageId = data.id;
      getMessages(userB.id, 0)
      .then(data => {
        data = data.getMessagesFromDB;
        assert.equal(data.length, 1)
        assert.equal(data[0].content, messageContent);
        done();
      })
    })
  })
  
  it("should be possible to like a message",(done) =>{
    like(messageId,userB.id).then(data =>{
      assert.isTrue(data)
      getMessages(userB.id, 0)
      .then(data => {
        data = data.getMessagesFromDB;
        assert.equal(data[0].like.length, 1);
        assert.equal(data[0].like[0], userB.id);
        done();
      })
    })
  })
  
  it("should be possible to unlike a message",(done) =>{
    unlike(messageId,userB.id).then(data =>{
      assert.isTrue(data)
      getMessages(userB.id, 0)
      .then(data => {
        data = data.getMessagesFromDB;
        assert.equal(data[0].like.length, 0);
        done();
      })
    })
  })

  
  it("should be possible to follow another user",(done) =>{
    follow(userA.id,userB.id).then(data =>{
      assert.isTrue(data)
      getUser(userA.id)
      .then(data => {
        console.log(userA)
        assert.equal(data.followers.length, userA.followers.length + 1);
        assert.isTrue(data.followers.includes(userB.id));
        getUser(userB.id)
        .then(data => {
          assert.equal(data.following.length, userB.followers.length + 1);
          assert.isTrue(data.following.includes(userA.id));
          done()
        })
      })
    })
  })

  it("should be possible to unfollow a user",(done) =>{
    unfollow(userA.id,userB.id).then(data =>{
      assert.isTrue(data)
      getUser(userA.id)
      .then(data => {
        assert.equal(data.followers.length, userA.followers.length);
        getUser(userB.id)
        .then(data => {
          assert.equal(data.following.length, userB.followers.length);
          done()
        })
      })
    })
  })

  
  it("should be possible to delete a message", (done) => {
    deleteMessage(messageId,userB.id).then(data => {
      assert.isTrue(data)
      getMessages(userB.id, 0)
      .then(data => {
        data = data.getMessagesFromDB;
        assert.isNull(data);
        done();
      })
    })
  })

})

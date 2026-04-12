import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint(conf.appwriteURL) 
//     .setProject(conf.appwriteProjectId);     

// const account = new Account(client);

// const user = await account.create({
//     userId: ID.unique(), 
//     email: 'email@example.com', 
//     password: 'password'
// });
// 
// rather than doing it here and making it messy to import business logic and ui 


//below are better code practices
export class AuthService{  //create a class 
  client = new Client();
  //clent needs endpoint and project id and rather than giving it here and wasting resources, create a constructor and only give endpoint and prdId when the object is called
  
  account; // just a variable as to create accout from new Account() we need client which we dont have rn
  
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client)
  }
  
  //creating a wrapper so that its easy to change vendors from appwrite to others
  // 
  async createAccount({ email, password, name }) {//using async cause we waiting for account to be created then go forward
    //it can fail here so catching error
    
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        // what we want is if account created might as well log the user in so call another method
        return this.login({email,password})
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email: email,
        password: password
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  async getCurrentUser() {
    try {
      await this.account.get()
    } catch (error) {
      console.log(error)
    }
    return null; //incase nothing is there in account.get ,, can also do if else in try
  }
  
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(error)
    }
  }
} 

const authService = new AuthService() // created and export object so that methods can be called directly on the object

export default authService

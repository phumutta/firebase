import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: "xxxxxxxxx",
  authDomain: "xxxxxxxxx",
  databaseURL: "xxxxxxxxx",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxxxxxx",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxxxx",
  measurementId: "xxxxxxxxx"

}

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
  }

  getAccount=async()=>{
   
  }


  async readOnce(id,read_Account_success,read_Account_fail)
  {
    
  }

  async readAll(read_Account_success,read_Account_fail)
  {
    
  }

  async readListening(read_Account_success,read_Account_fail)
  {
    
  }

  async deleteAccount(id,delete_Account_success,delete_Account_fail)
  {
    
  }

  async updateAccount(account,update_Account_success,update_Account_fail)
  {
    
  }



  async createAccount(Account,add_Account_success,add_Account_fail)
  {
    
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    
  }



}

const database = new Database();
export default database;

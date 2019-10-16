import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyDHqmRV-GCSLm6rEafUghiZNkGqjldZwGw",
    authDomain: "my-project-141ab.firebaseapp.com",
    databaseURL: "https://my-project-141ab.firebaseio.com",
    projectId: "my-project-141ab",
    storageBucket: "my-project-141ab.appspot.com",
    messagingSenderId: "1021450998064",
    appId: "1:1021450998064:web:4281cdb15fdd0c73e538f5",
    measurementId: "G-EJMF7C3DDJ"

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
  let getDoc=  firebase.firestore().collection('Account').doc(id).get().
  then(doc=>{
    if(doc.exists)
    {
      read_Account_success(doc.data());
    }
    else {
      read_Account_fail();
    }
  }).catch(
    read_Account_fail()
  );
  }

  async readAll(read_Account_success,read_Account_fail)
  {
  let getDoc=  firebase.firestore().collection('Account').get()
  .then(snapshot=>{
    if(snapshot.emtry){
      read_Account_fail();
      return;
    }
    snapshot.forEach(doc=>{
      read_Account_success(doc.data())
    })
  })
  .catch( read_Account_fail());
  }

  async readListening(read_Account_success,read_Account_fail)
  {
    let getDoc=  firebase.firestore().collection('Account').onSnapshot(
      snapshot=>{
      if(snapshot.emtry){
        read_Account_fail();
        return;
      }
      snapshot.forEach(doc=>{
        read_Account_success(doc.data())
      })
    }
  ).catch( read_Account_fail());
  }

  async deleteAccount(id,delete_Account_success,delete_Account_fail)
  {
    firebase.firestore().collection("Account").doc(id).delete().then(ref=>{delete_Account_success()}).catch(delete_Account_fail())

  }

  async updateAccount(id,account,update_Account_success,update_Account_fail)
  {
    firebase.firestore().collection("Account").doc(id).update(account)
  }



  async createAccount(Account,add_Account_success,add_Account_fail)
  {
    firebase.firestore().collection("Account").add(Account).then(ref=>{add_Account_success(ref.id)}).catch(add_Account_fail())
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    //set ชื่อ doc
    try {
      firebase.firestore().collection("Account").doc(Account.firstName).set(Account)
      add_Account_success("Ok");
    } catch (e) {
      add_Account_fail();
    } finally {

    }

  }



}

const database = new Database();
export default database;

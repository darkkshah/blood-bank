import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,ref,set,onValue , push } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseconfig";
import { signOut } from 'firebase/auth'; // Make sure to import signOut from the correct module

let auth = getAuth(app)
let db = getDatabase(app)

export let fbLogin=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                const referece = ref(db,`users/${id}`)
            
                onValue(referece,(data)=>{
                    if(data.exists()){
                        resolve(data.val())
                    }else{
                        reject("No Data Found")
                    }
                } )
            
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export let fbSignUp=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })
            
            }).catch(err=>{
                reject(err)
            })
        }
    })


}
export let fbAuth=()=>{
return new Promise((resolve,reject) => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        resolve(uid)
      } else {
        // User is signed out
        // ...
        reject("No User In Logged In")
      }
    });
})
}

export let fbGet=(nodeName:string,id?:any)=>{
    return new Promise((resolve,reject) => {
        const referece = ref(db,`${nodeName}/${id?id:""}`)
        onValue(referece,(data) => {
            if(data.exists()){
                resolve(Object.values(data.val()))
          }else{                                 
                reject(" No Data found :( ")
            }
        })
    })
}

export let fbAdd=(nodeName:string,body:any,id?:string)=>{
    return new Promise((resolve,reject) => {
        
        const TaskId = push(ref(db,`${nodeName}/`)).key
        body.id = TaskId

        const referece = ref(db,`${nodeName}/${body.id}`)
        set(referece,body).then(res => {   
            resolve("Data Send Successfully")
        }).catch(err => {
            reject(err)
        })
    })
}


export let fbDelete=()=>{}
export let fbEdit=()=>{}
export let fbGetById=()=>{}
export const fbLogOut = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve('Sign-out successful');
      })
      .catch((error) => {
        // An error happened.
        reject(error);
      });
  });
};

  
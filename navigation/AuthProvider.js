import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '1005209839431-s5hfs9j49i6t9u6e8ki7ckbcbeerrh2b.apps.googleusercontent.com',
});

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },

 
onGoogleButtonPress: async () => {
  //Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
   const userInfo = await GoogleSignin.signIn();

  // Create a Google credential with the token
  console.log('idToken', idToken)
   console.log('userinfo@@', userInfo)
   setUser(idToken)
  
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential

  return auth().signInWithCredential(googleCredential);

},


// signIn: async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     // this.setState({ userInfo });
//     console.log('userInfo', userInfo)
//   } catch (error) {
//     // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//     //   // user cancelled the login flow
//     // } else if (error.code === statusCodes.IN_PROGRESS) {
//     //   // operation (e.g. sign in) is in progress already
//     // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//     //   // play services not available or outdated
//     // } else {
//     //   // some other error happened
//     // }

   
//   }
// },

// signIn: async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// },





        // googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const { idToken } = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(googleCredential)
        //     // Use it only when user Sign's up,
        //     // so create different social signup function
        //     // .then(() => {
        //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //     //   //with the appropriate details.
        //     //   // console.log('current User', auth().currentUser);
        //     //   firestore().collection('users').doc(auth().currentUser.uid)
        //     //   .set({
        //     //       fname: '',
        //     //       lname: '',
        //     //       email: auth().currentUser.email,
        //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //     //       userImg: null,
        //     //   })
        //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //     //   .catch(error => {
        //     //       console.log('Something went wrong with added user to firestore: ', error);
        //     //   })
        //     // })
        //     //we need to catch the whole sign up process if it fails too.
        //     .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //     });
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },
        // fbLogin: async () => {
        //   try {
        //     // Attempt login with permissions
        //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        //     if (result.isCancelled) {
        //       throw 'User cancelled the login process';
        //     }

        //     // Once signed in, get the users AccesToken
        //     const data = await AccessToken.getCurrentAccessToken();

        //     if (!data) {
        //       throw 'Something went wrong obtaining access token';
        //     }

        //     // Create a Firebase credential with the AccessToken
        //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(facebookCredential)
        //     // Use it only when user Sign's up,
        //     // so create different social signup function
        //     // .then(() => {
        //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //     //   //with the appropriate details.
        //     //   console.log('current User', auth().currentUser);
        //     //   firestore().collection('users').doc(auth().currentUser.uid)
        //     //   .set({
        //     //       fname: '',
        //     //       lname: '',
        //     //       email: auth().currentUser.email,
        //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //     //       userImg: null,
        //     //   })
        //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //     //   .catch(error => {
        //     //       console.log('Something went wrong with added user to firestore: ', error);
        //     //   })
        //     // })
        //     //we need to catch the whole sign up process if it fails too.
        //     .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //     });
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            // .then(() => {
            //   //Once the user creation has happened successfully, we can add the currentUser into firestore
            //   //with the appropriate details.
            //   firestore().collection('users').doc(auth().currentUser.uid)
            //   .set({
            //       fname: '',
            //       lname: '',
            //       email: email,
            //       createdAt: firestore.Timestamp.fromDate(new Date()),
            //       userImg: null,
            //   })
            //   //ensure we catch any errors at this stage to advise us if something does go wrong
            //   .catch(error => {
            //       console.log('Something went wrong with added user to firestore: ', error);
            //   })
            // })
            //we need to catch the whole sign up process if it fails too.
            // .catch(error => {
            //     console.log('Something went wrong with sign up: ', error);
            // });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
//         signOut: async () => {
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//     this.setState({ user: null }); // Remember to remove the user from your app's state as well
//   } catch (error) {
//     console.error(error);
//   }
// },
signOut: async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    // setState({ user: null }); // Remember to remove the user from your app's state as well
    setUser(null)
  } catch (error) {
    console.error(error);
  }
},


      }}>
      {children}
    </AuthContext.Provider>
  );
};

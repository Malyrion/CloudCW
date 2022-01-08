import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  //current user to use anywere in application
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  //login to sign up the user 
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password) //dosent need to be firebase easy to implement with other bd
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }


  //the way firebase set up the current user and runs it when component mounted
  //notifies when user is set
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => { //use of unsubcribe to remove the listener once user authentified
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  //Content that we give to our provider which include following values
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    //render the children components once everything has loaded
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
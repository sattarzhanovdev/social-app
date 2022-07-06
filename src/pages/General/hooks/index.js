import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const UseGeneral = () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  
  const handleAuth = () => {
    signInWithPopup(auth, provider)
  }

  const handleRegistWithEmail = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      updateProfile(res.user, {
        displayName: name,
      })
    } catch {
    }
  }



  return {
    handleAuth,
    handleRegistWithEmail
  }
}
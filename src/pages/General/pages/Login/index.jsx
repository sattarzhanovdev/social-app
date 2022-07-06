import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { UseGeneral } from '../../hooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const { handleAuth } = UseGeneral()

  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  const auth = getAuth()
  const handleLoginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    }catch{

    }
  }

  return (
    <div>
      <Box>
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} style={{height: '100vh'}}>
          <Card style={{padding: '3rem', textAlign: 'center', boxShadow: 0}}>
            <Typography variant='h4' paddingBottom={'15px'}>
              Войти в аккаунт
            </Typography>
            <Typography variant='p'>
              Пожалуйста, войдите в аккаунт
            </Typography>
            <form 
              style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
                marginTop: '25px'
              }}
            >
              <input 
                type={'email'} 
                placeholder='Ваше электронная почта' 
                style={{
                  width: '250px', 
                  height: '35px',
                  marginBottom: '15px', 
                  paddingLeft: '15px',
                  outline: 'none',
                  border: '1px solid #DDDDDD',
                  borderRadius: '5px'
                }}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
              <input 
                type={'password'} 
                placeholder='Пароль' 
                style={{
                  width: '250px', 
                  height: '35px',
                  marginBottom: '15px', 
                  paddingLeft: '15px',
                  outline: 'none',
                  border: '1px solid #DDDDDD',
                  borderRadius: '5px'
                }}
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
              <button
                style={{
                  width: '270px',
                  height: '40px',
                  background: '#4CA5FF',
                  color: 'white',
                  border: 0,
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}  
                onClick={() => handleLoginWithEmail()}
              >Войти</button>
            </form>
            <button
              style={{
                width: '270px',
                height: '40px',
                marginTop: '25px',
                background: '#4CA5FF',
                border: 0,
                borderRadius: '5px',
                color: 'white'
              }}
                onClick={handleAuth}
            >
              <FcGoogle /> Войти с Google
            </button>
            <p>
              <Link 
                to={'/auth/register'}
                style={{
                  color: '#ADADAD',
                  textDecoration: 'none'
                }}
              >
                Регистрация
              </Link>
            </p>
          </Card>
        </Grid>
      </Box>
    </div>
  )
}

export default Login
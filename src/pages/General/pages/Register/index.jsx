import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { UseGeneral } from '../../hooks'

const Register = () => {
  const { handleRegistWithEmail } = UseGeneral()

  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  return (
    <div>
      <Box>
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} style={{height: '100vh'}}>
          <Card style={{padding: '3rem', textAlign: 'center', boxShadow: 0}}>
            <Typography variant='h4' paddingBottom={'15px'}>
              Регистрация
            </Typography>
            <Typography variant='p'>
              Для входа в чат, вам нужно авторизоваться
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
                type={'text'} 
                placeholder='Ваше имя' 
                style={{
                  width: '250px', 
                  height: '35px',
                  marginBottom: '15px', 
                  paddingLeft: '15px',
                  outline: 'none',
                  border: '1px solid #DDDDDD',
                  borderRadius: '5px'
                }}
                onChange={e => setName(e.target.value)}
              />
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
              >Регистрация</button>
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
                onClick={handleRegistWithEmail(name, email, password)}
            >
              <FcGoogle /> Регистрация с Google
            </button>
            <p>
              <Link 
                to={'/auth/login'}
                style={{
                  color: '#ADADAD',
                  textDecoration: 'none'
                }}
              >
                Войти в аккаунт
              </Link>
            </p>
          </Card>
        </Grid>
      </Box>
    </div>
  )
}

export default Register
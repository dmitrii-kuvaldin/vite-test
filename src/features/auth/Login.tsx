import { FC, useState } from 'react'
// import cn from 'classnames'
import styles from './Login.module.css'
import MyButton from '../../components/myButton/MyButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from './authAction';
import { Navigate, useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';

const Login: FC = () => {
  const { user } = useAppSelector(state => state.auth)
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch()
  // навигация внутри логике
  const navigate = useNavigate()
  function handleLogin() {
    // если при создании нового массива использовать переменные с данными в таком синтаксисе
    // то название переменной - станет ключом нового массива
    console.log({ username, password });
    dispatch(login({ username, password }))
    //navigate перенаправляет пользователь
    navigate('/')
  }

  // const fields = [{
  //   label: 'login',
  //   name: 'login',
  //   type: 'text',
  //   value: ''
  // }]

  if (user) {
    return <Navigate to='/' />
  }
  return (
    <div>
      {/* <Form fields={fields} onSubmit={(e) => console.log(e)} /> */}
      <p>username: 'kminchelle'</p>
      <p>password: '0lelplR'</p>
      <input type="text" placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <MyButton text='войти' onClick={handleLogin} />
    </div>
  )
}

export default Login

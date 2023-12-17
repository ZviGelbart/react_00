import './App.css'
import Layout from './Layout'
import Login from './login'

function App() {

const isLogin = () => {
  const useData = localStorage.getItem('userData')
  if(!useData){
    return false
  }
  return true
}


return (
  <div>
    {!isLogin() &&<Login/>}
    {isLogin() && <Layout/>}
  </div>
  )
}

export default App

import RootRouter from './routes/RootRouter'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App

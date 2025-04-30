import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import Form from  './components/Form.tsx';
import Header from './components/Header.tsx';
// https://react.dev/learn/what-is-react
// https://vitejs.dev/guide/features.html#hot-module-replacement
// https://vitejs.dev/guide/api-javascript.html#vite-dev-server
// https://vitejs.dev/guide/features.html#hot-module-replacement-hmr

// https://vitejs.dev/guide/features.html#hot-module-replacement-hmr
// https://react.dev/learn/hot-reloading-react-components
function App() {
  const [count, setCount] = useState(-1)

  return (
  <>
  <Header />
  <Router>
  <Routes>
  <Route path="/" element={<h1>Home</h1>} />
  <Route path="/form" element={<Form />} />
  </Routes>
  </Router>
</>
  )
}

export default App

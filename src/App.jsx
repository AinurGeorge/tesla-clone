import { useState } from 'react'
import Header from './components/header/Header';
import Backdrop from './components/backdrop/Backdrop';
import Sidebar from './components/sidebar/Sidebar'

function App({ children }) {
 const [showSidebar, setShowSidebar] = useState(false)
 return (
  <>
    {showSidebar && (
      <>
        <Backdrop onClick={() => setShowSidebar(false)} />
        <Sidebar setShowSidebar={setShowSidebar} />
      </>
    )}
    <main className={showSidebar ? 'blur-content' : ''}>
      <Header setShowSidebar={setShowSidebar} />
      {children}
    </main>
  </>
 );
}

export default App;

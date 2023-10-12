import { useState } from 'react';
import { Book } from './components/Book/Book';
import { Context } from './Context/Context';

function App() {
  const [isPlaying, setIsPlaying]: React.ComponentState = useState(false);

  return (
    <Context.Provider
      value={{
        isPlaying,
        setIsPlaying,
      }}
    >
      <Book />
    </Context.Provider>
  );
}

export default App;

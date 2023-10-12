import { useState } from 'react';
import { Book } from './components/Book/Book';
import { Soundtrack } from './components/BookFooter/Soundtrack';
import { Context } from './Context/Context';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

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

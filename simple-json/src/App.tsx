import React from 'react';
import Header from './components/Header';
import Stack from './components/Stack';

function App() {
  const headerProp: any = {
    spacing: 2,
    direction:"row",
    wrap:false
  }
  return (
    <div className="App">
      <Header />
      <Stack headerProp >
        <textarea>1</textarea>
        <textarea>2</textarea>
      </Stack>
    </div>
  );
}

export default App;

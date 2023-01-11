import React from 'react';
import Button, { ButtonProps } from './components/Button';
import Footer from './components/Footer';
import Header, { HeaderProps } from './components/Header';
import Jsons, { JsonProps } from './components/Jsons';
import Stack, { StackProps } from './components/Stack';
import TextArea, { TextAreaProps } from './components/TextArea';

function App() {
  let state = {
    input: "",
    output: {}
  };

  const headerProps: HeaderProps = {
    title: "Simple Jason Viewer"
  }

  const stackProps: StackProps = {
    spacing: 4,
    direction:"row",
    wrap:false
  }

  const jsonsProps: JsonProps = {
    jsons: [
      {id: 1, content: "asdasda", title:"Enter Json"},
      {id: 2, content: "button"},
      {id: 3, content: "", title:"Enter Json"}
    ]
  }

  return (
    <div className="container">
      <Header {...headerProps} />
      <Stack {...stackProps} >
        <Jsons {...jsonsProps}/>
      </Stack>
      <Footer />
    </div>
  );
}

export default App;

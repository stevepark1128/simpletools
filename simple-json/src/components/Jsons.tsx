import React from 'react'
import Button, { ButtonProps } from './Button'
import TextArea, { TextAreaProps } from './TextArea'

export declare interface JsonProps {
  jsons: any[];
}

const Jsons = ({jsons}: JsonProps) => {
  console.log(jsons); 
  const textAreaProps: TextAreaProps = {
      rows: 50,
      cols:50,
      value:'',
      title:''
    }
  const buttonProps: ButtonProps = {
    color: 'green',
    text:'Parse',
    onClick: (e:any) => {
      console.log(jsons[0].content)
      jsons[2].content = jsons[0].content
    }
  }

  return (
    <>
      {jsons.map((json: any)=> {
            if(json.id !== 2) {
               const value = {value: json.content, title: json.title}
               const props = {...textAreaProps, ...value}
               return <TextArea key={json.id} {...props} ></TextArea>
            } else {
              return <div>
                  <div><Button key={json.id} {...buttonProps}/></div>
              </div>
            }
      })}
    </>
  )
}

export default Jsons

import React,{useState} from 'react'

export default function TextForrm(props) {

  const handleUpClick= () =>{
    // console.log("up was clicked");
    let newText = Text.toUpperCase()
    setText(newText)
    props.alert('Converted to uppercase', 'success')

  }
  const handleLoClick= () =>{
    // console.log("up was clicked");
    let newText = Text.toLowerCase()
    setText(newText)
    props.alert('Converted to lowercase', 'success')
  }
  const handleOnChange= (event) =>{
    // console.log("up was clicked");
    setText(event.target.value)

  }

  const [Text, setText] = useState("");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3" >
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'black' , color: props.mode === 'light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>

    </div>
    <div className="container">
      <h2 className='my-3'>Your text summary</h2>
      <p>You have {Text.split(" ").length} words and {Text.length} charachters.</p>
      <p>You can read it in {0.08 * Text.split(" ").length} minits.</p>
      <h2>Peview</h2>
      <p>{Text.length>1?Text:"Enter some text above."}</p>
    </div>
    </>
  )
}

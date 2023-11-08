import { FaClipboard } from 'react-icons/fa'
import { useForm } from './useForm'
import { useState } from 'react'
import { getRandomChar, getSpecialChar } from './util'
import toast from 'react-hot-toast'
function App() {
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: true,
    symbol: true,
  })

  const [result,setResult]=useState('')
  const fieldsArray=[
    {
      field:values.capital,
      getChar:()=>getRandomChar(65,90)
    },
    {
      field:values.small,
      getChar:()=>getRandomChar(97,122)
    },
    {
      field:values.number,
      getChar:()=>getRandomChar(48,57)
    }
    ,
    {
      field:values.symbol,
      getChar:()=>getSpecialChar()
    }
  ]
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    let generatedPassword='';
    const checkedFields=fieldsArray.filter(({field})=>field)
    for(let i=0;i<values.length;i++){
      const index=Math.floor(Math.random()*checkedFields.length)
      const letter=checkedFields[index]?.getChar()
      if(letter){
        generatedPassword+=letter
      }
    }
    if(generatedPassword){
      setResult(generatedPassword)
    }
    else{
      toast.error('Please select atleast one option')
    }
  }
  const handleClipboard=async()=>{
    if(result){
      await navigator.clipboard.writeText(result)
      toast.success('copied to clipboard')
    }
    else{
      toast.error('Password empty')
    }

  }
  return (
    <section>
      <div className="container">
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 character" readOnly value={result}/>
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input type="number" id="length" min={6} name='length' value={values.length} onChange={setValues} />
            </div>
            <div className="field">
              <label htmlFor="capital">Upper Case</label>
              <input type="checkbox" id="capital" name='capital' checked={values.capital} onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="small">Lower case</label>
              <input type="checkbox" id="small" name='small' checked={values.small} onChange={setValues} />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input type="checkbox" id="number" name='number' checked={values.number} onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input type="checkbox" id="symbol" name='symbol' checked={values.symbol} onChange={setValues}/>
            </div>
          </div>
          <button type='submit'>Generate password</button>
        </form>
      </div>
    </section>
  )
}

export default App
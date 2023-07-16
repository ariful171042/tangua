

const InputEmail = ({placeholder,type}) => {
  return (
    <div className="mt-2 mb-2">
        <input type="email" required id='fristName' placeholder={placeholder} className='w-60 border border-green-400 rounded-md p-2 text-lg focus:outline-none focus:shadow-md focus:border-2'/>
    </div>
  )
}

export default InputEmail;
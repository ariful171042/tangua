
const InputText = ({placeholder,type,numberType,emailType,phone,email}) => {
  return (
    <div className='mt-1 mb-2 flex flex-col gap-3'>
        <input type="text" required  placeholder={placeholder} className='w-60 border border-green-400 rounded-md p-2 text-lg focus:outline-green-400 focus:shadow-md focus:border-none'/>
        
    </div>
  )
}

export default InputText;
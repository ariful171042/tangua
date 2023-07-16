
import InputText from './form/InputText'

const From = ({fristname}) => {
  return (
    <div >
        <InputText placeholder={"Your Name"} email={"your email"} phone={"your number"} emailType={"email"} numberType={"number"}/>
    </div>
  )
}

export default From;
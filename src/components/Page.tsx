import HelloWorld from "./HelloWorld"
import logo from "./../assets/logo.png"

export default () => {
  return (
    <div> 
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
  )
}

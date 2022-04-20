import HelloWorld from "./HelloWorld"
import logo from "./../assets/logo.png"
import { Card } from "./Card/Card"

export default () => {
  return (
    <div> 
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        <Card borderRadius={false} primary={true}>YOLO</Card>
    </div>
  )
}

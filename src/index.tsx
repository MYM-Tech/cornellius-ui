import { App } from 'vue'
import components from "./App/index"

const plugin = {
    install (Vue: App) {
      for (const component in components) {
          Vue.component(component)
      }
    }
  }
  
export default plugin;
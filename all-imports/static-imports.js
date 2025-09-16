import * as Components from './components/index.js'

for (const [name, component] of Object.entries(Components)) {
  console.log(name, component())
}

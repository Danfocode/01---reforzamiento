import './style.css'
import './Bases/08-imp-exp.ts'
import { getHeroByOwner } from './Bases/08-imp-exp.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Hola Mundo</h1>

  </div>
`
console.log (getHeroByOwner('DC'))

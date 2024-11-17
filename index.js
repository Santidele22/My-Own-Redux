import { reducer } from './src/reducer.js'

const ACTIONS = [
  { type: 'CREATE_NOTE' },
  { type: 'UPDATE_NOTE', id: 1, content: 'Hello word' }
]
const state = ACTIONS.reduce(reducer, undefined)

console.log(state)

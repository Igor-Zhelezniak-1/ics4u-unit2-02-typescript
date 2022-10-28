/**
 * The program
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-17
 */

import SecondStack from './secondStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const stack = new SecondStack()

// Input and Process
while (true) {
  const input = prompt('Enter a number (! to leave): ')

  if (input === '!') {
    break
  } else {
    const number = parseInt(input)
    if (isNaN(number)) {
      console.log(`${input} isn't number`)
    } else {
      stack.Push(number)
    }
  }
}
let tempStack = stack.getStack()
console.log(tempStack)

console.log('Exit!')
stack.popNumber()
tempStack = stack.getStack()
console.log(tempStack)

console.log('\nDone.')


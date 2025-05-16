// keyof
interface UserCard {
  name: string
  age: number
  cardTitle: string
  cardDesc: string
}

type T4 = keyof UserCard

// 'name' | 'age' | 'cardTitle' | 'cardDesc'
const a: T4 = 'name'


// 泛型 
// value extends keyof obj
function getValue<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key]
}

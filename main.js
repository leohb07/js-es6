const users = [
  { name: 'leonardo', age: 23, housers: 5, city: 'Sao Paulo' },
  { name: 'Carlos', age: 42, housers: 6, city: 'EUA' },
  { name: 'Eduardo', age: 12, housers: 2, city: 'Paris' },
  { name: 'Valeria', age: 32, housers: 1,city: 'EUA' }
]

const houserForUsers = users.reduce((count, item) => count + item.housers, 0)

const cityWithUsers = users.reduce((acc, item) => {
  if(!acc[item.city]) {
    acc[item.city] = [item]
  } else {
    acc[item.city].push(item)
  }
}, {})

const usersForMap = users.map((item) => item.name)

const usersOlds = users.filter((item) => item.age > 20 && item.housers > 2)

console.log(houserForUsers)
console.log(usersForMap)
console.log(cityWithUsers)
console.log(usersOlds)
import { Client, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Client).values([
    { id: 1, name: 'John', age: 30, isActive: true },
    { id: 2, name: 'Jane', age: 25, isActive: false },
    { id: 3, name: 'Bob', age: 40, isActive: true },
    { id: 4, name: 'Alice', age: 35, isActive: false },
    { id: 5, name: 'Eve', age: 20, isActive: true },
  ])

  console.log('Seeded!')
}

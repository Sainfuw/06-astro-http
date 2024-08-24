import { Client, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Client).values([
    { name: 'John', age: 30, isActive: true },
    { name: 'Jane', age: 25, isActive: false },
    { name: 'Bob', age: 40, isActive: true },
    { name: 'Alice', age: 35, isActive: false },
    { name: 'Eve', age: 20, isActive: true },
  ])

  console.log('Seeded!')
}

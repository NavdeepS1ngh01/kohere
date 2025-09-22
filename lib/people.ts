// src/lib/people.ts
export interface Person {
  id: number
  name: string
  title: string
  bio: string
  src: string
}

export const peopleData: Person[] = [
  {
    id: 1,
    name: "Rajpreet Singh",
    title: "Founder",
    bio: "Hello",
    src: "/team/rajpreet.jpg",
  },
  {
    id: 2,
    name: "Navdeep Singh",
    title: "Founder",
    bio: "Hello",
    src: "/team/navdeep.jpg",
  },
]

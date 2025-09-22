// src/app/about/page.tsx
'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { peopleData } from '@/lib/people'

export default function About(){
  return (
    <>
      <Navbar />
      <section className={`patrick-hand-regular about-herosection`}>
        <h1>About Us</h1>
        <p>Hong Kong based software development company</p>
      </section>
      <section className={`patrick-hand-regular about-teamsection`}>
        <p>Meet our team!</p>
        <div className="team-member">
          {peopleData.map(person => (
            <div key={person.id} className="member-card">
              <Image
                src={person.src}
                alt={`Image of ${person.name}`}
                width={100}
                height={100}
              />
              <p>{person.name}</p>
              <p>{person.title}</p>
              <p>{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

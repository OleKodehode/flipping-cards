import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FlipCard from '@/component/FlipCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <FlipCard
        frontContent={
        <div>
          <p>
            Click on Card to turn it arround
          </p>
        </div>}
        backContent={
          <div>
            <ul>
              <li>
                1
              </li>
              <li>
                2
              </li>
              <li>
                3
              </li>
            </ul>
          </div>
        }
      />
      <FlipCard
        frontContent={<div>Front content</div>}
        backContent={<div>Back content</div>}
      />
      <FlipCard
        frontContent={
        <div>
          <h2>
            Hvor mye content kan man få i et kort?
          </h2>
          <ul>
            <li>
              Det er mye man kan gjøre!
            </li>
            <li>
              Men holder størrelsen seg lik på begge sider?
            </li>
            <li>
              Trykk for å finn ut!
            </li>
          </ul>
        </div>
      }
        backContent={
        <div>
          <p>
            Om man bruker riktig CSS vil det gjøre det, ellers blir det feil som her!
          </p>
        </div>
        }
      />
      </main>
    </>
  )
}

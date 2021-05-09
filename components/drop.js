import React, { useState } from 'react';
import Image from 'next/image'
import Arrow from './arrow'

export default function Drop() {

    const [place, setPlace] = useState('?????');
    const [message, setMessage] = useState('good luck!')

    let goodMessages = [
      "you did it! 🔥",
      "sHEEE 😜",
      "let's goooo 🚀",
      "dreams do come true ✨",
      "woot woot 🥳",
      "pop off! 🙌",
      "BREAKING NEWS: You're copping a pack, sources tell WOJ 🚨",
      "we got a BIG BALLER up in here! 💥"
    ]

    let badMessages = [
      "big L 🥺",
      "you thought 😭",
      "get out the line scrub 🤬",
      "can't even get a fake pack drop 🥴",
      "rebound pack pls 🥺",
      "go read a book 😓",
      "you should find a new hobby 💩",
      "you're probably a Clippers fan, huh 🤡",
      "well that was anti-climatic ☹️",
      "sorry, maybe next drop 🤕",
      "this is starting to get sad 🥱"
    ]

    let getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);
    

    let getPlace = () => {
      let number = getRandomArbitrary(1,150000)
      getMessage(number)
      return <span key={Math.random()} class="animate__animated animate__fadeIn animate__slower font-bold">{number}</span>
    }

    let getMessage = (number) => {
      let note = ""
      if(number > 76000){
        note = badMessages[getRandomArbitrary(0,10)]
      }
      else{
        note = goodMessages[getRandomArbitrary(0,7)]
      }
      setMessage(<span key={Math.random()} class="animate__animated animate__fadeIn animate__slower">{note}</span>)
    }

    return (
      <div class="mt-24">

        <div id="drop" name="drop" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">drop</h1>
          <div class="border-b border-black"></div>
        </div>

        <div class="grid grid-cols-2 mt-24">

          <div class="col-start-1 col-span-1 mb-4">
            <button onClick={() => {setPlace(getPlace())}}
            class="transform active:translate-y-1 duration-200 border-2 border-b-4 border-black focus:outline-none rounded-full py-2 px-8 font-bold bg-red-300 hover:bg-red-400">
              simulate drop
            </button>
          </div>

          <div class="col-span-1 col-start-1 border-2 border-black leading-8 p-8">
            <p class="font-bold">the drop</p>
            <div class="grid grid-cols-4">
              <p class="col-span-4">number of users in line ahead of you: {place}</p>
              <p class="col-span-4 border-b border-black my-4"></p>
              <p class="col-span-4 col-start-1">message: {message}</p>

            </div>
          </div>
    
          <div class="col-span-1 ml-36 animate__animated hover:animate__headShake">
          <Image
              src="/throwdowns.png"
              alt="Throwdowns Pack"
              height={196}
              width={196}
              quality={100}
              layout="intrinsic"
            />
          </div>
  
        </div>
        <div class="mt-56 mx-96 pl-6">
          <Arrow target="pack"/>
        </div>
      </div>
    )
  }
import React, { useState } from 'react';
import Image from 'next/image'

export default function Drop() {

    const [place, setPlace] = useState('?????');
    const [message, setMessage] = useState('good luck!')

    let goodMessages = [
      "you did it! 🔥",
      "sHEESH 😜",
      "let's goooo 🚀",
      "dreams do come true ✨",
      "woot woot 🥳"
    ]

    let badMessages = [
      "big L 🥺",
      "you thought 😭",
      "get out the line scrub 🤬",
      "can't even get a fake pack drop 🥴",
      "go read a book 😓"
    ]

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function getPlace() {
      let number = getRandomArbitrary(1,325000)
      getMessage(number)
      return <span key={Math.random()} class="animate__animated animate__fadeIn animate__slow font-bold">{number}</span>
    }

    function getMessage(number) {
      let note = ""
      if(number > 67500){
        note = badMessages[getRandomArbitrary(0,4)]
      }
      else{
        note = goodMessages[getRandomArbitrary(0,4)]
      }
      setMessage(<span key={Math.random()} class="animate__animated animate__fadeIn animate__slow">{note}</span>)
    }

    return (
      <div class="grid grid-cols-2 mt-12">

        <div class="col-start-1 col-span-1 mb-4">
          <button onClick={() => {setPlace(getPlace())}}
          class="border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-purple-300">
            simulate drop
          </button>
        </div>

        <div class="col-span-1 col-start-1 border-2 border-black leading-8 p-8">
          <p class="font-bold">the drop</p>
          <div class="grid grid-cols-4">
            <p class="col-span-3">number of users in line ahead of you: {place}</p>
            <p class="col-span-3 col-start-1">message: {message}</p>

          </div>
        </div>
  
        <div class="col-span-1 ml-48 animate__animated hover:animate__headShake">
         <Image
            src="/pack_cool_cats.png"
            alt="Cool Cats Pack"
            height={196}
            width={196}
            quality={100}
            layout="intrinsic"
          />
        </div>
  

      </div>
    )
  }
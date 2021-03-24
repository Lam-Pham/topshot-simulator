import React, { useState } from 'react';
import Image from 'next/image'

export default function Drop() {

    const [place, setPlace] = useState('?????');

    function getRandomArbitrary(min, max) {
      let number = Math.round(Math.random() * (max - min) + min);
      let message = ""
      if(number > 67500){
        message = "😭"
      }
      else{
        message = "🎉"
      }
      return <span key={Math.random()} class="animate__animated animate__fadeIn animate__slow font-bold">{number}</span>
    }

    return (
      <div class="grid grid-cols-2 mt-12">

        <div class="col-start-1 col-span-1 mb-4">
          <button onClick={() => {setPlace(getRandomArbitrary(1,325000))}}
          class="border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-purple-300">
            simulate drop
          </button>
        </div>

        <div class="col-span-1 col-start-1 border-2 border-black leading-8 p-8">
          <p class="font-bold">the drop</p>
          <div class="grid grid-cols-4">
            <p class="col-span-3">number of users in line ahead of you: {place}</p>
            <p class="col-span-3 col-start-1">message: you're in!</p>

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
import React, { useState } from 'react';

export default function Drop() {

    const [place, setPlace] = useState('?????');
    const [message, setMessage] = useState('good luck!')

    function getRandomArbitrary(min, max) {
      let number = Math.round(Math.random() * (max - min) + min);
      if(number > 67500){
        setMessage("try again. 😭 😭 😭")
      }
      else{
        setMessage("you're in! 🎉 🎉 🎉")
      }
      return number
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
            <p class="col-span-3">number of users in line ahead of you: <span class="font-bold">{place}</span></p>
            <p class="col-span-1"> </p>

          </div>
        </div>
  
        <p class="col-span-1 ml-12 text-5xl leading-tight">{message}</p>
  

      </div>
    )
  }
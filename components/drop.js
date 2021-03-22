import React, { useState } from 'react';

export default function Drop() {

    const [place, setPlace] = useState('?????');

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    return (
      <div class="grid grid-cols-2 mt-12">

        <div class="col-start-1 col-span-1 mb-4">
          <button onClick={() => setPlace(getRandomArbitrary(1,325000))}
          class="border-2 border-black bg-white rounded-full py-2 px-8 font-bold transform hover:-translate-y-2 hover:shadow-2xl duration-300">
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
  
        <p class="col-span-1 ml-12 text-5xl leading-tight">you got<span class="underline text-yellow-500">18.1%</span> the 2021 All-Star pack.</p>
  

      </div>
    )
  }
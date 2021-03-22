import React, { useState } from 'react';
import coolCats from "../public/coolCats.json";
import base from "../public/base.json";

export default function Pack() {

    const [momentOne, setMomentOne] = useState(['???','']);
    const [momentTwo, setMomentTwo] = useState(['???','']);
    const [momentThree, setMomentThree] = useState(['???','']);
    const [momentFour, setMomentFour] = useState(['???','']);
    const [coolCat, setCoolCat] = useState(['???','']);

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function getRandomBase(){
        let key = getRandomArbitrary(1,300001)
        return base[key][0]
    }

    function getRandomCoolCat(){
        let key = getRandomArbitrary(1,75001)
        return coolCat[key]
    }

    return (
      <div class="grid grid-cols-3 mt-96 gap-x-36 gap-y-36">

        <div class="col-span-1 col-start-1 border-2 border-black leading-8 p-8">
            <button onClick={() => setMomentOne(getRandomBase())}
            class="border-2 border-b-4 focus:outline-none active:translate-y-1 transform duration-200 border-black bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200">
                {momentOne[1]}
            </button>
        </div>

        <div class="col-span-1 border-2 border-black leading-8 p-8">
            <button onClick={() => setcoolCat(getRandomCoolCat())} 
            class="border-2 border-b-4 focus:outline-none active:translate-y-1 transform duration-200 border-black bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200">
                {coolCat[0]}
            </button>
        </div>

        <div class="col-span-1 border-2 border-black leading-8 p-8">
            <button onClick={() => setMomentTwo({momentTwo}[1]=getRandomBase())} 
            class="border-2 border-b-4 focus:outline-none active:translate-y-1 transform duration-200 border-black bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200">
                {momentTwo}
            </button>
        </div>

        <div class="col-span-1 border-2 border-black leading-8 p-8">
            <button onClick={() => setMomentThree(getRandomBase())} 
            class="border-2 border-b-4 focus:outline-none active:translate-y-1 transform duration-200 border-black bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200">
                {momentThree[0]}
            </button>
        </div>

        <div class="col-span-1 border-2 border-black leading-8 p-8">
            <button onClick={() => setMomentFour(getRandomBase())} 
            class="border-2 border-b-4 focus:outline-none active:translate-y-1 transform duration-200 border-black bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200">
                {momentFour[0]}
            </button>
        </div>

      </div>
    )
  }
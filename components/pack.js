import React, { useState, useEffect } from 'react';
import coolCats from "../public/coolCats.json";
import threeFive from "../public/threeFive.json";
import twelve from "../public/twelve.json";
import four from "../public/four.json";


export default function Pack() {

    const [momentOne, setMomentOne] = useState('???\n\n');
    const [momentTwo, setMomentTwo] = useState('???\n\n');
    const [momentThree, setMomentThree] = useState('???\n\n');
    const [momentFour, setMomentFour] = useState('???\n\n');
    const [coolCat, setCoolCat] = useState('???\n\n');

    const resetPack = () => {
        setMomentOne('???\n\n');
        setMomentTwo('???\n\n');
        setMomentThree('???\n\n');
        setMomentFour('???\n\n');
        setCoolCat('???\n\n');
    }

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function getRandomBaseSerial(){
        let number = getRandomArbitrary(1,1000)
        if (number < 954){
            return getRandomBaseThreeFive()
        }else if (number < 993){
            return getRandomBaseTwelve()
        }else {
            return getRandomBaseFour()
        }
        
    }

    function getRandomBaseFour(){
        let key = getRandomArbitrary(1,4)
        let b = four[key][0]
        let serial = four[key][1]
        return <p key={Math.random()} class="animate__animated animate__flip">{b}<br/>{serial}</p>
    }

    function getRandomBaseTwelve(){
        let key = getRandomArbitrary(1,8)
        let b = twelve[key][0]
        let serial = twelve[key][1]
        return <p key={Math.random()} class="animate__animated animate__flip">{b}<br/>{serial}</p>
    }

    function getRandomBaseThreeFive(){
        let key = getRandomArbitrary(1,38)
        let b = threeFive[key][0]
        let serial = threeFive[key][1]
        return <p key={Math.random()} class="animate__animated animate__flip">{b}<br/>{serial}</p>
    }

    function getRandomCoolCat(){
        let key = getRandomArbitrary(1,5)
        let serial = getRandomArbitrary(1,15000)
        let cc = coolCats[key][0]
        if (cc == "Shai Gilgeous-Alexander"){
            cc = <span class="text-xs">{cc}</span>
        }
        return <p key={Math.random()} class="animate__animated animate__flip">{cc} #{serial}/15000</p>
    }

    return (
      <div class="grid grid-cols-3 mt-96 gap-x-36 gap-y-36">
        
            <div class="col-start-1 col-span-1 mb-4">
            <button onClick={() => resetPack()}
            class="border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-purple-300">
                simulate pack
            </button>
            </div>
        
            <button onClick={() => setMomentOne(getRandomBaseSerial())}
            class="whitespace-pre-wrap col-span-1 col-start-1 border-2 border-b-4 focus:outline-none border-black py-24 px-16 font-bold hover:bg-grey-300">
                {momentOne}
            </button>

            <button onClick={() => setCoolCat(getRandomCoolCat())} 
            class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-24 px-16 font-bold hover:bg-blue-300">
                {coolCat}
            </button>

            <button onClick={() => setMomentTwo(getRandomBaseSerial())} 
            class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-24 px-16 font-bold hover:shadow-xl hover:bg-gray-300">
                {momentTwo}
            </button>
        
            <button onClick={() => setMomentThree(getRandomBaseSerial())} 
            class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-24 px-16 font-bold hover:bg-gray-300">
                {momentThree}
            </button>

            <button onClick={() => setMomentFour(getRandomBaseSerial())} 
            class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-24 px-16 font-bold hover:bg-gray-300">
                {momentFour}
            </button>

      </div>
    )
  }
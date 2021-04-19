import React, { useState, useEffect } from 'react';
import coolCats from "../public/coolCats.json";
import threeFive from "../public/threeFive.json";
import twelve from "../public/twelve.json";
import four from "../public/four.json";
import Moment from './moment';


export default function Pack() {

    const [momentOne, setMomentOne] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n\n');
    const [momentTwo, setMomentTwo] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n\n');
    const [momentThree, setMomentThree] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n\n');
    const [momentFour, setMomentFour] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n\n');
    const [coolCat, setCoolCat] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n\n');

    const [disableMomentOne, setDisableMomentOne] = useState(false);
    const [disableMomentTwo, setDisableMomentTwo] = useState(false);
    const [disableMomentThree, setDisableMomentThree] = useState(false);
    const [disableMomentFour, setDisableMomentFour] = useState(false);
    const [disableCoolCat, setDisableCoolCat] = useState(false);

    const resetPack = () => {
        setMomentOne(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentTwo(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentThree(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentFour(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/><br/></p>);
        setCoolCat(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/><br/></p>);
        setDisableMomentOne(false);
        setDisableMomentTwo(false);
        setDisableMomentThree(false);
        setDisableMomentFour(false);
        setDisableCoolCat(false);
    }

    let getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);

    let getRandomBaseSerial = () => {
        let number = getRandomArbitrary(1,1000)
        if (number < 954){
            return getRandomBaseThreeFive()
        }else if (number < 993){
            return getRandomBaseTwelve()
        }else {
            return getRandomBaseFour()
        }    
    }

    let getRandomBaseFour = () => {
        let key = getRandomArbitrary(1,4)
        let b = four[key][0]
        let serial = four[key][1]
        return <p key={Math.random()} class="animate__animated animate__flipInY">{b}<br/>{serial}</p>
    }

    let getRandomBaseTwelve = () => {
        let key = getRandomArbitrary(1,8)
        let b = twelve[key][0]
        let serial = twelve[key][1]
        return <p key={Math.random()} class="animate__animated animate__flipInY">{b}<br/>{serial}</p>
    }

    let getRandomBaseThreeFive = () => {
        let key = getRandomArbitrary(1,38)
        let b = threeFive[key][0]
        let serial = threeFive[key][1]
        return <p key={Math.random()} class="animate__animated animate__flipInY underline">{b}<br/>{serial}</p>
    }

    let getRandomMomentAndSerial = () => {
        let key = getRandomArbitrary(1,5)
        let serial = getRandomArbitrary(1,15000)
        let cc = coolCats[key][0]
        let src = coolCats[key][2]
        if (cc == "Shai Gilgeous-Alexander"){
            cc = <span class="text-xs">{cc}</span>
        }
        return <div>
                <p key={Math.random()} class="animate__animated animate__flipInY">{cc}<br/>#{serial}/15000</p>
                <video class="mt-4" loop="" autoplay="" playsinline="" preload="auto"><source src={src} type="video/mp4"></source></video>
                </div> 
    }

    return (
      <div class="mt-24">

            <div id="pack" name="pack" class="space-y-4">
                <h1 class="text-4xl 2xl:pb-1">pack</h1>
                <div class="border-b border-black"></div>
            </div>
           
            <div class="mb-8 mt-24">
                <button onClick={() => resetPack()}
                class="transform active:translate-y-1 duration-200 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold bg-purple-200 hover:bg-purple-400">
                    simulate pack
                </button>
            </div>

            <div class="grid grid-cols-3 gap-x-24 gap-y-16 mr-24">
                <Moment handleClick={() => {setMomentOne(getRandomBaseSerial()); setDisableMomentOne(true)}} disabled={disableMomentOne}
                class="whitespace-pre-wrap col-span-1 col-start-1 border-2 border-b-4 focus:outline-none border-black py-16 px-8 font-bold disabled:bg-gray-300 hover:bg-gray-300"
                content={momentOne}/>

                <Moment handleClick={() => {setCoolCat(getRandomMomentAndSerial()); setDisableCoolCat(true)}} disabled={disableCoolCat} 
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-blue-300 hover:bg-blue-300"
                content={coolCat}/>

                <Moment handleClick={() => {setMomentTwo(getRandomBaseSerial()); setDisableMomentTwo(true)}} disabled={disableMomentTwo}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-16 px-8 font-bold disabled:bg-gray-300 hover:bg-gray-300"
                content={momentTwo}/>
                
                <Moment handleClick={() => {setMomentThree(getRandomBaseSerial()); setDisableMomentThree(true)}} disabled={disableMomentThree}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-16 px-8 font-bold disabled:bg-gray-300 hover:bg-gray-300"
                content={momentThree}/>
                
                <Moment handleClick={() => {setMomentFour(getRandomBaseSerial()); setDisableMomentFour(true)}} disabled={disableMomentFour}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-16 px-8 font-bold disabled:bg-gray-300 hover:bg-gray-300"
                content={momentFour}/>
            </div>
      </div>
    )
  }
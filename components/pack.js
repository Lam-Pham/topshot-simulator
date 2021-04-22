import React, { useState, useEffect } from 'react';
import mgle_base from "../public/mgle_base.json";
import mgle_rare from "../public/mgle_rare.json";
import Moment from './moment';


export default function Pack() {

    const [momentOne, setMomentOne] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentTwo, setMomentTwo] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentThree, setMomentThree] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentFour, setMomentFour] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentFive, setMomentFive] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [special, setSpecial] = useState('\n\n\n\n\n\n???\n\n\n\n\n\n\n');

    const [disableMomentOne, setDisableMomentOne] = useState(false);
    const [disableMomentTwo, setDisableMomentTwo] = useState(false);
    const [disableMomentThree, setDisableMomentThree] = useState(false);
    const [disableMomentFour, setDisableMomentFour] = useState(false);
    const [disableMomentFive, setDisableMomentFive] = useState(false);
    const [disableSpecial, setDisableSpecial] = useState(false);

    const resetPack = () => {
        setMomentOne(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentTwo(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentThree(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentFour(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentFive(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setSpecial(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setDisableMomentOne(false);
        setDisableMomentTwo(false);
        setDisableMomentThree(false);
        setDisableMomentFour(false);
        setDisableMomentFive(false);
        setDisableSpecial(false);
    }

    let getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);

    let getRandomBaseSerial = () => {
        let number = getRandomArbitrary(1,1000)
        if (number < 369){
            return getRandomBase(0,14)
        }else if (number < 565){
            return getRandomBase(1,15)
        }else if (number < 638){
            return getRandomBase(2,7)
        }else if (number < 802){
            return getRandomBase(3,39)
        }else if (number < 845){
            return getRandomBase(4,13)
        }else if (number < 927){
            return getRandomBase(5,39)
        }else if (number < 978){
            return getRandomBase(6,40)
        }else if (number < 993){
            return getRandomBase(7,17)
        }else if (number < 998){
            return getRandomBase(8,21)
        }else {
            return getRandomBase(9,29)
        }    
    }

    let getRandomBase = (type, max) => {
        let key = getRandomArbitrary(0,max)
        let name = mgle_base[type][key][0]
        let serial = mgle_base[type][key][1]
        let src = mgle_base[type][key][2]
        return <div>
            <p key={Math.random()} class="animate__animated animate__flipInY">{name}<br/>{serial}</p>
            <video class="mt-5" loop="" autoplay="" playsinline="" preload="auto"><source src={src} type="video/mp4"></source></video>
            </div>
    }

    let getMgle = () => {
        let number = getRandomArbitrary(1,100)
        console.log(number)
        if (number > 72){
            return getRandomMomentAndSerial(true, 0)
        }else{
            return getRandomMomentAndSerial(true, 1)
        }
    }

    let getRandomMomentAndSerial = (both, type) => {
        let key = getRandomArbitrary(0,26)
        let serial = getRandomArbitrary(1,499)
        if (both == false){
            serial = '??'
        }
        let name = mgle_rare[type][key][0]
        let src = mgle_rare[type][key][2]
        console.log(name, src)
        if (name.length > 16){
            name = <span class="text-xs">{name}</span>
        }
        return <div>
                <p key={Math.random()} class="animate__animated animate__flipInY">{name}<br/># {serial}/499</p>
                <video class="mt-4" loop="" autoplay="" playsinline="" preload="auto"><source src={src} type="video/mp4"></source></video>
                </div> 
    }

    return (
      <div class="mt-24">

            <div id="pack" name="pack" class="space-y-4">
                <h1 class="text-4xl 2xl:pb-1">pack</h1>
                <div class="border-b border-black"></div>
            </div>
           
            <div class="mb-8 mt-24 space-x-8">
                <button onClick={() => resetPack()}
                class="inline transform active:translate-y-1 duration-200 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold bg-yellow-200 hover:bg-yellow-300">
                    simulate pack
                </button>
                <p class="inline border-b-2 border-black">screenshot and share your simulated pack opening!</p>
            </div>

            <div class="grid grid-cols-3 gap-x-12 gap-y-12 mr-24">
                <Moment handleClick={() => {setMomentOne(getRandomBaseSerial()); setDisableMomentOne(true)}} disabled={disableMomentOne}
                class="whitespace-pre-wrap col-span-1 col-start-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentOne}/>

                <Moment handleClick={() => {setSpecial(getMgle()); setDisableSpecial(true)}} disabled={disableSpecial} 
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-yellow-100 hover:bg-yellow-200"
                content={special}/>

                <Moment handleClick={() => {setMomentTwo(getRandomBaseSerial()); setDisableMomentTwo(true)}} disabled={disableMomentTwo}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentTwo}/>
                
                <Moment handleClick={() => {setMomentThree(getRandomBaseSerial()); setDisableMomentThree(true)}} disabled={disableMomentThree}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentThree}/>
                
                <Moment handleClick={() => {setMomentFour(getRandomBaseSerial()); setDisableMomentFour(true)}} disabled={disableMomentFour}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentFour}/>

                <Moment handleClick={() => {setMomentFive(getRandomBaseSerial()); setDisableMomentFive(true)}} disabled={disableMomentFive}
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentFive}/>
            </div>
      </div>
    )
  }
import React, { useState, useEffect } from 'react';
import throwdowns_base from "../public/throwdowns_base.json";
import throwdowns_rare from "../public/throwdowns_rare.json";
import Moment from './moment';


export default function Pack() {

    const [momentOne, setMomentOne] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentTwo, setMomentTwo] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentThree, setMomentThree] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentFour, setMomentFour] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [momentFive, setMomentFive] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');
    const [special, setSpecial] = useState('\n\n\n\n\n???\n\n\n\n\n\n\n');

    const [disableMomentOne, setDisableMomentOne] = useState(false);
    const [disableMomentTwo, setDisableMomentTwo] = useState(false);
    const [disableMomentThree, setDisableMomentThree] = useState(false);
    const [disableMomentFour, setDisableMomentFour] = useState(false);
    const [disableMomentFive, setDisableMomentFive] = useState(false);
    const [disableSpecial, setDisableSpecial] = useState(false);

    const resetPack = () => {
        setMomentOne(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentTwo(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentThree(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentFour(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setMomentFive(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
        setSpecial(<p key={Math.random()} class="animate__animated animate__flipInY"><br/><br/><br/><br/><br/>???<br/><br/><br/><br/><br/><br/><br/></p>);
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
        if (number < 547){
            return getRandomBase(0,29)
        }else if (number < 640){
            return getRandomBase(1,8)
        }else if (number < 799){
            return getRandomBase(2,23)
        }else if (number < 879){
            return getRandomBase(3,30)
        }else if (number < 891){
            return getRandomBase(4,5)
        }else if (number < 901){
            return getRandomBase(5,7)
        }else if (number < 986){
            return getRandomBase(6,81)
        }else if (number < 992){
            return getRandomBase(7,91)
        }else if (number < 996){
            return getRandomBase(8,6)
        }else if (number < 997){
            return getRandomBase(9,5)
        }else if (number < 998){
            return getRandomBase(10,3)
        }else {
            return getRandomBase(11,14)
        }    
    }

    let getRandomBase = (type, max) => {
        let key = getRandomArbitrary(0,max)
        let name = throwdowns_base[type][key][0]
        let serial = throwdowns_base[type][key][1]
        let src = throwdowns_base[type][key][2]
        return <div>
            <p key={Math.random()} class="animate__animated animate__flipInY">{name}<br/>{serial}</p>
            <video class="mt-5" loop="" autoplay="" playsinline="" preload="auto"><source src={src} type="video/mp4"></source></video>
            </div>
    }

    let getRandomMomentAndSerial = () => {
        let key = getRandomArbitrary(0,44)
        let serial = getRandomArbitrary(1,1800)
        let name = throwdowns_rare[key][0]
        let src = throwdowns_rare[key][1]
        if (name.length > 16){
            name = <span class="text-xs">{name}</span>
        }
        return <div>
                <p key={Math.random()} class="animate__animated animate__flipInY">{name}<br/>#{serial}/1800</p>
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
                class="inline transform active:translate-y-1 duration-200 border-2 border-b-4 border-black focus:outline-none rounded-full py-2 px-8 font-bold bg-red-300 hover:bg-red-400">
                    simulate pack
                </button>
                <p class="inline border-b-2 border-black">screenshot and share your pack!</p>
            </div>

            <div class="grid grid-cols-3 gap-x-12 gap-y-12 mr-24">
                <Moment handleClick={() => {setMomentOne(getRandomBaseSerial()); setDisableMomentOne(true)}} disabled={disableMomentOne}
                class="whitespace-pre-wrap col-span-1 col-start-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-gray-100 hover:bg-gray-100"
                content={momentOne}/>

                <Moment handleClick={() => {setSpecial(getRandomMomentAndSerial()); setDisableSpecial(true)}} disabled={disableSpecial} 
                class="whitespace-pre-wrap col-span-1 border-2 border-b-4 focus:outline-none border-black py-4 px-4 font-bold disabled:bg-red-200 hover:bg-red-300"
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
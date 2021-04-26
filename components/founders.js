import Link from 'next/link'
import Person from './person.js'
import founders from "../public/founders.json";

export default function Founders() {

    return (
      <div class="mt-32">

        <div id="founders" name="founders" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">founders</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-3 gap-x-16 gap-y-16 mt-24">
          {founders.map(founder => <Person id={founder.id} username={founder.username} type={founder.type} info={founder.info} message={founder.message} color={founder.color}/>)}
        </div>
        <div class="space-x-4 mt-20 2xl:mt-16 mx-52 2xl:mx-72">
          <Link href="/thankshomie"><button class="inline-block col-start-2 col-span-1 transform active:translate-y-1 duration-200 2xl:mt-0 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200 text-sm">donate to become a founder!</button></Link>
          <Link href="/helpwanted"><button class="mb-72 inline-block col-start-2 col-span-1 2xl:mb-56 mb-20 transform active:translate-y-1 duration-200 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200 text-sm">...or contribute to become one!</button></Link>
        </div>
      </div>
    )
  }
  
import Link from 'next/link'

export default function Founders() {
    return (
      <div class="mt-32">

        <div id="founders" name="founders" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">founders</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-3 gap-x-24 gap-y-16 mt-24">
                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-yellow-300">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"i'm very unemployed"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-red-300">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Khai</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    not selling my Luka SS :(<br/><br/>
                    <span class="font-bold">"sHeeee"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-blue-300">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">ChoMama</a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    Lebron no-look 3<br/><br/>
                    <span class="font-bold">"shout out OlympusDao"</span>

                </p>

        </div>
        <div class="space-x-4 mt-9 2xl:mt-16 mx-52 2xl:mx-72">
          <Link href="/thankshomie"><button class="inline-block col-start-2 col-span-1 transform active:translate-y-1 duration-200 2xl:mt-0 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-red-400 bg-red-300 text-sm">donate to become a founder!</button></Link>
          <Link href="/helpwanted"><button class="inline-block col-start-2 col-span-1 2xl:mb-56 mb-20 transform active:translate-y-1 duration-200 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-yellow-300 bg-yellow-200 text-sm">...or contribute to become one!</button></Link>
        </div>
      </div>
    )
  }
  
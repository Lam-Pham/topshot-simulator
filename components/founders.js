import Link from 'next/link'

export default function Founders() {
    return (
      <div class="mt-32">

        <div name="founders" class="space-y-4">
          <h1 class="text-4xl ">founders</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-3 gap-x-24 gap-y-16 mt-24">
                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-yellow-300">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"yo yooo"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-red-300">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite moment</span><br/>
                    Alex Caruso block<br/><br/>
                    <span class="font-bold">"sHEE"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-blue-300">
                  <div class="invisible">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"yo yooo"</span>
                    </div>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-green-300">
                  <div class="invisible">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"yo yooo"</span>
                  </div>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-blue-300">
                  <div class="invisible">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"yo yooo"</span>
                  </div>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 hover:bg-purple-300">
                <div class="invisible">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"yo yooo"</span>
                    </div>
                </p>

                <Link href="/thankshomie"><button class="col-start-2 col-span-1 mb-24 transform active:translate-y-1 duration-200 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-red-400 bg-red-300">donate to become a founder!</button></Link>
                
        </div>
      </div>
    )
  }
  
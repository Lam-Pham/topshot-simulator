import Link from 'next/link'

export default function Founders() {
    return (
      <div class="mt-32">

        <div id="founders" name="founders" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">founders</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-3 gap-x-16 gap-y-16 mt-24">
                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-yellow-200">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Lam</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Gobert his own card <br/><br/>
                    <span class="font-bold">"i'm very unemployed"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-green-100">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Isaiah K. ♥ <span class="text-xs font-normal">domain provider</span></a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    my first Tyler Herro<br/><br/>
                    <span class="font-bold">"i'm nice at spicy uno"</span>

                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 pl-8 bg-blue-200">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Slippery_scoops13</a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    S1 Lonzo full-court dime<br/><br/>
                    <span class="font-bold text-sm">"i am more than my account value"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-pink-200">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">BothTeamsPlayedHard</a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    Vince Carter S1 3<br/><br/>
                    <span class="font-bold">"G00DBURG3R RULES"</span>

                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-purple-200">
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Khai</a><br/><br/>
                    <span class="font-bold">tragic TS memory</span><br/>
                    not selling my Luka SS :(<br/><br/>
                    <span class="font-bold">"sHeeee"</span>
                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-red-200">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">ChoMama</a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    Lebron no-look 3<br/><br/>
                    <span class="font-bold">"shout out OlympusDao"</span>

                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-blue-200">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Trungy</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    selling Julius Randle<br/><br/>
                    <span class="font-bold">"145 lmao"</span>

                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-yellow-200">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Topshot King</a><br/><br/>
                    <span class="font-bold">favorite TS moment</span><br/>
                    Lebron tribute dunk<br/><br/>
                    <span class="font-bold">"hodl for years 💎 &nbsp;🙌 &nbsp;"</span>

                </p>

                <p class="col-span-1 text-sm border-2 border-b-4 border-black py-8 px-8 bg-green-100">
                  
                  <a href="nbatopshot.com" target="_blank" class="font-bold hover:underline">Thong</a><br/><br/>
                    <span class="font-bold">favorite TS memory</span><br/>
                    pulling a Lebron no look 3<br/><br/>
                    <span class="font-bold">"sub to TrashKatz on YouTube"</span>

                </p>

        </div>
        <div class="space-x-4 mt-20 2xl:mt-16 mx-52 2xl:mx-72">
          <Link href="/thankshomie"><button class="inline-block col-start-2 col-span-1 transform active:translate-y-1 duration-200 2xl:mt-0 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200 text-sm">donate to become a founder!</button></Link>
          <Link href="/helpwanted"><button class="mb-72 inline-block col-start-2 col-span-1 2xl:mb-56 mb-20 transform active:translate-y-1 duration-200 -mt-12 border-2 border-b-4 border-black focus:outline-none bg-white rounded-full py-2 px-8 font-bold hover:bg-gray-200 text-sm">...or contribute to become one!</button></Link>
        </div>
      </div>
    )
  }
  
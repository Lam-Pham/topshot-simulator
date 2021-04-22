import Image from 'next/image'
import Arrow from './arrow'

export default function Landing() {

  return (
    <div>
      <div name="landing" class="space-y-6">
        <span class="block 2xl:text-xl text-base invisible">probably not best practice</span>
        <div class="border-b border-black"></div>
      </div>
      <div class="mt-24">
        <p class="2xl:text-6xl text-5xl">Simulate NBA Top Shot <span class="border-b-4 border-red-500">drops</span>  +  <span class="border-b-4 border-blue-500">packs</span> !</p>
        <br/>
        <p class="text-3xl">featured pack: <span class="border-b-4 border-yellow-500">Premium Pack</span></p>
      </div>

      <div class="grid grid-cols-3 mt-36">
        <div class="col-span-1 animate__animated hover:animate__headShake">
          <Image
              src="/all_star_game.png"
              alt="All Star Game Pack"
              height={196}
              width={196}
              quality={100}
              layout="intrinsic"
            />
        </div>
        <div class="col-span-1 animate__animated hover:animate__headShake">
          <Image
              src="/rising_stars.png"
              alt="Rising Stars Pack"
              height={196}
              width={196}
              quality={100}
              layout="intrinsic"
            />
        </div>
        <div class="col-span-1 animate__animated hover:animate__headShake">
          <Image
              src="/lace_em_up.png"
              alt="Lace em up Pack"
              height={196}
              width={196}
              quality={100}
              layout="intrinsic"
            />
        </div>
        <div class="col-span-1 col-start-2 mx-20 mt-16 2xl:mt-48">
          <Arrow target="runDown"/>
        </div>
      </div>

    </div>
  )
}


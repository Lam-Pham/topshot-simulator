import Image from 'next/image'

export default function Donate() {
    return (
      <div>
        <div name="landing" class="space-y-6">
          <span class="block text-base invisible">probably not best practice</span>
          <div class="border-b border-black"></div>
        </div>
        <div class="grid-cols-2 grid mt-24">
          <p class="col-span-1 text-3xl">hello !<br/><br/>
          first of all - thanks for being a cool person and even considering to donate.<br/><br/>
          i've always wanted to make a dollar on the internet, so here's to dreams coming true!<br/><br/>
          give a buck, give two bucks - i'd love to show my appreciation by making you a founder.♥<br/><br/>
          <span class="text-xs">p.s: to anyone who covers the $12 domain cost, i'll rename the site after you.🤪</span>
          </p>
          <div class="col-span-1 mx-36 space-y-4">
            <p class="mb-8">@topshotsimulator</p>
            <Image
              src="/venmo.png"
              alt="venmo qr code"
              height={126}
              width={151}
              quality={100}
              layout="intrinsic"
            />
            <p class="text-sm">for your founder "bio" – remember to include:<br/><br/>1. TopShot name<br/>2. favorite moment<br/>3. any message</p>
          </div>
        </div>
    </div>
    )
}
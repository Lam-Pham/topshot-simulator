import Image from 'next/image'

export default function MobileMessage() {
    return (
      <div class="md:hidden mx-16">
          <p class="tracking-widest font-bold text-center">TOPSHOT SIMULATOR</p>
          <p class="mt-24 mb-12">hello - the mobile version is right around the corner! 🏗</p>
          
          <Image
              src="/ad.jpeg"
              alt="AD"
              height={100}
              width={133}
              quality={100}
              layout="responsive"
            />
            <p class="mt-12">simulate packs on your desktop!</p>
      </div>
    )
}
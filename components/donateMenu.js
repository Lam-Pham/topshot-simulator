import Link from 'next/link'

export default function DonateMenu() {

    return (
        
        <div class="fixed space-y-24">

            <div class="space-y-6">

                <Link href="/"><p class="font-bold block text-base tracking-widest cursor-pointer hover:opacity-50 duration-200">TOPSHOT SIMULATOR<span class="invisible">ha</span></p></Link>
                <div class="border-b border-black"></div>

            </div>

            <div class="cursor-pointer text-base hover:opacity-50 duration-200"><Link href="/">back to the site</Link> ↗</div>

        </div>

        
        
        
    )
}
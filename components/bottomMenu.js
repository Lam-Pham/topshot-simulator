import Link from 'next/link'

export default function BottomMenu() {
    return (
        <div>
            <Link href="/thankshomie" ><p class="text-sm hover:opacity-50 duration-200 cursor-pointer">become a founder ↗</p></Link>
            <Link href="/helpwanted" ><p class="text-sm hover:opacity-50 duration-200 cursor-pointer">i want to help ↗</p></Link>
        </div>
    )
}
                
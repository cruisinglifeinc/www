import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import logoWhite from '@/images/logos/CruisingLifeIncLogoWhite.png'
export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={logoWhite}
        alt=""
        width={300}
        height={300}
        unoptimized
      />
    </Container>
  )
}

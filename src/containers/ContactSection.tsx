import SectionTitle from '@/components/SectionTitle'
import { buttonVariants } from '@/components/ui/button'
import { Effect } from '@/components/ui/Effects'
import { Mail } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className='relative bg-card bg-opacity-80 backdrop-blur-md border rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12' >

      <Effect variant="ball" size="default" className='-top-4 -end-4' />
      <SectionTitle title="get in touch" description="let's work together" />

      <a href="mailto:salahmohamed999888@gmail.com" className={buttonVariants({size: "lg"})} >
        <Mail className="size-4" />
        <span>say hello</span>
      </a>

    </section>
  )
}

export default ContactSection
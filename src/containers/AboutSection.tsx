import React from 'react'
import { ArrowRightCircle } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { buttonVariants } from '@/components/ui/button'
import { Effect } from '@/components/ui/Effects'
import { getStatistics } from '@/constants/Statistics'
import { cn } from '@/lib/utils'

const AboutSection = async () => {

  const {statistics} = await getStatistics();

  return  <section id="about" className='relative' >
             <Effect className='-left-32 md:-left-44 -top-12' />
             <article className='relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6' >
                <Effect variant="square" size="default" className='-top-4 -right-5 -z-10 -rotate-12' />
                <SectionTitle title="about me" description='a quick introduction about me' className='items-start'  />

                <p className='text-lg ' >    Passionate about technology and  innovation, I am a dedicated frontend developer with a focus on React and Next.js. My journey in web development has been fueled by a love for solving complex problems and creating intuitive user interfaces. I thrive in environments that encourage continuous learning and collaboration, always staying up-to-date with the latest trends and tools in the industry. Whether it&apos;s developing a sleek new feature or optimizing an existing application, I am committed to delivering high-quality solutions that meet the needs of users and clients alike. In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.

                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-end'>

                  {statistics.map((item , index) =>(
                  <div key={index} className='flex flex-col items-center md:items-start ' >
                    <p className='text-foreground text-2xl md:text-4xl font-bold' >+{item.value}</p>
                    <p className='whitespace-nowrap text-sm md:text-lg' >{item.label}</p>
                  </div>

                  ) )}

                  {/* <div className='flex flex-col items-center md:items-start ' >
                    <p className='text-foreground text-2xl md:text-4xl font-bold' >+13</p>
                    <p className='whitespace-nowrap text-sm  md:text-lg' >Completed projects</p>
                  </div> */}
                  <a href="#skills" className={cn(buttonVariants({size:"lg"}),"col-span-2 md:col-span-1 ")} >
                    <span  >discover skills</span>
                    <ArrowRightCircle className='size-4' />
                  </a>
                </div>
                
                

             </article>
          </section>
}

export default AboutSection
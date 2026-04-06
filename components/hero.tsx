"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import { Button } from './ui/button';

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="mx-auto w-full max-w-3xl pt-14 pb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image src="https://avatars.githubusercontent.com/u/111061601?v=4" width={150} height={150} alt="Profile" className="rounded-full" />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Andotiana Manitra</h1>
          <p className="text-lg text-muted-foreground">{t("description")}</p>
          <div className="flex gap-3 items-center mt-2 justify-center md:justify-start">
            <Link href="#" target="_blank">
              <LinkedInLogoIcon className='w-6 h-6'/>
            </Link>
            <Link href="#" target="_blank">
              <Mail className='w-6 h-6'/>
            </Link>
            <Link href="#" target="_blank">
              <GitHubLogoIcon className='w-6 h-6'/>
            </Link>
            <Button size="sm" className='ml-2'>
              <Link href="#" target="_blank">{t("cv")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
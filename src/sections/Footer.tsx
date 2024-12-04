import logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYouTube from '@/assets/social-youtube.svg'


export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:top-2 before:bottom-0 before:blur before:content-[linear-gradient(to_right,#F87BFF,#Fb92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:w-full  before:bg-red-500 before:absolute '>
        <Image src={logo} height={40} alt='SaaS Logo' className="relative" />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYouTube />
        </div>
        <p className='mt-6'>
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

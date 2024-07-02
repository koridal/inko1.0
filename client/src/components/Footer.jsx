import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { IoIosPin } from 'react-icons/io';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to='/' className='self-center whitespace-nowrap text-md sm:text-xl font-semibold dark:text-white tracking-tight'>
              <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 text-white font-semibold'>
                Inko Jaya
              </span>
              &nbsp;Konstruksi
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='http://ysindonesia.com/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Yunsung Indonesia
                </Footer.Link>
                <Footer.Link
                  href='/about'
                >
                  Inko Jaya Konstruksi
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Contact us' />
              <Footer.LinkGroup col>
                <Footer.Link href='/contact'>
                  Email
                </Footer.Link>
                <Footer>Phone : 010-7731-7681</Footer>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='Inko Jaya Konstruksi'
            year={new Date().getFullYear()}
          />
          <div className='flex items-center gap-2 text-gray-500'>
            <IoIosPin />
            <p className='text-sm'>Jl. Tengah No.55, Bantargebang, Kota Bks, Jawa Barat 17151</p>
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://facebook.com' icon={BsFacebook}/>
            <Footer.Icon href='https://instagram.com' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com' icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
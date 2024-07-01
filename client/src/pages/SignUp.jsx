import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left */}
        <div className='flex-1'>
          <Link to='/' className='text-2xl font-semibold dark:text-white tracking-tighter'>
            <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 text-white font-semibold'>
              Inko Jaya
            </span>
            &nbsp;Konstruksi
          </Link>
          <p className='text-sm mt-5'>
            Welcome to Inko Jaya Konstruksi. You can sign up with your Email and password or with Google.
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Username' />
              <TextInput type='text' placeholder='Your name' id='username' />
            </div>
            <div>
              <Label value='Email' />
              <TextInput type='text' placeholder='sample@email.com' id='email' />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='text' placeholder='Your password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import loginImage from '../../../assets/image/login.jpg';

export const LoginForm = () => {
  return (
    <div className='absolute w-full h-full flex items-center overflow-hidden'>
      <img className='relative object-cover' src={loginImage} alt='' />

      <div className='absolute flex flex-col items-center bg-white h-[550px] w-[437px] rounded-lg right-4'>
        <div className='px-8 pt-5 pb-8 items-center justify-center gap-10 flex-col'>
          <h1 className='font-medium font-mono text-4xl text-center'>
            PORSCHE
          </h1>
          <h3 className='font-medium text-2xl leading-8 mt-5 mb-3'>
            Nice to see you.
          </h3>

          <label className='flex flex-col gap-1 relative mt-5 mb-3'>
            <span>Porsche ID (E-mail-Address)</span>
            <span>
              <input
                className='placeholder:italic placeholder:text-slate-600 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg'
                placeholder='Username'
                type='text'
              />
            </span>
          </label>

          <label className='flex flex-col gap-1 relative mt-5 mb-3'>
            <span>Password</span>
            <span>
              <input
                className='placeholder:italic placeholder:text-slate-600 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg'
                placeholder='Password'
                type='password'
              />
            </span>
          </label>

          <div className='flex justify-center mt-8'>
            <button className='rounded-full text-white bg-black w-full h-[50px] sm:text-xl items-center'>
              Log in now
            </button>
          </div>
          <div className='inline-flex items-center justify-center w-full'>
            <hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
            <span className='absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2  '>
              or
            </span>
          </div>
          <p className='mt-3'>
            <span className='underline underline-offset-2'>Register now, </span>
            to discover the digital world of Porsche.
          </p>
        </div>
      </div>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';
import registerImage from '../../../assets/image/login.jpg';

export const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-full h-full flex items-center overflow-hidden">
      <img className="relative object-cover" src={registerImage} alt="" />

      <div className="absolute flex flex-col items-center bg-white h-[550px] w-[437px] rounded-lg right-4">
        <div className="px-8 pt-5 pb-8 items-center justify-center gap-10 flex-col">
          <h1 className="font-medium font-mono text-4xl text-center">PORSCHE</h1>
          <h3 className="font-medium text-2xl leading-8 mt-5 mb-3">Nice to see you.</h3>

          <label className="flex flex-col gap-1 relative mt-5 mb-3">
            <span>Porsche ID (E-mail-Address)</span>
            <span>
              <input
                className="placeholder:italic placeholder:text-slate-600 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                placeholder="Username"
                type="text"
              />
            </span>
          </label>

          <label className="flex flex-col gap-1 relative mt-5 mb-3">
            <span>Password</span>
            <span>
              <input
                className="placeholder:italic placeholder:text-slate-600 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                placeholder="Password"
                type="password"
              />
            </span>
          </label>

          <label className="flex flex-col gap-1 relative mt-5 mb-3">
            <span>Confirm Password</span>
            <span>
              <input
                className="placeholder:italic placeholder:text-slate-600 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                placeholder="Confirm Password"
                type="password"
              />
            </span>
          </label>

          <div className="flex flex-col justify-center items-center mt-8 gap-4">
            <button className="rounded-full text-white bg-black w-full h-[50px] sm:text-xl items-center">
              Register now
            </button>

            <p
              className="underline underline-offset-2 mr-1 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Back to Login page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

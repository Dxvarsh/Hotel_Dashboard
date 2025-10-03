import React, { useState } from 'react';
import Logo from '../assets/Logo_RCT.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(email, password);
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background SVG with clean spaced four-point stars */}
      <svg
        width="100%"
        height="100%"
        className="absolute left-0 top-0 z-0"
        style={{ background: "linear-gradient(to bottom, #29166f, #8e2de2)" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="fourPointStar" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon
              points="20,5 24,16 35,20 24,24 20,35 16,24 5,20 16,16"
              fill="white"
              fillOpacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fourPointStar)" />
      </svg>

      {/* Login Container */}
      <div className="z-10 relative flex items-center justify-center h-full">
        <div className="sm:p-[18.5px] w-full sm:w-[480px] sm:max-w-[480px] sm:rounded-[25px] sm:bg-default/20 sm:border-[1.5px] sm:border-white sm:border-dashed sm:shadow-xl h-full sm:h-auto">
          <div className="w-full bg-default p-8 sm:rounded-[20px] sm:shadow-md flex flex-col justify-center h-full sm:h-auto">
            <div className="flex flex-col pt-6 items-center gap-6">
              {/* Logo */}
              <img src={Logo} alt="Logo" />

              {/* Login Form */}
              <div className="flex flex-col items-center gap-6 w-full">
                <p className="text-subtle text-sm">Login or signup below</p>
                <form onSubmit={handleSubmit} className="w-full">

                  <label className="transition-colors [p,div]:whitespace-pre-line text-sm leading-[1.25rem] font-medium mb-2 flex items-center" htmlFor="email">
                    Email
                    <span className="ms-auto text-sm text-muted font-normal">
                      <a href="#">Forgot password?</a>
                    </span>
                  </label>
                  <div>
                    <input
                      id="email"
                      aria-invalid="false"
                      className="w-full ring-border-default [&>input]:rounded-none has-[input:focus]:ring-3 has-[input:focus]:shadow-input-focus [input:focus]:ring-3 [input:focus]:shadow-input-focus has-aria-invalid:border-destructive has-[input[aria-disabled='true']]:bg-input-disabled! has-[input[aria-disabled='true']]:[&,&>input]:cursor-not-allowed bg-input border border-darker peer rounded-md outline-hidden placeholder-placeholder-default first:pl-3 px-3 transition-all h-12"
                      autoFocus
                      placeholder="you@example.com"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <label className="transition-colors [p,div]:whitespace-pre-line text-sm leading-[1.25rem] font-medium mb-2 flex items-center" htmlFor="password">
                    Password
                  </label>
                  <div className="relative mt-3">
                    <input
                      id="password"
                      aria-invalid="false"
                      className="w-full ring-border-default [&>input]:rounded-none has-[input:focus]:ring-3 has-[input:focus]:shadow-input-focus [input:focus]:ring-3 [input:focus]:shadow-input-focus has-aria-invalid:border-destructive has-[input[aria-disabled='true']]:bg-input-disabled! has-[input[aria-disabled='true']]:[&,&>input]:cursor-not-allowed bg-input border border-darker peer rounded-md outline-hidden placeholder-placeholder-default first:pl-3 px-3 transition-all h-12 pr-10"
                      placeholder="********"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="h-full absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FiEyeOff className="h-5 w-5 text-muted" /> : <FiEye className="h-5 w-5 text-muted" />}
                    </button>
                  </div>

                  <div className="mt-4 w-full" style={{ opacity: 1, height: 'auto' }}>
                    <button
                      aria-busy="false"
                      type="submit"
                      className="flex items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 relative whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent text-subtle bg-state-soft hover:bg-state-soft-hover active:bg-state-soft-press aria-disabled:bg-state-disabled h-10 gap-2 px-3.5 text-sm rounded-md w-full mt-2"
                    >
                      Unlock Class System 🔐
                    </button>
                  </div>
                  <button type="submit" className="hidden"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

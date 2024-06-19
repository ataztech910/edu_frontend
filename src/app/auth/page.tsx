'use client';
import Register from "@/app/components/Register";
import { useState } from "react";
import AuthForm from "@/app/components/AuthForm";

export default function Auth() {
  const [isAuth, setIsAuth] = useState(false);

  const changeFormState = () => {
    setIsAuth(!isAuth);
  }

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            { !isAuth ? <>Sign Up</> : <>Sign In</>}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          { !isAuth ? <Register/> : <AuthForm /> }
          <p className="mt-10 text-center text-sm text-gray-500">
            { !isAuth ? <>Have an account ?</> : <>Do not have an account ?</>}
            <button onClick={changeFormState} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              { !isAuth ? <>Sign In</> : <>Sign Up</>}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

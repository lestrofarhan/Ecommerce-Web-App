import React, { useState } from 'react'
import Title from '../components/Title';

const Login = () => {
  const [currentState, setCurrentState] = useState("Login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      {currentState === "Login" ? (
        <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
          <div className="text-4xl ">
            <Title font={"prata-regular"} text2={currentState} />
          </div>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-not-allowed">Forgot Your Password?</p>
            <p
              className="cursor-pointer"
              onClick={() => {
                setCurrentState("Signup");
              }}
            >
              Create account
            </p>
          </div>
          <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">
            Login
          </button>
        </form>
      ) : (
        <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
          <div className="text-4xl ">
            <Title font={"prata-regular"} text2={currentState} />
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer"></p>
            <p
              className="cursor-pointer"
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              already have an account?
            </p>
          </div>
          <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default Login

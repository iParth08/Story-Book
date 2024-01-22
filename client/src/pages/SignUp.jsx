import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            {/* todo: Customize gradient */}
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shiro's
            </span>
            StoryBook
          </Link>
          <p className="text-sm mt-5">
            This project is a collection of my stories. I hope you enjoy it.
            <br />
            This is also to test features like authentication and google SignUp.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput id="username" type="text" placeholder="John Wick" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput id="email" type="text" placeholder="dontyoudare@kill.mydog" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput id="password" type="text" placeholder="********" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">Submit</Button>
          </form>

          {/* // TODO: Google Authentication Here */}
          
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

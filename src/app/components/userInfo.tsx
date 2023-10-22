import Link from "next/link";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaRegEnvelope, FaUserAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function UserInfoComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 lg:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full lg:w-2/3 max-w-4xl">
          <div className="w-full lg:w-3/5 p-5">
            <div className="text-center lg:text-left font-bold text-black">
              <span className="text-green-500">Company</span>Name
            </div>
            <div className="py-6 lg:py-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-500 mb-2">User Infomation</h2>
              <div className="border-2 w-8 lg:w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-2 lg:p-3 mx-1">
                  <FaFacebookF className="text-sm text-black"></FaFacebookF>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-2 lg:p-3 mx-1">
                  <FaLinkedinIn className="text-sm text-black"></FaLinkedinIn>
                </a>{" "}
                <a href="#" className="border-2 border-gray-200 rounded-full p-2 lg:p-3 mx-1">
                  <FaGoogle className="text-sm text-black"></FaGoogle>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full lg:w-64 p-2 flex items-center mb-3 rounded-md">
                  <FaUserAlt className="text-gray-400 mr-2"></FaUserAlt>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="First Lastname"
                    className="bg-gray-100 outline-none text-sm text-gray-400 flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full lg:w-64 p-2 flex items-center mb-3 rounded-md">
                  <FaRegEnvelope className="text-gray-400 mr-2"></FaRegEnvelope>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm text-gray-400 flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full lg:w-64 p-2 flex items-center mb-3 rounded-md">
                  <MdLockOutline className="text-gray-400 mr-2"></MdLockOutline>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm text-gray-400 flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

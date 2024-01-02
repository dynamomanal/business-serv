"use client";
import supabase from "@/config/supabaseClient";
import { useState } from "react";
export default function Example() {
  const [FName, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [number, setnumber] = useState("");
  const [Bussiness_Name, setBusiness_Name] = useState("");
  const [Email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [Service, setService] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setError("");
    if (
      !FName ||
      !Lname ||
      !number ||
      !Bussiness_Name ||
      !Email ||
      !comment ||
      !Service
    ) {
      setError("Please fill all the fields");
      setSuccess("");
      return;
    }
    const { data, error } = await supabase.from("formdetails").insert([
      {
        FName,
        Lname,
        number,
        Bussiness_Name,
        Email,
        comment,
        Service,
      },
    ]);
    if (error) {
      setError(error.message);
      return;
    } else {
      console.log("Data", data);
      alert("Thank you for your response");
      setSuccess("Thank you for your response");
      setError("");
      setFname("");
      setLname("");
      setnumber("");
      setBusiness_Name("");
      setEmail("");
      setComment("");
      setService("");

      return;
    }
  };

  return (
    <>
      <div className="max-[640px]:rounded-none flex lg:w-[500px] md:w-[450px] sm:w-[400px] mx-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white border-2 border-blue-700 rounded-xl ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Get Quote
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="firstN"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="firstN"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={FName}
                  onChange={(e) => setFname(e.target.value)}
                  className="block lg:w-[250px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="block lg:w-[250px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="Num"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="Num"
                  name="text"
                  type="number"
                  autoComplete="text"
                  required
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                  className="block lg:w-[250px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="BussN"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Business Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="BussN"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={Bussiness_Name}
                  onChange={(e) => setBusiness_Name(e.target.value)}
                  className="block lg:w-[200px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address<span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full lg:w-[250px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex  gap-x-5 flex-wrap ">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="textarea"
                  className="block text-sm font-medium leading-6 text-gray-900 lg:mt-[-100px]"
                >
                  Comment <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols={30}
                  rows={5}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className="mt-10 flex flex-wrap">
                <label
                  htmlFor="drop"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Select the service<span className="text-red-600">*</span>
                </label>
                <select
                  name="dropdown"
                  id="drop"
                  required
                  value={Service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-40 border-2 rounded lg:ml-5 border-teal-500 focus:border-teal-500 active:border-teal-500"
                >
                  <option value="Accounting">Accounting</option>
                  <option value="Tax & Audit">Tax & Audit</option>
                  <option value="Financial Analysis">Financial Analysis</option>
                  <option value="Managenment Information System">
                    Managenment Information System
                  </option>
                  <option value="Financial Analysis">Financial Analysis</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-[100px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
            {error && <div className="text-red-600 text-center">{error}</div>}
            {success && (
              <div className="text-green-600 text-center">{success}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

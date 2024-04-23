import React from "react";

function Body({ img }) {
  return (
    <div className="w-full h-auto mt-10 px-10">
      <div className="w-full h-[500px]">
        <img src={img} className="w-full h-full object-cover"></img>
      </div>
      <div className="w-full h-[300px] bg-pink-700 mt-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-white text-2xl font-semibold">
          Think health. Think message.
        </h1>
        <p className="w-[45%] text-center text-white">
          we are open 9am to 6pm, Monday to sunday.If you would like schedule an
          appointment with us,please call us at 7644994101 today
        </p>

        <div className="flex gap-5">
          <button className="w-64 h-8 border-[1.5px] border-white text-white">
            LEARN MORE ABOUT US
          </button>
          <button className="w-64 h-8 border-[1.5px] border-white text-white">
            CONTACT US TODAY
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-6 pb-6">
        <p className="text-pink-700">
          Family wellness can be interpreted in various ways depending on what
          lens you’re looking through. But in general, it means that a family
          unit – whether biological or not – is able to work well together in
          many (or preferably, all) of the wellness areas mentioned above.
        </p>
        <p>
          In the next part of this Family Wellness Guide, we’ll look at other
          simple and effective ways to start building a plan and create healthy
          routines at home with 12 tips to improve family wellness.
        </p>
        <p>
          Another definition offered by the National Wellness Institute (NWI)
          is: Wellness is an active process through which people become aware
          of, and make choices toward, a more successful existence.
        </p>
      </div>
      <hr className="h-[2px] bg-gray-600"></hr>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-pink-700 text-2xl font-semibold">Family Wellnwss Message Therapy </h1>
        <p className="mt-5 text-gray-600 text-[16px]">Samastipur,Bihar,848211</p>
        <p className=" text-gray-600 text-[16px]">Phone No. 7644994101</p>
      </div>
    </div>
  );
}

export default Body;

import React from 'react';

const Home = () => {
  return (
    <>
      {/* <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-purple-400 text-black">
        <h1 className="text-4xl font-bold">Welcome to SecuResidences</h1>
        <p className="text-xl mt-4 text-center max-w-2xl">Smart hostel management with attendance, maintenance & cleaning slot features.</p>
      </section> */}

<section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-purple-100"
>
  {/* Left Content */}
  <div className="md:w-1/2 text-left">
    <h1 className="text-4xl font-bold text-purple-800 mb-4">
      Welcome to SecuResidences
    </h1>
    <p className="text-xl text-gray-800 mb-6 max-w-md">
      Smart hostel management with attendance, maintenance & cleaning slot features.
    </p>
    <div className="space-x-4">
      <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition text-base">
        Download Now
      </button>
      <button className="border-2 border-purple-700 text-purple-700 px-6 py-2 rounded-xl hover:bg-purple-700 hover:text-white transition">
        See Features
      </button>
    </div>
  </div>

  {/* Right Content - Bigger Phone Frame */}
  <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
    <div className="w-[320px] h-[640px] rounded-[2.5rem] border-[6px] border-gray-300 shadow-2xl overflow-hidden bg-black">
      <video
        src="/video/app-demo.mp4" // Replace with your actual path
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  </div>
</section>



      <section id="about" className="min-h-screen px-8 py-16 bg-purple-300 text-black">
        <h2 className="text-3xl font-semibold mb-4">About SecuResidences</h2>
        <p className="text-lg max-w-3xl">
          This platform automates and streamlines hostel management for students and wardens. Attendance via geofencing, cleaning slot bookings, and maintenance reporting are all handled smoothly.
        </p>
      </section>
    </>
  );
};

export default Home;

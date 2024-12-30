import React from 'react';

const Header = () => {
  return (
    <div className='h-[50vw] sm:h-[40vw] md:h-[34vw] my-7 mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-cover bg-[length:100%_160%] relative rounded-lg overflow-hidden shadow-md'>
      <div className='p-5 sm:p-8 md:p-12 mt-10 animate-fadeIn'>
        <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest'>SPECIALS</h2>
        <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-5 sm:mt-6 md:mt-7 lg:mt-8 sm:mr-[20%] md:mr-[30%] lg:mr-[40%]'>
          Use the code 'CDE45FLB' and get 30% off your next order
        </p>
        <button className='px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-white text-blue-500 mt-5 sm:mt-6 md:mt-7 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl rounded-md shadow-md transition duration-300 ease-in-out hover:text-white hover:bg-blue-500'>
          Order now
        </button>
      </div>
    </div>
  );
}

export default Header;
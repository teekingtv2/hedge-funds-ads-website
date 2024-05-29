import React from 'react';

const ImagesFooter = () => {
  return (
    <div className="images-footer h-[100%] bg-[#02050c4d] py-[60px] md:py-[100px] px-7 w-[100vw]">
      <h2 className="text-center upppercase text-white my-3 sm:max-w-[90%] md:max-w-[85%] lg:max-w-[55%] xl:max-w-[40%] 2xl:max-w-[40%] m-auto">
        Live results from some of our channels
      </h2>
      <marquee behavior="alternate" direction="">
        <div className="mt-[40px] flex gap-6">
          <img
            src={`/assets/images/testimony/telegram-1.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-2.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-3.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-4.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-5.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-6.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-7.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-8.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-9.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-10.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-11.jpg`}
            alt="Hedge Funds"
            className="h-[380px] mb-2 rounded-md"
          />
          <img
            src={`/assets/images/testimony/telegram-12.jpg`}
            alt="Hedge Funds"
            className="h-[430px] mb-2 rounded-md"
          />
        </div>
      </marquee>
    </div>
  );
};

export default ImagesFooter;

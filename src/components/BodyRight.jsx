import React from 'react';

const BodyRight = ({ data }) => {
  return (
    <div className=" col-span-1 w-[85%] ml-auto md:ml-0 md:w-[100%] flex justify-center items-center">
      <div className="bg-[#030811] p-10 rounded-[30px] right-box">
        {data && (
          <div
            className="text-[#dbdbdb]"
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default BodyRight;

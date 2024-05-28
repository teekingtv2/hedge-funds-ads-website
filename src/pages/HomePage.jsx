import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';

const HomePage = () => {
  return (
    <>
      <Head pageTitle="Welcome Home" />
      <div className="h-[100%] bg-[#030811] py-[60px] md:py-[100px] px-7 w-[100vw] text-center">
        <div>
          <h1 className="mb-3">Welcome here</h1>
          Ask for the ads link from our Telegram group.
        </div>
      </div>
    </>
  );
};

export default HomePage;

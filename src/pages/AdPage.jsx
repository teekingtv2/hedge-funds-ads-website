import React from 'react';
import BodyLeft from '../components/BodyLeft';
import BodyRight from '../components/BodyRight';
import Head from '../components/Head';
import useFetchCredential from '../hooks/useFetchCredential';
import { useParams } from 'react-router-dom';
const bg = '/assets/images/bg.png';

const AdPage = () => {
  const { slug } = useParams();
  const { data, loading, error } = useFetchCredential(`general/fetch-ad-post/${slug}`);
  console.log('data', data);
  return (
    <>
      <Head pageTitle="Join Our Premium Groups" />
      <div className=" bg-[url('/assets/images/bg.png')]">
        <div className="bg-[#0000009d] h-[100%] w-[100%] ">
          {data && (
            <div className="h-[100%] m:max-w-[90%] md:max-w-[85%] lg:max-w-[85%] xl:max-w-[65%] 2xl:max-w-[65%] m-auto pb-[50px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
              <BodyLeft data={data.data} />
              <BodyRight data={data.data} />
            </div>
          )}
          {loading && <div className="text-red-500 text-[20px]">{loading}</div>}
          {error && <div className="text-text-[#bebebe] text-[20px]">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default AdPage;

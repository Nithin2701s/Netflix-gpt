import React, { useRef } from "react";
import { lang } from "../utils/constants";
import { useSelector } from "react-redux";
import useHandleSearch from "../hooks/useHandleSearch";
const GPTSearchbar = () => {
  const langId = useSelector((state) => state.gpt.langId);
  const query = useRef(null);
  const handleSearch = useHandleSearch(query)
  return (
    <div className='pt-[20%] md:pt-[10%]'>
      <form
        className='p-2 mx-auto grid grid-cols-12 text-xs md:text-[1rem] w-11/12 md:w-6/12 bg-black rounded-lg'
        onSubmit={(e)=>e.preventDefault()}
      >
        <input
          type='text'
          className='p-2 m-2  col-span-9 md:col-span-10 rounded-md'
          ref={query}
          placeholder={lang?.[langId]?.gptPlaceholder}
        />
        <button className='bg-red-700 p-2 m-2 col-span-3 md:col-span-2 rounded-md text-white' onClick={handleSearch}>
          {lang?.[langId].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;

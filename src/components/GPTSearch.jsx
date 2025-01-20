import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchbar from "./GPTSearchbar";

const GPTSearch = () => {

  return (
    <div className=''>
      <div className='fixed -z-10'>
        <img src='/Netflix-Bg.jpg' alt='' className='h-screen w-screen' />
      </div>
      <GPTSearchbar />
      <GPTMovieSuggestions/>
      </div>
  );
};

export default GPTSearch;

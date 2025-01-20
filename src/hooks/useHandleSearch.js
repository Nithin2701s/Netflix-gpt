import { useDispatch } from "react-redux";
import { addSearchResult } from "../store/GPTSlice";
import { model } from "../utils/gaminiai";



const useHandleSearch = (query)=>{
    const dispatch = useDispatch()
    const handleSearch = async () => {
        const prompt =
          "Generate  5 movies names(only) based on the query. The movies should be seperate by ','. For example Animal,Maze Runner,Marco,Daaku Maharaj,Pushpa 2 - The rule. The query is";
        if (!query) return;
        const result = await model.generateContentStream(
          prompt + query.current.value
        );
        let text='';
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          text += chunkText;
        }
        const movies = text.split(", ");
        dispatch(addSearchResult(movies));
      };
      return handleSearch;
}

export default useHandleSearch
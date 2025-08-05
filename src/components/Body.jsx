import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
// import { useEffect } from "react";


const Body = () => {
  //  useEffect(()=>{
  //   const handleContextMenu = (event) => event.preventDefault();
  
  //   document.addEventListener("contextmenu", handleContextMenu);
    
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  //  },[])
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    < >
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;

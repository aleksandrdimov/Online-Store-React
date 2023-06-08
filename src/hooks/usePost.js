import axios from "axios";
import { useEffect, useState } from "react";

function usePost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  let itemsNumber = 50;
  let itemsShow = 8;
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=${itemsNumber}`)
      .then((response) => {
        setPosts(response.data.products);
        setAllPosts(response.data.products);
        setIsLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`https://dummyjson.com/products?limit=${itemsShow}`)
  //     .then((response) => {
  //       setAllPosts(response.data.products);
  //       setIsLoading(false);
  //     });
  // }, []);

  return { posts, setPosts, isLoading, setIsLoading, allPosts, setAllPosts };
}

export default usePost;

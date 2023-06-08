import ItemPagination from "../../../components/Pagination/Pagination";
import usePost from "../../../hooks/usePost";
import "./HomeBestSeller.scss";
import HomeCategoriesList from "./HomeCategoriesList/HomeCategoriesList";
import HomeContents from "./HomeContents/HomeContents";

const HomeBestSeller = () => {
  const { allPosts, posts, isLoading, setAllPosts } = usePost();

  const handleClick = () => {
    const buttons = document.querySelectorAll(".MuiButtonBase-root");
    console.log(buttons);
    // console.log(buttons);
    // buttons.forEach((el) => {
    //   el.getAttribute("aria-current") === "true"
    //     ? el.innerText
    //     : console.log("false");
    // });
    // const selectedNmber = document.querySelector(".Mui-selected");
    // if (selectedNmber) return console.log(e.target.innerText);
    // console.log(e.target);
    // return e.target.innerText;
  };

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <section className="home-best-seller">
      <h2 className="home-best-seller__title"></h2>
      <HomeCategoriesList posts={posts} setAllPosts={setAllPosts} />
      <HomeContents posts={allPosts} />
      <ItemPagination handleClick={handleClick} />
    </section>
  );
};

export default HomeBestSeller;

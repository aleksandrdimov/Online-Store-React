import usePost from "../../../hooks/usePost";
import "./HomeTop.scss";
import HomeTopItem from "./HomeTopItem/HomeTopItem";

const HomeTop = () => {
  const { posts, isLoading } = usePost();

  let sortTop = [];

  const findTop3 = () => {
    sortTop = posts.sort((a, b) => b.rating - a.rating).slice(0, 3);
    return sortTop;
  };
  if (!isLoading) {
    findTop3();
  }

  return (
    <div className="home-top">
      <div className="home-top__container">
        {sortTop.map((el) => (
          <HomeTopItem key={el.id} post={el} />
        ))}
      </div>
    </div>
  );
};
export default HomeTop;

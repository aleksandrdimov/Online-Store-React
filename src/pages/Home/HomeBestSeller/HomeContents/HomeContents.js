import HomeItem from "./HomeItem/HomeItem";

const HomeContents = ({ posts }) => {
  const min = 1;
  const max = 8;

  const filter = posts.slice(min - 1, max);
  console.log(filter);
  return (
    <div className="home-best-seller__container">
      {filter.map((post) => (
        <HomeItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomeContents;

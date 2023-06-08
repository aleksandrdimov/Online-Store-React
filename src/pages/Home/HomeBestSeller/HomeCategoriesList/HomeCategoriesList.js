const HomeCategoriesList = ({ posts, setAllPosts }) => {
  const handleClickCategory = (e) => {
    const valueItem = e.currentTarget.innerText.toLowerCase();
    const filted = posts.filter((el) => el.category === valueItem);
    setAllPosts(filted);
    getAllSiblings(e.currentTarget);
  };

  const getAllSiblings = (element, include) => {
    const siblings = element.parentNode.childNodes;
    if (include) return siblings;

    const out = Array.prototype.filter.call(siblings, function (sibling) {
      return sibling != element;
    });

    out.forEach((el) => {
      el.style.color = "#223263";
    });

    element.style.color = "#40BFFF";
  };

  const handleClickAll = (e) => {
    setAllPosts(posts);
    getAllSiblings(e.currentTarget);
  };

  return (
    <ul className="home-best-seller__list">
      <li
        className="home-best-seller__category active"
        onClick={handleClickAll}
      >
        all
      </li>
      <li className="home-best-seller__category" onClick={handleClickCategory}>
        smartphones
      </li>
      <li className="home-best-seller__category" onClick={handleClickCategory}>
        laptops
      </li>
      <li className="home-best-seller__category" onClick={handleClickCategory}>
        fragrances
      </li>
    </ul>
  );
};
export default HomeCategoriesList;

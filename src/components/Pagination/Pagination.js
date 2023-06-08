import { Pagination } from "@mui/material";
import "./Pagination.scss";
import usePost from "../../hooks/usePost";

const ItemPagination = ({ handleClick }) => {
  const { allPosts } = usePost();

  const numberCount = Math.ceil(allPosts.length / 8);
  return (
    <div className="item-pagination">
      <Pagination
        count={numberCount}
        variant="outlined"
        shape="rounded"
        onClick={handleClick}
      />
    </div>
  );
};

export default ItemPagination;

import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>お探しのページはありません。</h1>
      <Link to="/">トップに戻る</Link>
    </div>
  );
};

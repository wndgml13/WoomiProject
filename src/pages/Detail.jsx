import DetailPosts from "../components/DetailPosts";
import CommentContainer from "../components/CommentContainer";

export default function Detail() {

  console.log('test')
  console.log("상세페이지 -> 2.글상세페이지");
  return (
    <>
      <DetailPosts />
      
      <CommentContainer />
    </>
  );
}

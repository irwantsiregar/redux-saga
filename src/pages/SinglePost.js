/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../store/posts/actions";
import PostDetails from "../components/PostDetails";

function SinglePost() {
  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(params.id));
  }, [params.id]);

  return (
    <Container className="single-post">
      <PostDetails />
    </Container>
  );
}
export default SinglePost;

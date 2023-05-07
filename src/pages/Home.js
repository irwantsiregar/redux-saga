/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { getPosts } from "../store/posts/actions";
import Posts from "../components/Posts";

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container className="home">
      <Posts />
    </Container>
  );
}

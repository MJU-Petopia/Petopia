import axios from 'axios';

// 로그인 파트
export const signIn = () => axios.get('http://localhost:8080/oauth2/authorization/facebook');





// 게시판 파트
export const getBoard = () => axios.get('http://localhost:8080/api/post');
export const getBoardDetail = id => axios.get(`http://localhost:8080/api/post/${id}`);
export const addBoard = feedData => axios.get('http://localhost:8080/api/post');
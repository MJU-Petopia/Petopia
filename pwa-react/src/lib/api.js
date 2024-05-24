import axios from 'axios';

// 로그인 파트
export const getUserdata = accessToken => axios.get(`http://localhost:8080/api/user/accesstoken/${accessToken}`)





// 게시판 파트
export const getBoard = () => axios.get('http://localhost:8080/api/post');
export const getBoardDetail = id => axios.get(`http://localhost:8080/api/post/${id}`);
export const addBoard = feedData => axios.post('http://localhost:8080/api/post');

// 프로필 파트
export const getPetlist = () => axios.get('http://localhost:8080/api/pet');
export const getPetDetail = id => axios.get(`http://localhost:8080/api/pet/${id}`)
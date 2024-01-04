const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// 비동기적으로 github api에서 데이터 받아옴
const fetchFollowers = async () => {
  const response = await fetch(url); // url fetch await
  const data = await response.json(); // json 파싱 await
  return data; // 다 되면 데이터 리턴
};

export default fetchFollowers;

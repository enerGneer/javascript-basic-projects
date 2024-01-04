const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// 비동기적으로 github api에서 데이터 받아옴
// const fetchFollowers = async () => {
//   const response = await fetch(url); // url fetch await
//   const data = await response.json(); // json 파싱 await
//   return data; // 다 되면 데이터 리턴
// };

// 에러처리 추가하여 수정함
const fetchFollowers = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to fetch followers");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching followers:", error.message);
    throw error; // catch 후 throw는 에러를, 현재 함수를 호출한 더 상위 호출 지점으로 전달
  }
};

export default fetchFollowers;

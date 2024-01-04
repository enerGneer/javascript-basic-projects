const paginate = (followers) => {
  // 한 페이지당 표시될 팔로워 수
  const itemsPerPage = 10;

  // 전체 팔로워 수를 한 페이지당 표시될 팔로워 수로 나눈 결과
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  // 새로운 팔로워 배열 생성 - 페이지수만큼의 빈 배열 생성
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    // 현재 페이지에서 표시될 팔로워의 시작 인덱스
    const start = index * itemsPerPage;

    // 현재 페이지에서 표시될 팔로워의 끝 인덱스 (시작 인덱스에 한 페이지당 표시될 팔로워 수를 더한 값)
    return followers.slice(start, start + itemsPerPage);
  });

  // 페이지별로 나눠진 팔로워 배열을 반환
  return newFollowers;
};

export default paginate;

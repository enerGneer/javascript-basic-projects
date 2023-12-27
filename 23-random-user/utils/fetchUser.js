// API
const URL = "https://randomuser.me/api/";

const getUser = async () => {
  // fetch로 API에서 randomuser 정보 가져옴
  const response = await fetch(URL);
  // JSON으로 변환
  const data = await response.json();

  // destructure 구조 분해 할당
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;

  // 객체 return
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;

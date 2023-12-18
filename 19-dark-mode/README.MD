## Dark Mode

## moment.js 라이브러리

```js
// 날짜 형식 지정
moment().format("YYYY-MM-DD"); // 현재 날짜를 'YYYY-MM-DD' 형식으로 출력

// 상대 시간
moment("20111031", "YYYYMMDD").fromNow(); // "20111031"이 현재로부터 얼마나 지났는지 출력

// 달력 시간
moment().subtract(10, "days").calendar(); // 10일 전의 날짜를 달력 형식으로 출력
```

날짜 시간 파싱하고 유효성 검사 조작 포매팅하는 라이브러리.

그러나 유지보수 레거시 프로젝트로 간주되어 모던 웹에서는 사용하지 않는 게 좋다고 한다.

대안으로는 date-fns, day.js, js-Joda, Luxon 등이 있다.

#### HTML Structure

- main tags
  - nav
    - div.nav-center
      - span 'overreacted'
      - button.btn 'toggle'
  - section.articles
    - article.post
      - h2 'post title'
      - div.post-info
        - span 'date'
        - span 'read time'
      - p 'content'

#### Toggle - JS

- select button
- add click event listener

#### Toggle - CSS

- create .dark-theme class

#### Toggle - JS

- select root element (html), toggle .dark-theme

#### Import Data

#### Display Articles

- select articles
- iterate over, return article.post for each article

#### Format Date

- import moment.js
- format date

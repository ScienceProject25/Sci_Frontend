const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const moviePoster = document.getElementById("moviePoster");
const ostList = document.getElementById("ostList");
const peopleList = document.getElementById("peopleList");
const movieListUl = document.getElementById("movieListUl");
const addMovieBtn = document.getElementById("addMovieBtn");
const newTitleInput = document.getElementById("newTitle");
const userMovieListUl = document.getElementById("userMovieListUl");
const resetUserMoviesBtn = document.getElementById("resetUserMoviesBtn");

const defaultMovieData = {
  "인셉션": {
    description: "꿈 속의 꿈을 탐험하는 두뇌형 SF 스릴러! 크리스토퍼 놀란 감독의 대표작",
    poster: "https://upload.wikimedia.org/wikipedia/ko/1/1d/%EC%9D%B8%EC%85%89%EC%85%98.jpg",
    ost: [
      { title: "Time - Hans Zimmer", url: "https://www.youtube.com/watch?v=RxabLA7UQ9k" },
      { title: "Dream Is Collapsing", url: "https://www.youtube.com/results?search_query=Dream+Is+Collapsing" },
      { title: "528491", url: "https://www.youtube.com/results?search_query=528491" }
    ],
    people: [
      { name: "도미닉 콥", actor: "레오나르도 디카프리오", photo: "https://zrr.kr/MwEa4N" },
      { name: "아서", actor: "조셉 고든 레빗", photo: "https://zrr.kr/gU2WUh" },
      { name: "몰", actor: "마리옹 코티야르", photo: "https://zrr.kr/8SRTRF" }
    ]
  },
  "라라랜드": {
    description: "꿈을 좇는 두 남녀의 사랑과 현실을 그린 뮤지컬 영화",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    ost: [
      { title: "City of Stars", url: "https://www.youtube.com/results?search_query=City+of+Stars" },
      { title: "Another Day of Sun", url: "https://www.youtube.com/results?search_query=Another+Day+of+Sun" },
      { title: "Mia & Sebastian’s Theme", url: "https://www.youtube.com/results?search_query=Mia+and+Sebastian+Theme" }
    ],
    people: [
      { name: "미아", actor: "엠마 스톤", photo: "https://zrr.kr/tW8Fmp" },
      { name: "세바스찬", actor: "라이언 고슬링", photo: "https://zrr.kr/ZnRFQc" },
      { name: "키스", actor: "존 레전드", photo: "https://zrr.kr/3Lcb8G" },
      { name: "그렉", actor: "핀 위트록", photo: "https://zrr.kr/m7Xwfl" }
    ]
  },
  "인터스텔라": {
    description: "인류의 생존을 위한 우주 탐사를 그린 SF 대작! 놀란 감독 & 한스 짐머의 명조합",
    poster: "https://play-lh.googleusercontent.com/DV_MgeteY8oCcqCE4qZPVN6O3boel8348_imNLIBgMZHfPv-6hYrjp3KiUyk0Cm1Vi9B-A",
    ost: [
      { title: "Cornfield Chase", url: "https://www.youtube.com/results?search_query=Cornfield+Chase" },
      { title: "No Time for Caution", url: "https://www.youtube.com/results?search_query=No+Time+for+Caution" },
      { title: "Stay", url: "https://www.youtube.com/results?search_query=Stay+Interstellar" }
    ],
    people: [
      { name: "쿠퍼", actor: "메튜 매커너히", photo: "https://zrr.kr/7j7T5i" },
      { name: "머피 (성인)", actor: "제시카 차스테인", photo: "https://zrr.kr/C3ZCIp" },
      { name: "브랜드 박사", actor: "앤 해서웨이", photo: "https://zrr.kr/8AogDv" },
      { name: "머피 (어린 시절)", actor: "맥켄지 포이", photo: "https://zrr.kr/nrbLr1" },
      { name: "톰", actor: "케이시 애플렉", photo: "https://zrr.kr/w85CVH" },
      { name: "만 박사", actor: "맷 데이먼", photo: "https://zrr.kr/wE0YUl" },
      { name: "프로패서 브랜드", actor: "마이클 케인", photo: "https://zrr.kr/unUIAN" }
    ]
  },
  "더 퍼스트 슬램덩크": {
    description: "전설의 농구 만화를 새롭게 재탄생시킨 감동의 스포츠 애니메이션, 감성 충만한 연출과 환상적인 사운드트랙의 완벽 조화!",
    poster: "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    ost: [
      { title: "The First Slam Dunk", url: "https://www.youtube.com/results?search_query=The+First+Slam+Dunk" },
      { title: "Till I Collapse", url: "https://www.youtube.com/results?search_query=Till+I+Collapse" },
      { title: "My Sweet Dream", url: "https://www.youtube.com/results?search_query=my+sweet+dream" }
    ],
    people: [
      { name: "서태웅", actor: "사쿠라기 하나미치", photo: "https://zrr.kr/rAncAa" },
      { name: "강백호", actor: "류카와 카즈히로", photo: "https://zrr.kr/S3xe4y" },
      { name: "채치수", actor: "미츠이 히사시", photo: "https://zrr.kr/yCei4D" },
      { name: "정대만", actor: "아카기 다케노리", photo: "https://zrr.kr/lj5npP" },
      { name: "윤대협", actor: "쿠로코 테츠야", photo: "https://zrr.kr/zbrfUh" }
    ]
  },
  "진격의 거인": {
    description: "인류 최후의 반격, 거인을 향한 처절한 전쟁의 완결편. 스펙터클한 연출과 강렬한 음악이 절망 속 희망을 노래한다.",
    poster: "https://i.namu.wiki/i/umJ9yzDSg9ydRtulxcZ8etAhk5e4jA_l9g0WHDwvUMu4unzb3ExJPco9ZnJ5Rse7GqNc07JAHSxiU9qvR70eCw.webp",
    ost: [
      { title: "Ashes on The Fire", url: "https://www.youtube.com/results?search_query=Ashes+on+The+Fire" },
      { title: "Footsteps of Doom", url: "https://www.youtube.com/results?search_query=footsteps+of+doom+anime+version" },
      { title: "Call of Silence", url: "https://www.youtube.com/results?search_query=Call+of+Silence" },
      { title: "YouSeeBIGGIRL/T:T", url: "https://www.youtube.com/results?search_query=YouSeeBIGGIRL%2FT%3AT" }
    ],
    people: [
      {name: "에렌 예거", actor: "エレン・イェーガー", photo: "https://zrr.kr/Kdj0hv"},
      {name: "미카사 아커만", actor: "ミカサ・アッカーマン", photo: "https://zrr.kr/lijLqV"},
      {name: "아르민 알레르트", actor: "アルミン・アルレルト", photo: "https://zrr.kr/j3zckQ"},
      {name: "리바이 아커만", actor: "リヴァイ・アッカーマン", photo: "https://zrr.kr/ovCzAa"},
      {name: "코니 스프링어", actor: "コニー・スプリンガー", photo: "https://zrr.kr/VscOje"}
    ]
  }
};

let userMovieData = {};

// 영화 데이터 조합
function getAllMovieTitles() {
  return [...Object.keys(defaultMovieData), ...Object.keys(userMovieData)];
}

// 영화 리스트 렌더링
function renderMovieLists() {
  movieListUl.innerHTML = "";
  Object.keys(defaultMovieData).forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      searchInput.value = title;
      searchBtn.click();
    });
    movieListUl.appendChild(li);
  });

  userMovieListUl.innerHTML = "";
  Object.keys(userMovieData).forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      searchInput.value = title;
      searchBtn.click();
    });
    userMovieListUl.appendChild(li);
  });
}

// 검색 기능
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  let data = defaultMovieData[query];
  const isDefault = !!data;

  if (!data) {
    data = userMovieData[query];
  }

  if (!data) {
    alert("영화를 찾을 수 없습니다.");
    result.classList.add("hidden");
    return;
  }

  movieTitle.textContent = query;
  movieDescription.textContent = isDefault
    ? (data.description || "")
    : "사용자가 추가한 영화입니다.";

  if (isDefault && data.poster) {
    moviePoster.src = data.poster;
    moviePoster.style.display = "block";
  } else {
    moviePoster.style.display = "none";
  }

  const ostTitle = document.getElementById("ostTitle");
  ostList.innerHTML = "";

  if (isDefault && Array.isArray(data.ost) && data.ost.length) {
    ostTitle.style.display = "block";
    ostList.style.display = "block";
    data.ost.forEach(song => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = song.url;
      a.textContent = `- ${song.title}`;
      a.target = "_blank";
      li.appendChild(a);
      ostList.appendChild(li);
    });
  } else {
    ostTitle.style.display = "none";
    ostList.style.display = "none";
  }

  const peopleTitle = document.getElementById("peopleTitle");
  peopleList.innerHTML = "";

  if (isDefault && Array.isArray(data.people) && data.people.length) {
    peopleTitle.style.display = "block";
    peopleList.style.display = "block";
    data.people.forEach(person => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = person.photo || "https://via.placeholder.com/60";
      img.alt = `${person.name} (${person.actor})`;
      img.style.width = "60px";
      img.style.marginRight = "10px";
      img.style.borderRadius = "8px";

      const span = document.createElement("span");
      span.innerHTML = `<strong>배역:</strong> ${person.name}<br><strong>배우:</strong> ${person.actor}`;

      li.style.display = "flex";
      li.style.alignItems = "center";
      li.appendChild(img);
      li.appendChild(span);
      peopleList.appendChild(li);
    });
  } else {
    peopleTitle.style.display = "none";
    peopleList.style.display = "none";
  }

  result.classList.remove("hidden");
});

// 영화 추가
addMovieBtn.addEventListener("click", () => {
  const title = newTitleInput.value.trim();

  if (!title) {
    alert("영화 제목을 입력하세요.");
    return;
  }

  if (defaultMovieData[title] || userMovieData[title]) {
    alert("이미 등록된 영화입니다.");
    return;
  }

  userMovieData[title] = {
    description: "",
    poster: "",
    ost: [],
    people: []
  };

  saveUserMovies();
  renderMovieLists();
  alert(`${title} 영화가 추가되었습니다!`);
  searchInput.value = title;
  searchBtn.click();
  newTitleInput.value = "";
});

// 사용자 영화 초기화
resetUserMoviesBtn.addEventListener("click", () => {
  if (confirm("추가한 영화 목록을 모두 삭제하시겠습니까?")) {
    userMovieData = {};
    saveUserMovies();
    renderMovieLists();
    alert("추가한 영화 목록이 초기화되었습니다.");
  }
});

// 로컬스토리지 저장/불러오기
function saveUserMovies() {
  localStorage.setItem("userMovieData", JSON.stringify(userMovieData));
}
function loadUserMovies() {
  const data = localStorage.getItem("userMovieData");
  if (data) {
    userMovieData = JSON.parse(data);
  }
}

// 시작
loadUserMovies();
renderMovieLists();
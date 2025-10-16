// 영화 데이터
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
        { title: "Mia & Sebastian's Theme", url: "https://www.youtube.com/results?search_query=Mia+and+Sebastian+Theme" }
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
        {name: "미카사 아커만", actor: "ミカサ・アッカーマン", photo: "https://zrr.kr/ChQLUy"},
        {name: "아르민 알레르트", actor: "アルミン・アルレルト", photo: "https://zrr.kr/j3zckQ"},
        {name: "리바이 아커만", actor: "リヴァイ・アッカーマン", photo: "https://zrr.kr/ovCzAa"},
        {name: "코니 스프링어", actor: "コニー・スプリンガー", photo: "https://zrr.kr/VscOje"}
      ]
    },
    "오펜하이머": {
    "description": "핵무기의 아버지, 로버트 오펜하이머의 삶과 고뇌를 그린 크리스토퍼 놀란 감독의 전기 드라마",
    "poster": "https://i.namu.wiki/i/wr-UKPub5BAEyeEsxzszuMRFRxlwxUAopqBBN3Hak5Ui-f5BYcyjdDPSksbJks4HVoA53jCY1sbjLe1Qztamrw.webp",
    "ost": [
      { "title": "Oppenheimer - Ludwig Göransson", "url": "https://www.youtube.com/watch?v=FqHk8sZxYwM" },
      { "title": "The Fission of the Atom", "url": "https://www.youtube.com/results?search_query=The+Fission+of+the+Atom" }
    ],
    "people": [
      { "name": "로버트 오펜하이머", "actor": "킬리언 머피", "photo": "https://zrr.kr/3G7G7F" },
      { "name": "킴버리 하트", "actor": "에밀리 블런트", "photo": "https://zrr.kr/4J8H9K" },
      { "name": "루이스 스트라우스", "actor": "로버트 다우니 주니어", "photo": "https://zrr.kr/5L9I0J" }
    ]
  },
  "듄: 파트 원": {
    "description": "프랭크 허버트의 SF 대작을 원작으로 한 웅장한 스페이스 오페라",
    "poster": "https://i.namu.wiki/i/1ZOJDCSjLBR4E0u7zMvv1puGcSQ_GhvjLnvO4lYOnnVWch8LBNMQKvjislmbYghU4kjS_2E0Kz-_3e7NmiovVw.webp",
    "ost": [
      { "title": "Paul's Dream - Hans Zimmer", "url": "https://www.youtube.com/watch?v=3kD8uO0Z7eM" },
      { "title": "The One", "url": "https://www.youtube.com/results?search_query=The+One+Dune+OST" }
    ],
    "people": [
      { "name": "폴 아트레이드", "actor": "티모시 샬라메", "photo": "https://zrr.kr/6M0J1K" },
      { "name": "제시카", "actor": "리베카 퍼거슨", "photo": "https://zrr.kr/7N1K2L" },
      { "name": "듄", "actor": "제이슨 모모아", "photo": "https://zrr.kr/8O2L3M" }
    ]
  },
  "더 배트맨": {
    "description": "어두운 분위기 속에서 범죄와 싸우는 배트맨의 초년기를 그린 다크한 슈퍼히어로 영화",
    "poster": "https://i.namu.wiki/i/ynRcsXIkhqhGtK-QTZlQCA6u58sdE1AagJHviCDy5-vrAHcBtS9Zx6WzKsActVTZi7LQt0OeE-l9IDIyxY-wxg.webp",
    "ost": [
      { "title": "Something in the Way - Nirvana", "url": "https://www.youtube.com/watch?v=rfUYuLRR5l4" },
      { "title": "The Batman Theme", "url": "https://www.youtube.com/results?search_query=The+Batman+Theme+OST" }
    ],
    "people": [
      { "name": "브루스 웨인 / 배트맨", "actor": "로버트 패틴슨", "photo": "https://zrr.kr/9P3M4N" },
      { "name": "셀리나 카일 / 캣우먼", "actor": "조안 크라비츠", "photo": "https://zrr.kr/0Q4N5O" },
      { "name": "리들러", "actor": "폴 다노", "photo": "https://zrr.kr/1R5O6P" }
    ]
  },
  "아바타: 물의 길": {
    "description": "판도라의 바다를 배경으로 펼쳐지는 제이크와 네이티리의 새로운 모험",
    "poster": "https://i.namu.wiki/i/EHZQffmrWR6mvuDFZFVfSLDZnux6vbMliyinxYrlRz_Q698fuDtFMDBDNc8wCcn7fuqbaAJEBUE-3-tKbDAugw.webp",
    "ost": [
      { "title": "The Way of Water - Simon Franglen", "url": "https://www.youtube.com/watch?v=Z3Rz7XzV2kI" },
      { "title": "A New World", "url": "https://www.youtube.com/results?search_query=A+New+World+Avatar+OST" }
    ],
    "people": [
      { "name": "제이크 설리", "actor": "샘 워싱턴", "photo": "https://zrr.kr/2S6P7Q" },
      { "name": "네이티리", "actor": "조 샐다나", "photo": "https://zrr.kr/3T7Q8R" },
      { "name": "툴리", "actor": "케이트 윈슬렛", "photo": "https://zrr.kr/4U8R9S" }
    ]
  },
  "파묘": {
    "description": "장재현 감독의 오컬트 호러 영화로, 무속과 미신을 소재로 한 미스터리한 이야기",
    "poster": "https://upload.wikimedia.org/wikipedia/ko/thumb/4/40/%ED%8C%8C%EB%AC%98.jpg/250px-%ED%8C%8C%EB%AC%98.jpg",
    "ost": [
      { "title": "파묘 OST", "url": "https://www.youtube.com/results?search_query=%ED%8C%8C%EB%AC%98+OST" }
    ],
    "people": [
      { "name": "주인공", "actor": "배우 이름", "photo": "https://example.com/actor.jpg" }
    ]
  },
  "서브스턴스": {
    "description": "광기와 집착, 절망을 고어와 호러 장르로 풀어낸 파격적인 영화",
    "poster": "https://upload.wikimedia.org/wikipedia/ko/thumb/6/60/%EC%84%9C%EB%B8%8C%EC%8A%A4%ED%84%B4%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpeg/250px-%EC%84%9C%EB%B8%8C%EC%8A%A4%ED%84%B4%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpeg",
    "ost": [
      { "title": "서브스턴스 OST", "url": "https://www.youtube.com/results?search_query=%EC%84%9C%EB%B8%8C%EC%8A%A4%ED%84%B4%EC%8A%A4+OST" }
    ],
    "people": [
      { "name": "주인공", "actor": "배우 이름", "photo": "https://example.com/actor.jpg" }
    ]
  },
  "여행자의 필요": {
    "description": "홍상수 감독의 31번째 장편영화로, 언어와 언어 사이의 시간을 물색하는 번역가의 이야기",
    "poster": "https://i.namu.wiki/i/CEtUoGh94TP9jZmv6dfHi1AT8MjVq507Zt9FeLq2jVZEWxwtTvDjEOsuXN5JZPgUFgwAi_3W_jSNsK93vLJ1tQ.webp",
    "ost": [
      { "title": "여행자의 필요 OST", "url": "https://www.youtube.com/results?search_query=%EC%97%AC%ED%96%89%EC%9E%90%EC%9D%98+%ED%95%84%EC%9A%94+OST" }
    ],
    "people": [
      { "name": "이리스", "actor": "이자벨 위페르", "photo": "https://zrr.kr/9P3M4N" },
      { "name": "윤동주", "actor": "배우 이름", "photo": "https://example.com/actor.jpg" }
    ]
  },
  "신과 함께: 죄와 벌": {
  "description": "한국 전통 사후 세계를 배경으로, 사망한 주인공이 49일간의 심판을 받으며 펼쳐지는 판타지 드라마.",
  "poster": "https://i.namu.wiki/i/q04OiJfNazupCjGmgO9PGYxKTnvqzTYoWvUicjeGf3s3opa9N7xNW_XOn7g9onwXBMwJlxscRSoFBMz8j-H4Aw.webp",
  "ost": [
    { "title": "그대와 함께 - 김동률", "url": "https://www.youtube.com/watch?v=example" },
    { "title": "신과 함께 - 김태성", "url": "https://www.youtube.com/watch?v=example" }
    ],
  "people": [
    { "name": "김자홍", "actor": "하정우", "photo": "https://zrr.kr/example1" },
    { "name": "강림", "actor": "차태현", "photo": "https://zrr.kr/example2" },
    { "name": "해원맥", "actor": "주지훈", "photo": "https://zrr.kr/example3" },
    { "name": "염라대왕", "actor": "이정재", "photo": "https://zrr.kr/example4" }
    ]
  },
  "드래곤 길들이기": {
  "description": "바이킹 소년과 그의 드래곤 친구가 함께 성장하며 우정을 쌓아가는 애니메이션 영화.",
  "poster": "https://upload.wikimedia.org/wikipedia/ko/d/d7/%EB%93%9C%EB%9E%98%EA%B3%A4%EA%B8%B8%EB%93%A4%EC%9D%B4%EA%B8%B02025.jpg",
  "ost": [
    { "title": "Test Drive - John Powell", "url": "https://www.youtube.com/watch?v=example" },
    { "title": "Romantic Flight - John Powell", "url": "https://www.youtube.com/watch?v=example" }
    ],
  "people": [
    { "name": "히컵", "actor": "제이 바루첼", "photo": "https://zrr.kr/example1" },
    { "name": "아스트리드", "actor": "아메리카 페레라", "photo": "https://zrr.kr/example2" },
    { "name": "스토익", "actor": "제라드 버틀러", "photo": "https://zrr.kr/example3" }
    ]
  },
  "극한직업": {
  "description": "마약 밀매 조직을 추적하던 형사들이 치킨집을 운영하며 벌어지는 코믹한 상황을 그린 영화.",
  "poster": "https://i.namu.wiki/i/usx6eksAOUgWAnzvUZNwHyFeIV39SkORkCjBRTm4nh-bxFZ4pnY7x_arMjVDPV7i3s71_DuYVla0Zfr7CqfSZw.webp",
  "ost": [
    { "title": "극한직업 OST", "url": "https://www.youtube.com/results?search_query=%EA%B7%B9%ED%95%9C%EC%A7%81%EC%97%85+OST" }
    ],
  "people": [
    { "name": "고반장", "actor": "류승룡", "photo": "https://zrr.kr/example1" },
    { "name": "장형사", "actor": "이하늬", "photo": "https://zrr.kr/example2" },
    { "name": "마형사", "actor": "진선규", "photo": "https://zrr.kr/example3" },
    { "name": "임형사", "actor": "이동휘", "photo": "https://zrr.kr/example4" },
    { "name": "오형사", "actor": "공명", "photo": "https://zrr.kr/example5" }
    ]
  }
};
  
  // 등록된 영화 목록
  function displayMovieList() {
    const movieListUl = document.getElementById("movieListUl");
    const movieTitles = Object.keys(defaultMovieData);
    
    movieListUl.innerHTML = "";
    movieTitles.forEach(title => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `result.html?movie=${encodeURIComponent(title)}`;
      a.textContent = title;
      a.style.color = "#00bcd4";
      a.style.textDecoration = "none";
      a.addEventListener("mouseover", () => a.style.textDecoration = "underline");
      a.addEventListener("mouseout", () => a.style.textDecoration = "none");
      li.appendChild(a);
      movieListUl.appendChild(li);
    });
  }
  
  // 사용자 추가 영화 목록
  function loadUserMovies() {
    const movies = localStorage.getItem('userMovies');
    return movies ? JSON.parse(movies) : [];
  }
  
  function saveUserMovies(movies) {
    localStorage.setItem('userMovies', JSON.stringify(movies));
  }
  
  function displayUserMovies() {
    const userMovies = loadUserMovies();
    const userMovieListUl = document.getElementById("userMovieListUl");
    
    userMovieListUl.innerHTML = "";
    userMovies.forEach((movie, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${movie} 
        <button onclick="removeUserMovie(${index})" style="background-color: #f44336; padding: 2px 8px; font-size: 12px; margin-left: 10px;">삭제</button>
      `;
      userMovieListUl.appendChild(li);
    });
  }
  
  function addUserMovie() {
    const newTitle = document.getElementById("newTitle").value.trim();
    if (!newTitle) {
      alert("영화 제목을 입력하세요.");
      return;
    }
    
    const userMovies = loadUserMovies();
    
    if (userMovies.includes(newTitle)) {
      alert("이미 추가된 영화입니다.");
      return;
    }
    
    userMovies.push(newTitle);
    saveUserMovies(userMovies);
    displayUserMovies();
    document.getElementById("newTitle").value = "";
  }
  
  function removeUserMovie(index) {
    const userMovies = loadUserMovies();
    
    if (index < 0 || index >= userMovies.length) {
      alert("잘못된 인덱스입니다.");
      return;
    }
    
    userMovies.splice(index, 1);
    saveUserMovies(userMovies);
    displayUserMovies();
  }
  
  function resetUserMovies() {
    if (confirm("사용자 추가 영화 목록을 모두 삭제하시겠습니까?")) {
      saveUserMovies([]);
      displayUserMovies();
    }
  }
  
  // 검색
  document.getElementById("searchForm").addEventListener("submit", function(e) {
    const searchInput = document.getElementById("searchInput");
    const title = searchInput.value.trim();
    
    if (!title) {
      e.preventDefault();
      alert("영화 제목을 입력하세요.");
      return;
    }
  });
  
  document.getElementById("addMovieBtn").addEventListener("click", addUserMovie);
  document.getElementById("resetUserMoviesBtn").addEventListener("click", resetUserMovies);
  
  document.getElementById("newTitle").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addUserMovie();
    }
  });
  
  window.removeUserMovie = removeUserMovie;
  
  function loadUserName() {
    return localStorage.getItem("userName") || "";
  }
  
  function saveUserName(name) {
    localStorage.setItem("userName", name);
  }
  
  function showMainSection(userName) {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("mainSection").style.display = "block";
    document.getElementById("userGreeting").textContent = `안녕하세요, ${userName}님! 🎉`;
  }
  
  function handleUserNameSubmit() {
    const userNameInput = document.getElementById("userNameInput");
    const userName = userNameInput.value.trim();
    
    if (!userName) {
      alert("이름을 입력해주세요.");
      return;
    }
    
    saveUserName(userName);
    showMainSection(userName);
  }
  
  // 사용자 이름 입력 이벤트 리스너
  document.getElementById("enterBtn").addEventListener("click", handleUserNameSubmit);
  document.getElementById("userNameInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      handleUserNameSubmit();
    }
  });
  
  // 페이지 로드 시 초기화
  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash === '#main') {
      const savedUserName = loadUserName();
      if (savedUserName) {
        showMainSection(savedUserName);
        displayMovieList();
        displayUserMovies();
        return;
      }
    }
    
    // 항상 웰컴 섹션부터 시작 (저장된 이름이 있어도)
    document.getElementById("welcomeSection").style.display = "block";
    document.getElementById("mainSection").style.display = "none";
    
    // 입력 필드 초기화 (매번 새로 입력받기 위해)
    document.getElementById("userNameInput").value = "";
    
    displayMovieList();
    displayUserMovies();
  });
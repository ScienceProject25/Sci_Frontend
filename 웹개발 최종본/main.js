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
  
  // 이벤트 리스너 등록
  document.getElementById("addMovieBtn").addEventListener("click", addUserMovie);
  document.getElementById("resetUserMoviesBtn").addEventListener("click", resetUserMovies);
  
  // Enter 키로 영화 추가
  document.getElementById("newTitle").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addUserMovie();
    }
  });
  
  // 전역 함수로 등록
  window.removeUserMovie = removeUserMovie;
  
  // 사용자 이름 관리
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
    // URL 해시 확인하여 메인 섹션으로 직접 이동
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
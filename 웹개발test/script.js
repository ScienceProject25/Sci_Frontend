const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  const title = searchInput.value.trim();
  if (title) {
    // URL 인코딩된 형태로 이동
    window.location.href = `result.html?movie=${encodeURIComponent(title)}`;
  } else {
    alert("영화 제목을 입력하세요.");
  }
});
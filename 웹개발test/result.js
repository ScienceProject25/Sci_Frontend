const params = new URLSearchParams(window.location.search);
const rawTitle = params.get("movie");
const title = rawTitle ? rawTitle.trim() : "";

console.log("검색된 영화명(title):", title);
console.log("defaultMovieData 키 목록:", Object.keys(defaultMovieData));

const data = defaultMovieData[title];

if (!data) {
  document.body.innerHTML = `<h2>❌ "${title}" 영화 정보를 찾을 수 없습니다.</h2>`;
} else {
  document.getElementById("movieTitle").textContent = title;
  document.getElementById("moviePoster").src = data.poster;
  document.getElementById("movieDescription").textContent = data.description;

  const ostList = document.getElementById("ostList");
  ostList.innerHTML = ""; // 초기화
  data.ost.forEach(ost => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = ost.url;
    a.textContent = ost.title;
    a.target = "_blank";
    li.appendChild(a);
    ostList.appendChild(li);
  });

  const peopleList = document.getElementById("peopleList");
  peopleList.innerHTML = ""; // 초기화
  data.people.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${p.name}</strong> (${p.actor})`;
    peopleList.appendChild(li);
  });
}
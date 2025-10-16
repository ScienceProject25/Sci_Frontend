// 전역 변수
let currentUser = '';
let currentPage = 'main';
let filteredDiseases = [...infectiousDiseases];
let currentCategory = 'all';
let searchTerm = '';

// 시뮬레이션 관련 변수
let currentStep = 0;
let isPlaying = false;
let progress = 0;
let animationInterval = null;
let currentType = '';
let currentDisease = null;

// 유틸리티 함수
function getTypeIcon(type) {
  switch (type) {
    case 'virus': return '🦠';
    case 'bacteria': return '🔵';
    case 'protozoa': return '🟢';
    default: return '❓';
  }
}

function getTypeName(type) {
  switch (type) {
    case 'virus': return '바이러스';
    case 'bacteria': return '세균';
    case 'protozoa': return '원생동물';
    default: return '기타';
  }
}

function getSeverityText(severity) {
  switch (severity) {
    case 'high': return '높음';
    case 'medium': return '보통';
    case 'low': return '낮음';
    default: return '알 수 없음';
  }
}

function getSeverityClass(severity) {
  return severity; // high, medium, low
}

// 페이지 관리
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
}

// 메인 페이지 이벤트
function initMainPage() {
  const nameForm = document.getElementById('nameForm');
  nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value.trim();
    if (userName) {
      currentUser = userName;
      document.getElementById('welcomeText').textContent = `안녕하세요, ${userName}님! 👋`;
      showPage('dashboardPage');
      renderDiseases();
    }
  });
}

// 대시보드 페이지
function initDashboardPage() {
  // 뒤로가기 버튼
  document.getElementById('backBtn').addEventListener('click', function() {
    showPage('mainPage');
    document.getElementById('userName').value = '';
    currentUser = '';
  });

  // 검색 기능
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function(e) {
    searchTerm = e.target.value.toLowerCase();
    filterDiseases();
  });

  // 카테고리 필터
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.classList.contains('visualization-btn')) {
        // 시각화 버튼
        const type = this.dataset.type;
        showTransmissionPage(type);
      } else {
        // 카테고리 필터 버튼
        document.querySelectorAll('.filter-btn:not(.visualization-btn)').forEach(b => {
          b.classList.remove('active');
        });
        this.classList.add('active');
        currentCategory = this.dataset.category;
        filterDiseases();
      }
    });
  });
}

// 질병 필터링
function filterDiseases() {
  filteredDiseases = infectiousDiseases.filter(disease => {
    const matchesSearch = searchTerm === '' || 
      disease.name.toLowerCase().includes(searchTerm) ||
      disease.pathogen.toLowerCase().includes(searchTerm) ||
      disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm));
    
    const matchesCategory = currentCategory === 'all' || disease.type === currentCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  renderDiseases();
}

// 질병 카드 렌더링
function renderDiseases() {
  const grid = document.getElementById('diseaseGrid');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');
  
  if (filteredDiseases.length === 0) {
    grid.style.display = 'none';
    noResults.classList.remove('hidden');
    resultsCount.textContent = '검색 결과가 없습니다';
  } else {
    grid.style.display = 'grid';
    noResults.classList.add('hidden');
    resultsCount.textContent = `${filteredDiseases.length}개의 감염병 정보를 찾았습니다${searchTerm ? ` (검색어: "${searchTerm}")` : ''}`;
  }
  
  grid.innerHTML = filteredDiseases.map(disease => `
    <div class="disease-card" onclick="showDiseaseDetail(${disease.id})">
      <div class="disease-card-content">
        <div class="disease-header">
          <div>
            <h3 class="disease-title">${disease.name}</h3>
            <span class="disease-type ${disease.type}">
              ${getTypeIcon(disease.type)} ${getTypeName(disease.type)}
            </span>
          </div>
        </div>
        
        <div class="disease-section">
          <h4>병원체</h4>
          <p>${disease.pathogen}</p>
        </div>
        
        <div class="disease-section">
          <h4>전파 경로</h4>
          <div class="transmission-tags">
            ${disease.transmission.map(method => `<span class="tag">${method}</span>`).join('')}
          </div>
        </div>
        
        <div class="disease-section">
          <h4>주요 증상</h4>
          <div class="symptoms-tags">
            ${disease.symptoms.slice(0, 3).map(symptom => `<span class="tag">${symptom}</span>`).join('')}
            ${disease.symptoms.length > 3 ? `<span class="tag more">+${disease.symptoms.length - 3}개 더</span>` : ''}
          </div>
        </div>
        
        <div class="disease-footer">
          <div class="disease-meta-info">
            <span>📍 ${disease.region}</span>
            <span>📅 ${disease.year}</span>
          </div>
          <div class="severity-info">
            <span>위험도</span>
            <span class="severity-dot ${getSeverityClass(disease.severity)}"></span>
            <span>${getSeverityText(disease.severity)}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// 전염 패턴 시각화 페이지
function showTransmissionPage(type) {
  currentType = type;
  currentStep = 0;
  progress = 0;
  isPlaying = false;
  
  const typeInfo = pathogenCharacteristics[type];
  const steps = transmissionSteps[type];
  
  // 헤더 업데이트
  const icon = document.getElementById('transmissionIcon');
  const title = document.getElementById('transmissionTitle');
  const subtitle = document.getElementById('transmissionSubtitle');
  
  icon.textContent = getTypeIcon(type);
  icon.className = `transmission-icon ${type}`;
  title.textContent = `${typeInfo.name} 전염 패턴 시뮬레이션`;
  subtitle.textContent = `${typeInfo.name}이 어떻게 감염되고 확산되는지 단계별로 확인해보세요`;
  
  // 현재 단계 업데이트
  updateTransmissionStep();
  
  // 특징 정보 업데이트
  document.getElementById('typeCharacteristics').textContent = `${typeInfo.name} 특징`;
  document.getElementById('characteristicsList').innerHTML = typeInfo.characteristics.map(char => `
    <div class="characteristic-item">
      <h4>${char.label}</h4>
      <p>${char.value}</p>
    </div>
  `).join('');
  
  // 중요 안내 업데이트
  const notice = document.getElementById('importantNotice');
  notice.className = `info-card notice ${type}`;
  document.getElementById('noticeText').textContent = typeInfo.notice;
  
  // 단계 목록 렌더링
  renderTransmissionSteps();
  
  // 진행률 바 색상 업데이트
  const progressFill = document.getElementById('progressFill');
  progressFill.className = `progress-fill ${type}`;
  progressFill.style.width = '0%';
  
  showPage('transmissionPage');
}

function initTransmissionPage() {
  // 뒤로가기 버튼
  document.getElementById('transmissionBackBtn').addEventListener('click', function() {
    stopAnimation();
    showPage('dashboardPage');
  });

  // 재생/일시정지 버튼
  document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (isPlaying) {
      pauseAnimation();
    } else {
      playAnimation();
    }
  });

  // 리셋 버튼
  document.getElementById('resetBtn').addEventListener('click', function() {
    resetAnimation();
  });
}

function updateTransmissionStep() {
  const steps = transmissionSteps[currentType];
  const step = steps[currentStep];
  
  document.getElementById('currentStepIcon').textContent = step.visual;
  document.getElementById('currentStepTitle').textContent = `단계 ${currentStep + 1}: ${step.title}`;
  document.getElementById('currentStepDescription').textContent = step.description;
  
  // 단계 목록 업데이트
  renderTransmissionSteps();
}

function renderTransmissionSteps() {
  const steps = transmissionSteps[currentType];
  const stepsList = document.getElementById('stepsList');
  
  stepsList.innerHTML = `
    <h3>전염 과정 단계</h3>
    ${steps.map((step, index) => `
      <div class="step-item ${index === currentStep ? `active ${currentType}` : index < currentStep ? 'completed' : ''}" 
           onclick="goToStep(${index})">
        <div class="step-number">${index + 1}</div>
        <div class="step-content">
          <h4>${step.title}</h4>
          <p>${step.description}</p>
        </div>
      </div>
    `).join('')}
  `;
}

function goToStep(stepIndex) {
  stopAnimation();
  currentStep = stepIndex;
  progress = 0;
  updateTransmissionStep();
  document.getElementById('progressFill').style.width = '0%';
}

function playAnimation() {
  isPlaying = true;
  document.getElementById('playPauseIcon').textContent = '⏸️';
  document.getElementById('playPauseText').textContent = '일시정지';
  
  const steps = transmissionSteps[currentType];
  const currentStepData = steps[currentStep];
  const stepDuration = currentStepData.duration;
  
  animationInterval = setInterval(() => {
    progress += (100 / (stepDuration / 100));
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    if (progress >= 100) {
      if (currentStep < steps.length - 1) {
        currentStep++;
        progress = 0;
        updateTransmissionStep();
      } else {
        pauseAnimation();
        progress = 100;
        document.getElementById('progressFill').style.width = '100%';
      }
    }
  }, 100);
}

function pauseAnimation() {
  isPlaying = false;
  document.getElementById('playPauseIcon').textContent = '▶️';
  document.getElementById('playPauseText').textContent = '재생';
  stopAnimation();
}

function stopAnimation() {
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }
}

function resetAnimation() {
  stopAnimation();
  isPlaying = false;
  currentStep = 0;
  progress = 0;
  updateTransmissionStep();
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('playPauseIcon').textContent = '▶️';
  document.getElementById('playPauseText').textContent = '재생';
}

// 질병 상세 페이지
function showDiseaseDetail(diseaseId) {
  const disease = infectiousDiseases.find(d => d.id === diseaseId);
  if (!disease) return;
  
  currentDisease = disease;
  currentType = disease.type;
  currentStep = 0;
  progress = 0;
  isPlaying = false;
  
  // 헤더 업데이트
  const icon = document.getElementById('diseaseDetailIcon');
  const title = document.getElementById('diseaseDetailTitle');
  
  icon.textContent = getTypeIcon(disease.type);
  icon.className = `disease-detail-icon ${disease.type}`;
  title.textContent = disease.name;
  
  // 메타 정보 업데이트
  const typeBadge = document.getElementById('diseaseType');
  typeBadge.textContent = getTypeName(disease.type);
  typeBadge.className = `type-badge ${disease.type}`;
  
  document.getElementById('diseaseRegion').textContent = `📍 ${disease.region}`;
  document.getElementById('diseaseYear').textContent = `📅 ${disease.year}`;
  
  const severityDot = document.getElementById('diseaseSeverity');
  severityDot.className = `severity-dot ${getSeverityClass(disease.severity)}`;
  severityDot.nextElementSibling.textContent = getSeverityText(disease.severity);
  
  // 개요 정보 업데이트
  document.getElementById('diseasePathogen').textContent = disease.pathogen;
  
  document.getElementById('diseaseTransmission').innerHTML = disease.transmission.map(method => 
    `<span class="transmission-tag">${method}</span>`
  ).join('');
  
  document.getElementById('diseaseSymptoms').innerHTML = disease.symptoms.map(symptom => 
    `<div class="symptom-item">
      <span>🌡️</span>
      <span>${symptom}</span>
    </div>`
  ).join('');
  
  // 빠른 정보 업데이트
  document.getElementById('quickType').textContent = getTypeName(disease.type);
  document.getElementById('quickRegion').textContent = disease.region;
  document.getElementById('quickYear').textContent = disease.year;
  
  const quickSeverityDot = document.getElementById('quickSeverityDot');
  quickSeverityDot.className = `severity-dot ${getSeverityClass(disease.severity)}`;
  document.getElementById('quickSeverityText').textContent = getSeverityText(disease.severity);
  
  // 중요 안내 업데이트
  const notice = document.getElementById('diseaseNotice');
  notice.className = `info-card notice ${disease.type}`;
  
  const typeInfo = pathogenCharacteristics[disease.type];
  let noticeText = '';
  if (disease.type === 'virus') {
    noticeText = '바이러스 감염은 항생제로 치료할 수 없으며, 예방과 대증치료가 중요합니다.';
  } else if (disease.type === 'bacteria') {
    noticeText = '세균 감염은 적절한 항생제로 치료할 수 있으나, 내성 방지를 위해 처방에 따라 복용해야 합니다.';
  } else if (disease.type === 'protozoa') {
    noticeText = '원생동물 감염은 특별한 치료제가 필요할 수 있으며, 위생 관리가 매우 중요합니다.';
  }
  document.getElementById('diseaseNoticeText').textContent = noticeText;
  
  // 시뮬레이션 업데이트
  updateDiseaseStep();
  renderDiseaseSteps();
  
  // 진행률 바 색상 업데이트
  const progressFill = document.getElementById('diseaseProgressFill');
  progressFill.className = `progress-fill ${disease.type}`;
  progressFill.style.width = '0%';
  
  showPage('diseaseDetailPage');
}

function initDiseaseDetailPage() {
  // 뒤로가기 버튼
  document.getElementById('diseaseDetailBackBtn').addEventListener('click', function() {
    stopDiseaseAnimation();
    showPage('dashboardPage');
  });

  // 재생/일시정지 버튼
  document.getElementById('diseasePlayPauseBtn').addEventListener('click', function() {
    if (isPlaying) {
      pauseDiseaseAnimation();
    } else {
      playDiseaseAnimation();
    }
  });

  // 리셋 버튼
  document.getElementById('diseaseResetBtn').addEventListener('click', function() {
    resetDiseaseAnimation();
  });
}

function getDiseaseTransmissionSteps(disease) {
  const baseSteps = transmissionSteps[disease.type];
  return baseSteps.map((step, index) => {
    if (index === 0) {
      return {
        ...step,
        title: `${getTypeName(disease.type)} 침입`,
        description: `${disease.name} ${getTypeName(disease.type).toLowerCase()}가 ${disease.transmission.join(', ')}을 통해 체내로 침입합니다.`
      };
    } else if (index === 5) {
      return {
        ...step,
        title: '증상 발현',
        description: `${disease.symptoms.slice(0, 3).join(', ')} 등의 증상이 나타납니다.`
      };
    }
    return step;
  });
}

function updateDiseaseStep() {
  const steps = getDiseaseTransmissionSteps(currentDisease);
  const step = steps[currentStep];
  
  document.getElementById('diseaseStepIcon').textContent = step.visual;
  document.getElementById('diseaseStepTitle').textContent = `단계 ${currentStep + 1}: ${step.title}`;
  document.getElementById('diseaseStepDescription').textContent = step.description;
  
  renderDiseaseSteps();
}

function renderDiseaseSteps() {
  const steps = getDiseaseTransmissionSteps(currentDisease);
  const stepsList = document.getElementById('diseaseStepsList');
  
  stepsList.innerHTML = steps.map((step, index) => `
    <div class="disease-step-item ${index === currentStep ? `active ${currentDisease.type}` : index < currentStep ? 'completed' : ''}" 
         onclick="goToDiseaseStep(${index})">
      <div class="disease-step-number">${index + 1}</div>
      <div class="disease-step-content">
        <h4>${step.title}</h4>
      </div>
      <div class="disease-step-visual">${step.visual}</div>
    </div>
  `).join('');
}

function goToDiseaseStep(stepIndex) {
  stopDiseaseAnimation();
  currentStep = stepIndex;
  progress = 0;
  updateDiseaseStep();
  document.getElementById('diseaseProgressFill').style.width = '0%';
}

function playDiseaseAnimation() {
  isPlaying = true;
  document.getElementById('diseasePlayPauseIcon').textContent = '⏸️';
  document.getElementById('diseasePlayPauseText').textContent = '일시정지';
  
  const steps = getDiseaseTransmissionSteps(currentDisease);
  const currentStepData = steps[currentStep];
  const stepDuration = currentStepData.duration;
  
  animationInterval = setInterval(() => {
    progress += (100 / (stepDuration / 100));
    document.getElementById('diseaseProgressFill').style.width = `${progress}%`;
    
    if (progress >= 100) {
      if (currentStep < steps.length - 1) {
        currentStep++;
        progress = 0;
        updateDiseaseStep();
      } else {
        pauseDiseaseAnimation();
        progress = 100;
        document.getElementById('diseaseProgressFill').style.width = '100%';
      }
    }
  }, 100);
}

function pauseDiseaseAnimation() {
  isPlaying = false;
  document.getElementById('diseasePlayPauseIcon').textContent = '▶️';
  document.getElementById('diseasePlayPauseText').textContent = '재생';
  stopDiseaseAnimation();
}

function stopDiseaseAnimation() {
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }
}

function resetDiseaseAnimation() {
  stopDiseaseAnimation();
  isPlaying = false;
  currentStep = 0;
  progress = 0;
  updateDiseaseStep();
  document.getElementById('diseaseProgressFill').style.width = '0%';
  document.getElementById('diseasePlayPauseIcon').textContent = '▶️';
  document.getElementById('diseasePlayPauseText').textContent = '재생';
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
  initMainPage();
  initDashboardPage();
  initTransmissionPage();
  initDiseaseDetailPage();
  
  // 초기 페이지 표시
  showPage('mainPage');
});
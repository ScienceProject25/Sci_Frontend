const infectiousDiseases = [
    // 바이러스
    {
      id: 1,
      name: 'COVID-19',
      type: 'virus',
      pathogen: 'SARS-CoV-2',
      transmission: ['비말전파', '공기전파', '접촉전파'],
      symptoms: ['발열', '기침', '호흡곤란', '후각상실', '미각상실'],
      region: '전 세계',
      year: 2019,
      severity: 'high'
    },
    {
      id: 2,
      name: '인플루엔자',
      type: 'virus',
      pathogen: 'Influenza virus',
      transmission: ['비말전파', '접촉전파'],
      symptoms: ['발열', '기침', '인후통', '근육통', '두통'],
      region: '전 세계',
      year: 2023,
      severity: 'medium'
    },
    {
      id: 3,
      name: 'MERS',
      type: 'virus',
      pathogen: 'MERS-CoV',
      transmission: ['비말전파', '접촉전파'],
      symptoms: ['발열', '기침', '호흡곤란', '설사'],
      region: '중동',
      year: 2015,
      severity: 'high'
    },
    {
      id: 4,
      name: '노로바이러스',
      type: 'virus',
      pathogen: 'Norovirus',
      transmission: ['경구감염', '접촉전파', '공기전파'],
      symptoms: ['구토', '설사', '복통', '발열'],
      region: '전 세계',
      year: 2023,
      severity: 'medium'
    },
    {
      id: 5,
      name: 'A형간염',
      type: 'virus',
      pathogen: 'Hepatitis A virus',
      transmission: ['경구감염', '접촉전파'],
      symptoms: ['발열', '피로감', '황달', '복통', '구토'],
      region: '개발도상국',
      year: 2022,
      severity: 'medium'
    },
  
    // 세균
    {
      id: 6,
      name: '결핵',
      type: 'bacteria',
      pathogen: 'Mycobacterium tuberculosis',
      transmission: ['공기전파'],
      symptoms: ['지속적 기침', '가래', '발열', '체중감소', '야간발한'],
      region: '전 세계',
      year: 2023,
      severity: 'high'
    },
    {
      id: 7,
      name: '폐렴구균감염',
      type: 'bacteria',
      pathogen: 'Streptococcus pneumoniae',
      transmission: ['비말전파', '접촉전파'],
      symptoms: ['발열', '기침', '호흡곤란', '흉통'],
      region: '전 세계',
      year: 2023,
      severity: 'medium'
    },
    {
      id: 8,
      name: '레지오넬라증',
      type: 'bacteria',
      pathogen: 'Legionella pneumophila',
      transmission: ['공기전파', '에어로졸'],
      symptoms: ['발열', '기침', '호흡곤란', '근육통', '두통'],
      region: '선진국',
      year: 2022,
      severity: 'high'
    },
    {
      id: 9,
      name: '살모넬라감염',
      type: 'bacteria',
      pathogen: 'Salmonella spp.',
      transmission: ['경구감염', '접촉전파'],
      symptoms: ['발열', '설사', '복통', '구토'],
      region: '전 세계',
      year: 2023,
      severity: 'medium'
    },
    {
      id: 10,
      name: '메르스 관련 폐렴',
      type: 'bacteria',
      pathogen: 'Klebsiella pneumoniae',
      transmission: ['접촉전파', '의료기구'],
      symptoms: ['발열', '기침', '호흡곤란', '가래'],
      region: '병원 내',
      year: 2023,
      severity: 'high'
    },
  
    // 원생동물
    {
      id: 11,
      name: '말라리아',
      type: 'protozoa',
      pathogen: 'Plasmodium spp.',
      transmission: ['모기매개'],
      symptoms: ['발열', '오한', '두통', '구토', '근육통'],
      region: '열대지역',
      year: 2023,
      severity: 'high'
    },
    {
      id: 12,
      name: '아메바성이질',
      type: 'protozoa',
      pathogen: 'Entamoeba histolytica',
      transmission: ['경구감염', '접촉전파'],
      symptoms: ['설사', '복통', '발열', '혈변'],
      region: '개발도상국',
      year: 2022,
      severity: 'medium'
    },
    {
      id: 13,
      name: '지아디아증',
      type: 'protozoa',
      pathogen: 'Giardia lamblia',
      transmission: ['경구감염', '오염된 물'],
      symptoms: ['설사', '복통', '복부팽만', '구토'],
      region: '전 세계',
      year: 2023,
      severity: 'low'
    },
    {
      id: 14,
      name: '톡소플라즈마증',
      type: 'protozoa',
      pathogen: 'Toxoplasma gondii',
      transmission: ['접촉전파', '경구감염'],
      symptoms: ['발열', '림프절 비대', '근육통', '피로감'],
      region: '전 세계',
      year: 2023,
      severity: 'low'
    },
    {
      id: 15,
      name: '크립토스포리디움증',
      type: 'protozoa',
      pathogen: 'Cryptosporidium spp.',
      transmission: ['경구감염', '오염된 물'],
      symptoms: ['설사', '복통', '구토', '발열'],
      region: '전 세계',
      year: 2022,
      severity: 'medium'
    }
  ];
  
  // 전염 과정 데이터
  const transmissionSteps = {
    virus: [
      {
        id: 1,
        title: '바이러스 침입',
        description: '바이러스가 호흡기나 접촉을 통해 체내로 침입합니다.',
        duration: 2000,
        visual: '🦠 → 👤'
      },
      {
        id: 2,
        title: '세포 부착',
        description: '바이러스가 숙주 세포의 수용체에 부착합니다.',
        duration: 2000,
        visual: '🦠 + 🔬'
      },
      {
        id: 3,
        title: '세포 침투',
        description: '바이러스가 세포막을 통과하여 세포 내부로 들어갑니다.',
        duration: 2000,
        visual: '🦠 ➡️ 🔬'
      },
      {
        id: 4,
        title: '유전물질 방출',
        description: '바이러스가 자신의 DNA/RNA를 세포 내로 방출합니다.',
        duration: 2000,
        visual: '🧬 💥'
      },
      {
        id: 5,
        title: '복제 과정',
        description: '숙주 세포의 기능을 이용해 바이러스가 자신을 복제합니다.',
        duration: 3000,
        visual: '🦠 ➡️ 🦠🦠🦠'
      },
      {
        id: 6,
        title: '새로운 바이러스 생성',
        description: '복제된 바이러스들이 조립되어 새로운 바이러스 입자가 만들어집니다.',
        duration: 2000,
        visual: '🔧 🦠🦠🦠'
      },
      {
        id: 7,
        title: '세포 파괴 및 확산',
        description: '세포가 파괴되며 새로운 바이러스들이 방출되어 다른 세포로 확산됩니다.',
        duration: 3000,
        visual: '💥 🦠🦠🦠 ➡️ 👥'
      }
    ],
    bacteria: [
      {
        id: 1,
        title: '세균 침입',
        description: '세균이 상처, 호흡기, 소화기 등을 통해 체내로 침입합니다.',
        duration: 2000,
        visual: '🔵 → 👤'
      },
      {
        id: 2,
        title: '부착 및 정착',
        description: '세균이 조직이나 점막에 부착하여 정착합니다.',
        duration: 2000,
        visual: '🔵 ⚓ 🔬'
      },
      {
        id: 3,
        title: '영양분 흡수',
        description: '세균이 주변 환경에서 영양분을 흡수하기 시작합니다.',
        duration: 2000,
        visual: '🔵 🍽️ 💪'
      },
      {
        id: 4,
        title: '이분법 분열',
        description: '세균이 이분법으로 분열하여 개체 수를 늘립니다.',
        duration: 3000,
        visual: '🔵 ➡️ 🔵🔵'
      },
      {
        id: 5,
        title: '독소 생성',
        description: '일부 세균은 독소를 생성하여 숙주에게 해를 끼칩니다.',
        duration: 2000,
        visual: '🔵 ☠️ 🔬'
      },
      {
        id: 6,
        title: '면역 회피',
        description: '세균이 숙주의 면역 시스템을 회피하거나 억제합니다.',
        duration: 2000,
        visual: '🔵 🛡️ ❌'
      },
      {
        id: 7,
        title: '확산 및 전파',
        description: '세균이 혈류나 림프계를 통해 다른 부위로 확산되거나 외부로 전파됩니다.',
        duration: 3000,
        visual: '🔵🔵🔵 ➡️ 👥'
      }
    ],
    protozoa: [
      {
        id: 1,
        title: '원생동물 침입',
        description: '원생동물이 오염된 물, 음식, 또는 매개체를 통해 체내로 침입합니다.',
        duration: 2000,
        visual: '🟢 → 👤'
      },
      {
        id: 2,
        title: '생존 환경 탐색',
        description: '원생동물이 체내에서 생존에 적합한 환경을 찾습니다.',
        duration: 2000,
        visual: '🟢 🔍 🏠'
      },
      {
        id: 3,
        title: '영양분 섭취',
        description: '원생동물이 숙주의 영양분이나 세포를 섭취합니다.',
        duration: 2000,
        visual: '🟢 🍽️ 🔬'
      },
      {
        id: 4,
        title: '무성생식',
        description: '원생동물이 분열이나 출아법으로 개체 수를 증가시킵니다.',
        duration: 3000,
        visual: '🟢 ➡️ 🟢🟢'
      },
      {
        id: 5,
        title: '조직 침범',
        description: '원생동물이 장벽이나 다른 조직을 침범하여 손상을 일으킵니다.',
        duration: 2000,
        visual: '🟢 💥 🔬'
      },
      {
        id: 6,
        title: '낭포 형성',
        description: '일부 원생동물은 불리한 환경에서 낭포를 형성하여 생존합니다.',
        duration: 2000,
        visual: '🟢 🛡️ 🥚'
      },
      {
        id: 7,
        title: '배출 및 전파',
        description: '원생동물이나 낭포가 배설물을 통해 외부로 배출되어 다른 숙주로 전파됩니다.',
        duration: 3000,
        visual: '🟢🟢🟢 ➡️ 👥'
      }
    ]
  };
  
  // 병원체별 특징 정보
  const pathogenCharacteristics = {
    virus: {
      name: '바이러스',
      characteristics: [
        { label: '크기', value: '20-300 나노미터 (매우 작음)' },
        { label: '구조', value: 'DNA 또는 RNA + 단백질 외피' },
        { label: '특징', value: '숙주 세포 없이는 생존 불가' }
      ],
      notice: '바이러스는 항생제로 치료할 수 없으며, 예방이 가장 중요합니다.'
    },
    bacteria: {
      name: '세균',
      characteristics: [
        { label: '크기', value: '0.5-5 마이크로미터' },
        { label: '구조', value: '세포벽, 세포막, 핵산' },
        { label: '특징', value: '독립적 생존 및 번식 가능' }
      ],
      notice: '세균 감염은 적절한 항생제로 치료할 수 있습니다.'
    },
    protozoa: {
      name: '원생동물',
      characteristics: [
        { label: '크기', value: '10-50 마이크로미터' },
        { label: '구조', value: '진핵세포, 세포막, 핵' },
        { label: '특징', value: '단세포 진핵생물' }
      ],
      notice: '원생동물 감염은 주로 위생 관리로 예방할 수 있습니다.'
    }
  };
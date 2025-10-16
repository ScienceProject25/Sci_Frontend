import React, { useState } from 'react';
import { Gift, Heart, Sparkles, ArrowLeft } from 'lucide-react';
import CommentSection from './components/CommentSection';

interface Comment {
  id: string;
  author: string;
  message: string;
  createdAt: Date;
}

function App() {
  const [currentName, setCurrentName] = useState('');
  const [showLetter, setShowLetter] = useState(false);
  const [inputName, setInputName] = useState('');
  const [comments, setComments] = useState<Record<string, Comment[]>>({});

  // 편지 내용
  const letters: Record<string, string> = {
    '김도연': '친애하는 민수야! 🎉\n\n오늘은 너의 특별한 날이야. 항상 밝은 웃음으로 우리를 환하게 만들어주는 너에게 진심으로 고마워. 새로운 한 살, 더욱 행복하고 건강하게 보내길 바라!\n\n생일 축하해! 🎂✨',
    '김채영': '사랑하는 지은이에게 💝\n\n너의 생일을 축하해! 언제나 따뜻한 마음으로 친구들을 챙겨주는 너의 모습이 정말 아름다워. 앞으로도 꿈꾸는 모든 일들이 이루어지길 바라!\n\n행복한 생일 보내! 🌟🎈',
    '박서연': '멋진 태현아! 🎊\n\n생일 축하해! 너의 열정과 유머 감각은 정말 대단해. 함께 있으면 언제나 즐겁고 웃음이 끊이지 않아. 새로운 나이에도 지금처럼 멋진 모습으로!\n\n최고의 하루 보내! 🎁🎵',
    '우소율': '사랑하는 우소율에게 💖\n\n생일 축하해! 너의 밝은 에너지와 따뜻한 마음이 언제나 우리에게 힘이 돼. 새로운 한 해도 건강하고 행복하길 바라!\n\n최고의 생일 보내! 🎉✨',
    '윤서정': '멋진 윤서정에게 🌟\n\n생일 축하해! 너의 성실함과 친절함이 정말 본받을 점이야. 앞으로도 꿈꾸는 모든 것들이 이루어지길 바라!\n\n행복한 하루 되길! 🎂💝',
    '정혜민': '소중한 정혜민에게 🎁\n\n생일 축하해! 항상 긍정적이고 열정적인 너의 모습이 정말 멋져. 새로운 나이에도 지금처럼 빛나길 바라!\n\n최고의 생일 보내! 🎊🌈',
  };

  // 각 친구별 이미지
  const friendImages: Record<string, string> = {
    '김도연': 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    '김채영': 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=400',
    '박서연': 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
    '우소율': 'https://images.pexels.com/photos/1325807/pexels-photo-1325807.jpeg?auto=compress&cs=tinysrgb&w=400',
    '윤서정': 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    '정혜민': 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      setCurrentName(inputName.trim());
      setShowLetter(true);
    }
  };

  const goBack = () => {
    setShowLetter(false);
    setCurrentName('');
    setInputName('');
  };

  const handleAddComment = (friendName: string, comment: Omit<Comment, 'id' | 'createdAt'>) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date(),
    };

    setComments(prev => ({
      ...prev,
      [friendName]: [...(prev[friendName] || []), newComment],
    }));
  };

  // ---------- 편지 보기 페이지 ----------
  if (showLetter) {
    const letter = letters[currentName] || 
      `친애하는 ${currentName}에게 🎉\n\n생일 축하해! 너의 특별한 날을 함께 축하할 수 있어서 정말 기뻐. 항상 밝고 긍정적인 에너지로 주변을 환하게 만들어주는 너에게 진심으로 고마워.\n\n새로운 한 살, 더욱 행복하고 건강하며, 꿈꾸는 모든 일들이 이루어지는 한 해가 되길 바라!\n\n생일 축하해! 🎂✨💝`;

    const defaultImage = 'https://images.pexels.com/photos/1070873/pexels-photo-1070873.jpeg?auto=compress&cs=tinysrgb&w=400';
    const friendImage = friendImages[currentName] || defaultImage;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto pt-8 relative z-10">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-amber-100/50">

            {/* 제목 */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                Happy Birthday! 🎂
              </h1>
              <div className="text-2xl">🎉 🎈 🎊</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* 편지 내용 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-lg whitespace-pre-line text-lg leading-relaxed text-gray-700">
                {letter}
              </div>

              {/* 친구 이미지 */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  <img
                    src={friendImage}
                    alt={`${currentName}을 위한 이미지`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <p className="text-center mt-4 text-amber-700 font-semibold text-lg">
                    {currentName}을 위한 특별한 하루! 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* 댓글 섹션 */}
            <CommentSection
              friendName={currentName}
              comments={comments[currentName] || []}
              onAddComment={(comment) => handleAddComment(currentName, comment)}
            />

            {/* 돌아가기 버튼 */}
            <div className="text-center mt-8">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
              >
                <ArrowLeft size={18} />
                돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- 메인 페이지 ----------
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            생일축하해! 🎉
          </h1>
          <p className="text-xl text-gray-700">특별한 친구를 위한 생일 편지</p>
        </div>

        {/* 이름 입력 폼 */}
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-amber-100/50">
          <form onSubmit={handleSubmit} className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-gray-700">누구의 편지를 보고 싶나요?</h2>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="친구의 이름을 입력해주세요"
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none text-center bg-white/80"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Gift size={20} />
              편지 확인하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

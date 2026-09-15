// アプリの状態管理変数
let currentStage = 1;
let currentScore = 0;
let consecutiveCorrect = 0;
let consecutiveIncorrect = 0;
let totalAnswered = 0;
let totalCorrect = 0;
let timeLeft = 90;
let timerInterval = null;
let currentQuestion = null;
let isReviewMode = false;

// 誤答リスト（ローカルストレージ保持）
let reviewQuestions = JSON.parse(localStorage.getItem('english_review_questions')) || [];

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const reviewBtn = document.getElementById('review-btn');
const retryBtn = document.getElementById('retry-btn');
const goReviewBtn = document.getElementById('go-review-btn');

const timeLeftEl = document.getElementById('time-left');
const currentScoreEl = document.getElementById('current-score');
const stageBadgeEl = document.getElementById('stage-badge');
const questionTextEl = document.getElementById('question-text');
const choicesContainerEl = document.getElementById('choices-container');
const feedbackOverlayEl = document.getElementById('feedback-overlay');
const reviewCountEl = document.getElementById('review-count');

const finalScoreEl = document.getElementById('final-score');
const finalStageEl = document.getElementById('final-stage');
const accuracyRateEl = document.getElementById('accuracy-rate');
const correctCountEl = document.getElementById('correct-count');
const totalCountEl = document.getElementById('total-count');

// ステージ表示更新用マッピング
const stageNames = {
  1: "STAGE 1: BASIC",
  2: "STAGE 2: STANDARD",
  3: "STAGE 3: HIGH",
  4: "STAGE 4: EXPERT"
};

const stageColors = {
  1: "#3b82f6",
  2: "#10b981",
  3: "#f59e0b",
  4: "#ef4444"
};

// 初期表示
updateReviewCount();

// イベントリスナーの設定
startBtn.addEventListener('click', () => startGame(false));
reviewBtn.addEventListener('click', () => startGame(true));
retryBtn.addEventListener('click', () => startGame(false));
goReviewBtn.addEventListener('click', () => startGame(true));

// ゲーム開始処理
function startGame(review = false) {
  isReviewMode = review;
  
  if (isReviewMode && reviewQuestions.length === 0) {
    alert("復習する問題がありません！");
    return;
  }

  // 変数のリセット
  currentStage = 1;
  currentScore = 0;
  consecutiveCorrect = 0;
  consecutiveIncorrect = 0;
  totalAnswered = 0;
  totalCorrect = 0;
  timeLeft = 90;

  currentScoreEl.textContent = currentScore;
  timeLeftEl.textContent = timeLeft;

  // 画面の切り替え
  startScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  playScreen.classList.add('active');

  updateStageUI();

  if (isReviewMode) {
    stageBadgeEl.textContent = "復習モード";
    stageBadgeEl.style.backgroundColor = "#8b5cf6";
    loadNextReviewQuestion();
  } else {
    loadNextQuestion();
    // タイマー開始
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// タイマー更新
function updateTimer() {
  timeLeft--;
  timeLeftEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    endGame();
  }
}

// 通常問題の読み込み
function loadNextQuestion() {
  const stageQuestions = questionsData[currentStage];
  const randomIndex = Math.floor(Math.random() * stageQuestions.length);
  currentQuestion = stageQuestions[randomIndex];

  displayQuestion(currentQuestion);
}

// 復習問題の読み込み
function loadNextReviewQuestion() {
  if (reviewQuestions.length === 0) {
    alert("復習完了！全ての解き直しが終わりました。");
    endGame();
    return;
  }
  const randomIndex = Math.floor(Math.random() * reviewQuestions.length);
  currentQuestion = reviewQuestions[randomIndex];
  displayQuestion(currentQuestion);
}

// 問題と選択肢の描画
function displayQuestion(q) {
  questionTextEl.textContent = q.q;
  choicesContainerEl.innerHTML = '';

  q.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => handleAnswer(index));
    choicesContainerEl.appendChild(btn);
  });
}

// 回答処理
function handleAnswer(selectedIndex) {
  const isCorrect = selectedIndex === currentQuestion.answer;
  totalAnswered++;

  if (isCorrect) {
    totalCorrect++;
    consecutiveIncorrect = 0;
    
    if (!isReviewMode) {
      currentScore += currentStage * 100;
      currentScoreEl.textContent = currentScore;
      consecutiveCorrect++;

      // 3問連続正解で昇格（最大レベル4）
      if (consecutiveCorrect === 3 && currentStage < 4) {
        currentStage++;
        consecutiveCorrect = 0;
        showFeedback("STAGE UP!", "up");
        updateStageUI();
      }
    } else {
      // 復習モードで正解した問題はリストから取り除く
      reviewQuestions = reviewQuestions.filter(q => q.q !== currentQuestion.q);
      saveReviewQuestions();
      updateReviewCount();
    }
  } else {
    consecutiveCorrect = 0;

    // 間違えた問題を復習リストに追加
    if (!reviewQuestions.some(q => q.q === currentQuestion.q)) {
      reviewQuestions.push(currentQuestion);
      saveReviewQuestions();
      updateReviewCount();
    }

    if (!isReviewMode) {
      consecutiveIncorrect++;
      // 2問連続不正解で降格（最小レベル1）
      if (consecutiveIncorrect === 2 && currentStage > 1) {
        currentStage--;
        consecutiveIncorrect = 0;
        showFeedback("STAGE DOWN...", "down");
        updateStageUI();
      }
    }
  }

  // 次の問題へ
  if (isReviewMode) {
    loadNextReviewQuestion();
  } else {
    loadNextQuestion();
  }
}

// ステージ表示の更新
function updateStageUI() {
  if (isReviewMode) return;
  stageBadgeEl.textContent = stageNames[currentStage];
  stageBadgeEl.style.backgroundColor = stageColors[currentStage];
}

// 昇格・降格アニメーション演出
function showFeedback(text, type) {
  feedbackOverlayEl.textContent = text;
  feedbackOverlayEl.className = `feedback-overlay ${type} show`;
  setTimeout(() => {
    feedbackOverlayEl.className = 'feedback-overlay hidden';
  }, 800);
}

// ゲーム終了処理
function endGame() {
  clearInterval(timerInterval);
  playScreen.classList.remove('active');
  resultScreen.classList.add('active');

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  finalScoreEl.textContent = currentScore;
  finalStageEl.textContent = stageNames[currentStage];
  accuracyRateEl.textContent = accuracy;
  correctCountEl.textContent = totalCorrect;
  totalCountEl.textContent = totalAnswered;
}

// 復習件数の更新・保存
function saveReviewQuestions() {
  localStorage.setItem('english_review_questions', JSON.stringify(reviewQuestions));
}

function updateReviewCount() {
  reviewCountEl.textContent = reviewQuestions.length;
}
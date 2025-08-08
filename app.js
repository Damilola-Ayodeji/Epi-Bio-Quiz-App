
/* Main JS for EpiBio Quiz app (offline + optional online) */
let allQuestions = offlineQuestions || [];
const modeSelect = document.getElementById('modeSelect');
const conceptSelect = document.getElementById('conceptSelect');
const difficultySelect = document.getElementById('difficultySelect');
const startBtn = document.getElementById('startBtn');
const quizArea = document.getElementById('quizArea');
const resultsArea = document.getElementById('resultsArea');
const getQuestionBtn = document.getElementById('getQuestionBtn');

// populate concept select
const concepts = Array.from(new Set(allQuestions.map(q=>q.concept))).sort();
concepts.forEach(c=>{
  const opt = document.createElement('option'); opt.value=c; opt.innerText=c; conceptSelect.appendChild(opt);
});

function isOnline() {
  return navigator.onLine;
}

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a; }

function pickOfflineQuestions(concept, difficulty, n=10){
  let pool = allQuestions.slice();
  if(concept && concept!=='All') pool = pool.filter(q=>q.concept===concept);
  if(difficulty && difficulty!=='All') pool = pool.filter(q=>q.difficulty===difficulty);
  if(pool.length===0) pool = allQuestions.slice();
  pool = shuffle(pool);
  // avoid immediate repeats by using localStorage history
  const seen = JSON.parse(localStorage.getItem('epibio_seen')||'[]');
  pool = pool.filter(q=> !seen.includes(q.id)).concat(pool); // prefer unseen
  return pool.slice(0,n);
}

function renderQuiz(questions){
  quizArea.innerHTML='';
  resultsArea.innerHTML='';
  const form = document.createElement('div');
  let score=0;
  questions.forEach((q, idx)=>{
    const card = document.createElement('div'); card.className='question-card';
    const qh = document.createElement('div'); qh.innerHTML=`<strong>Q${idx+1}.</strong> ${q.question} <div class="small">Concept: ${q.concept} • Difficulty: ${q.difficulty}</div>`;
    card.appendChild(qh);
    const opts = document.createElement('div'); opts.className='options';
    q.options.forEach((opt, i)=>{
      const btn = document.createElement('button'); btn.className='option-btn'; btn.innerText=opt;
      btn.onclick = ()=>{
        if(btn.classList.contains('answered')) return;
        btn.classList.add('answered');
        const correct = (i===q.answer_index);
        if(correct){ btn.classList.add('correct'); score++; }
        else{ btn.classList.add('wrong'); 
          // highlight correct option
          const children = opts.querySelectorAll('.option-btn');
          children[q.answer_index].classList.add('correct');
        }
        // show explanation
        const ex = document.createElement('div'); ex.className='small'; ex.style.marginTop='8px'; ex.innerText = 'Explanation: '+q.explanation;
        card.appendChild(ex);
        // record seen
        const seen = JSON.parse(localStorage.getItem('epibio_seen')||'[]');
        if(!seen.includes(q.id)){ seen.push(q.id); localStorage.setItem('epibio_seen', JSON.stringify(seen)); }
        // store history
        const hist = JSON.parse(localStorage.getItem('epibio_history')||'[]');
        hist.unshift({id:q.id, question:q.question, selected:opt, correct:q.options[q.answer_index], correctFlag:correct, time:Date.now()});
        localStorage.setItem('epibio_history', JSON.stringify(hist.slice(0,200)));
      };
      opts.appendChild(btn);
    });
    card.appendChild(opts);
    form.appendChild(card);
  });
  const scoreDiv = document.createElement('div'); scoreDiv.style.marginTop='12px'; scoreDiv.innerHTML=`<strong>Score will appear here after you answer all questions.</strong>`;
  form.appendChild(scoreDiv);
  quizArea.appendChild(form);
  // scroll to quiz
  window.scrollTo({top:quizArea.offsetTop, behavior:'smooth'});
}

startBtn.addEventListener('click', ()=>{
  const mode = modeSelect.value;
  if(mode==='online' || (mode==='auto' && isOnline())){
    // online mode: try calling external API /api/generate-question if available
    // For static GitHub Pages deployments there is no backend; show message and fall back to offline
    // If you have your own API, set window.EPIBIO_API_ENDPOINT to the endpoint URL that returns question JSON
    const endpoint = window.EPIBIO_API_ENDPOINT || null;
    if(!endpoint){
      alert('Online mode selected but no API endpoint configured. Falling back to offline mode.');
      const qs = pickOfflineQuestions(conceptSelect.value, difficultySelect.value, 10);
      renderQuiz(qs);
      return;
    }
    // fetch 10 questions sequentially
    (async ()=>{
      quizArea.innerHTML='Loading online questions...';
      let qs = [];
      for(let i=0;i<10;i++){
        try{
          const resp = await fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({concept:conceptSelect.value, difficulty:difficultySelect.value})});
          const data = await resp.json();
          if(data && data.question) qs.push(data.question);
        }catch(e){
          console.error(e);
        }
      }
      if(qs.length===0){ alert('Failed to fetch online questions; falling back to offline.'); const qs2 = pickOfflineQuestions(conceptSelect.value, difficultySelect.value, 10); renderQuiz(qs2); return; }
      renderQuiz(qs);
    })();
  } else {
    const qs = pickOfflineQuestions(conceptSelect.value, difficultySelect.value, 10);
    renderQuiz(qs);
  }
});

// show quick history viewer
function renderHistory(){
  const hist = JSON.parse(localStorage.getItem('epibio_history')||'[]');
  resultsArea.innerHTML='';
  if(hist.length===0){ resultsArea.innerText='No attempt history yet.'; return; }
  const div = document.createElement('div');
  div.innerHTML = '<h3>Recent attempts</h3>';
  hist.slice(0,20).forEach(h=>{
    const card = document.createElement('div'); card.className='question-card';
    card.innerHTML = `<div class="small">${new Date(h.time).toLocaleString()}</div><div style="font-weight:600">${h.question}</div><div class="small">Your answer: ${h.selected} • Correct: ${h.correct} • ${h.correctFlag ? 'Correct' : 'Wrong'}</div>`;
    div.appendChild(card);
  });
  resultsArea.appendChild(div);
}

document.addEventListener('DOMContentLoaded', ()=>{
  // initial history
  renderHistory();
  // show getQuestionBtn if API endpoint is set
  if(window.EPIBIO_API_ENDPOINT){ getQuestionBtn.style.display='inline-block'; }
  // network events to notify user
  window.addEventListener('online', ()=>{ console.log('Back online'); });
  window.addEventListener('offline', ()=>{ console.log('Offline'); });
});

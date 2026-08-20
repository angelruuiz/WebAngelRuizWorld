/**
 * Jabalí Run
 * Uses canvas luma-key rendering to achieve true transparency on all browsers.
 */
(function () {
  const state = {
    running: false,
    jumping: false,
    playerY: 0,
    velocityY: 0,
    score: 0,
    best: 0,
    lastFrame: 0,
    nextObstacle: 0,
    animationFrame: null,
    obstacles: []
  };

  let arena;
  let canvas;
  let ctx;
  let video;
  let offCanvas;
  let offCtx;
  let scoreLabel;
  let bestLabel;
  let message;
  let startButton;
  let renderReady = false;

  const groundHeight = 4;
  const obstacleIcons = ['🧱', '🚧', '🪨', '🪣'];
  const LUMA_THRESHOLD = 200;

  function updateScore() {
    scoreLabel.textContent = Math.floor(state.score);
  }

  function updateBest() {
    bestLabel.textContent = state.best;
  }

  function setMessage(title, detail, visible) {
    message.innerHTML = `<span class="game-message-icon">🐗</span><strong>${title}</strong><small>${detail}</small>`;
    message.classList.toggle('hidden', !visible);
  }

  function clearObstacles() {
    state.obstacles.forEach((obstacle) => {
      if (obstacle.element) obstacle.element.remove();
    });
    state.obstacles = [];
    if (arena) {
      const orphans = arena.querySelectorAll('.game-obstacle');
      orphans.forEach(el => el.remove());
    }
  }

  function resetGame() {
    clearObstacles();
    state.score = 0;
    state.playerY = 0;
    state.velocityY = 0;
    state.jumping = false;
    canvas.style.bottom = `${groundHeight}px`;
    updateScore();
  }

  function createObstacle() {
    const element = document.createElement('div');
    const size = 42 + Math.random() * 20;
    const arenaWidth = arena.clientWidth;

    element.className = 'game-obstacle';
    element.style.left = '0px';
    element.textContent = obstacleIcons[Math.floor(Math.random() * obstacleIcons.length)];
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.fontSize = `${size * 0.78}px`;
    arena.appendChild(element);

    state.obstacles.push({
      element,
      x: arenaWidth + size,
      width: size
    });
  }

  function overlaps(playerRect, obstacleRect) {
    const playerHitbox = {
      left: playerRect.left + playerRect.width * 0.32,
      right: playerRect.right - playerRect.width * 0.28,
      top: playerRect.top + playerRect.height * 0.28,
      bottom: playerRect.bottom - playerRect.height * 0.12
    };
    const obstaclePadding = 12;

    return playerHitbox.left < obstacleRect.right - obstaclePadding &&
      playerHitbox.right > obstacleRect.left + obstaclePadding &&
      playerHitbox.top < obstacleRect.bottom - obstaclePadding &&
      playerHitbox.bottom > obstacleRect.top + obstaclePadding;
  }

  /** Draw the current video frame onto the canvas with luma-key transparency. */
  function renderFrame() {
    // Video must have at least one decoded frame (readyState >= 2)
    if (!video || video.readyState < 2) return;

    try {
      const w = offCanvas.width;
      const h = offCanvas.height;

      offCtx.drawImage(video, 0, 0, w, h);

      const imageData = offCtx.getImageData(0, 0, w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r > LUMA_THRESHOLD && g > LUMA_THRESHOLD && b > LUMA_THRESHOLD) {
          data[i + 3] = 0;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imageData, 0, 0);
      renderReady = true;
    } catch (_) {
      // Silently skip this frame if anything goes wrong
    }
  }

  function finishGame(messageTitle, messageDetail) {
    if (!state.running) return;

    state.running = false;
    cancelAnimationFrame(state.animationFrame);
    video.pause();

    const finalScore = Math.floor(state.score);
    let isNewBest = false;
    if (finalScore > state.best) {
      state.best = finalScore;
      localStorage.setItem('jabali-run-best', state.best);
      updateBest();
      isNewBest = true;
    }

    const shareBtnHtml = `
      <button class="decree-btn" id="game-share-btn" style="margin-top:0.8rem; padding:0.5rem 1rem; font-size:0.8rem; border-radius:var(--radius-sm);">
        📢 Compartir Puntuación
      </button>
    `;

    const finalTitle = isNewBest ? '🎉 ¡NUEVO RÉCORD!' : messageTitle;
    const finalDetail = `${messageDetail}${shareBtnHtml}`;

    setMessage(finalTitle, finalDetail, true);
    startButton.textContent = 'Correr otra vez';

    const shareBtn = document.getElementById('game-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        const text = `🐗 ¡He conseguido ${finalScore} puntos en Jabalí Run de la Peña La Escombrera! ¿Puedes superarme?`;
        if (navigator.share) {
          navigator.share({
            title: 'Jabalí Run',
            text: text,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(text + " " + window.location.href);
          const oldText = shareBtn.textContent;
          shareBtn.textContent = '📋 ¡Copiado al portapapeles!';
          setTimeout(() => { shareBtn.textContent = oldText; }, 2000);
        }
      });
    }
  }

  function jump() {
    if (!state.running || state.jumping) return;
    state.jumping = true;
    state.velocityY = 660;
  }

  function loop(time) {
    if (!state.running) return;

    const delta = Math.min((time - state.lastFrame) / 1000, 0.04);
    state.lastFrame = time;
    state.score += delta * 10;
    updateScore();

    state.velocityY -= 1700 * delta;
    state.playerY = Math.max(0, state.playerY + state.velocityY * delta);
    if (state.playerY === 0 && state.velocityY < 0) {
      state.velocityY = 0;
      state.jumping = false;
    }
    canvas.style.bottom = `${groundHeight + state.playerY}px`;

    renderFrame();

    if (time >= state.nextObstacle) {
      createObstacle();
      state.nextObstacle = time + Math.max(650, 1250 - state.score * 4) + Math.random() * 400;
    }

    const speed = 240 + Math.min(state.score * 2, 180);
    const playerRect = canvas.getBoundingClientRect();
    state.obstacles = state.obstacles.filter((obstacle) => {
      obstacle.x -= speed * delta;

      const rotation = (obstacle.x * -0.6) % 360;
      obstacle.element.style.transform = `translateX(${obstacle.x}px) rotate(${rotation}deg)`;

      if (obstacle.x < -obstacle.width - 30) {
        obstacle.element.remove();
        return false;
      }

      if (overlaps(playerRect, obstacle.element.getBoundingClientRect())) {
        finishGame('¡Se escapó el jabalí!', `Has conseguido ${Math.floor(state.score)} puntos.`);
        return false;
      }
      return true;
    });

    state.animationFrame = requestAnimationFrame(loop);
  }

  function startGame() {
    if (state.running) {
      jump();
      return;
    }

    resetGame();
    state.running = true;
    setMessage('', '', false);
    startButton.textContent = '¡Salta!';
    video.play().catch(() => {});
    arena.focus({ preventScroll: true });
    state.lastFrame = performance.now();
    state.nextObstacle = state.lastFrame + 900;
    state.animationFrame = requestAnimationFrame(loop);
  }

  function stopGame() {
    if (!state.running) return;
    finishGame('Partida en pausa', 'Vuelve cuando quieras: el jabalí te espera.');
  }

  function initializeGame() {
    arena = document.getElementById('game-arena');
    video = document.getElementById('game-player-video');
    canvas = document.getElementById('game-player-canvas');
    scoreLabel = document.getElementById('game-score');
    bestLabel = document.getElementById('game-best');
    message = document.getElementById('game-message');
    startButton = document.getElementById('game-start-button');

    if (!arena || !canvas || !scoreLabel || !bestLabel || !message || !startButton) return;

    ctx = canvas.getContext('2d');

    // If video element exists, set up luma-key rendering
    if (video) {
      const resolution = 128;
      offCanvas = document.createElement('canvas');
      offCanvas.width = resolution;
      offCanvas.height = resolution;
      offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
      canvas.width = resolution;
      canvas.height = resolution;
    }

    state.best = Number(localStorage.getItem('jabali-run-best')) || 0;
    updateBest();
    canvas.style.bottom = `${groundHeight}px`;

    function handleAction(e) {
      if (e && e.target.closest('#game-message')) return;
      if (e) {
        e.preventDefault();
      }
      if (state.running) {
        jump();
      } else {
        startGame();
      }
    }

    startButton.addEventListener('click', handleAction);
    startButton.addEventListener('touchstart', handleAction, { passive: false });

    arena.addEventListener('click', handleAction);
    arena.addEventListener('touchstart', handleAction, { passive: false });

    document.addEventListener('keydown', (event) => {
      if (!state.running || !['Space', 'ArrowUp'].includes(event.code)) return;
      event.preventDefault();
      jump();
    });
  }

  window.JabaliGame = { stop: stopGame };
  document.addEventListener('DOMContentLoaded', initializeGame);
}());

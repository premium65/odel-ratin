
let count = 0;
const confirmBtn = document.getElementById('confirmBtn');
const countDisplay = document.getElementById('countDisplay');

confirmBtn.onclick = () => {
  if (count < 30) {
    count++;
    countDisplay.textContent = `ODEL COUNT: ${count} / 30`;
    if (count === 30) {
      alert('🎉 You earned LKR 2850! Redirecting to commission page...');
      window.location.href = 'commission.html';
    }
  }
}

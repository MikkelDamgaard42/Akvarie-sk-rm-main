// --- Kiste-interaktion: kommentarer og defensive checks ---
// Konstanter styrer timing for animationer og lyd
const GIF_DURATION_MS = 1600; // ikke brugt direkte her, men reserveret til evt. timing
const DYKKER_DURATION_MS = 2000; // hvor lang tid dykkermand glider ind

// startgif: kaldet når brugeren klikker på kisten
function startgif(){
  const kiste  = document.querySelector('.kiste');
  const label  = document.querySelector('.label');
  const diver  = document.getElementById('diver');
  const speech = document.getElementById('speech');

  // Start GIF hvis elementet findes
  if (kiste) {
    kiste.src = 'images/skattekiste.gif';
  } else {
    console.warn('Kiste-element (.kiste) ikke fundet.');
  }

  // Fade teksten "Tryk her" væk hvis label findes
  if (label){
    label.classList.add('fade-out');
    setTimeout(()=>label.style.display='none', 600);
  }

  // Afspil lyd hvis audio-element er til stede
  const lyd = document.getElementById('kisteLyd');
  if (lyd) {
    lyd.currentTime = 0;
    lyd.play().catch(()=>{/* ignore hvis browser blokerer autoplay på klik */});
  }
}

// Når siden loader, får dykkermanden en lille glide-ind animation,
// og derefter vises taleboblen. Vi laver defensive checks så koden
// ikke fejler hvis elementerne ikke er til stede på en given side.
window.addEventListener('load', () => {
    const diver  = document.getElementById('diver');
    const speech = document.getElementById('speech');

    if (!diver) return; // intet at animate

    // Start glide-ind kort efter load
    setTimeout(() => {
        diver.classList.add('show');

        // Vis taleboblen når dykkermanden er færdig med at glide ind
        if (speech) {
            setTimeout(() => {
                speech.classList.add('show');
            }, DYKKER_DURATION_MS);
        }

    }, 100); // 0.1s efter load
});
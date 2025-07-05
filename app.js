document.addEventListener("DOMContentLoaded", () => {
  const quranDiv = document.getElementById("quran-text");
  const langSelect = document.getElementById("language-selector");

  async function loadQuran(language) {
    const res = await fetch(`data/translations/${language}.json`);
    const translation = await res.json();

    quranDiv.innerHTML = "";
    translation["1"].forEach((ayah, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "ayah-block";

      const p = document.createElement("p");
      p.textContent = `${index + 1}. ${ayah}`;

      const playBtn = document.createElement("button");
      playBtn.textContent = "🔊 پخش";
      playBtn.onclick = () => {
        const audio = new Audio(`https://everyayah.com/data/Abdul_Basit_Mujawwad_128kbps/00100${index + 1}.mp3`);
        audio.play();
      };

      wrapper.appendChild(p);
      wrapper.appendChild(playBtn);
      quranDiv.appendChild(wrapper);
    });
  }

  langSelect.addEventListener("change", (e) => {
    loadQuran(e.target.value);
  });

  loadQuran("fa");
});

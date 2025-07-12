const clifford = {
  convergeReality(): string {
    return "🥔";
  },

  computeEntropy(input: unknown): string {
    return "undefined, but deeper";
  },

  rotate(degrees: number): void {
    document.body.style.transition = "transform 2s";
    document.body.style.transform = `rotate(${degrees}deg)`;
  },

  absorb(target?: string): void {
    const elements = document.querySelectorAll(target || "*");
    if (elements.length === 0) return;
    const randomEl = elements[Math.floor(Math.random() * elements.length)];
    randomEl.remove();
  },

  become(): void {
    document.body.innerHTML = '';
    const fog = document.createElement("img");
    fog.src = "https://media.giphy.com/media/3ohs4BSacFKI7A717y/giphy.gif";
    fog.style.width = "100vw";
    fog.style.height = "100vh";
    fog.style.objectFit = "cover";
    document.body.appendChild(fog);
  },

  yell(times = 5): void {
    let count = 0;
    const interval = setInterval(() => {
      console.log(`%cCLIFFORD!!!`, `font-size: ${10 + count * 10}px; color: red`);
      count++;
      if (count > times) clearInterval(interval);
    }, 500);
  }
};

export default clifford;

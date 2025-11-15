const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');

// Posisi awal tombol “Nolak”
noBtn.style.left = "50%";
noBtn.style.top = "60%";

// Tombol nolak kabur kalau mouse mendekat
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
            noBtn.style.left = x + "px";
                noBtn.style.top = y + "px";
                });

                // Tombol nerima ditekan
                yesBtn.addEventListener('click', () => {
                    document.body.innerHTML = `
                            <h2>🍓❤️🍓</h2>
                                    <h2>Sorry ya kalau ini terdengar agak romantis atau cringe 😅<br>
                                            Aku cuma pengin jujur tentang perasaanku…<br>
                                                    Aku tunggu jawaban asli kamu nanti di WA.</h2>
                                                        `;

                                                            // Tambah efek love pop
                                                                const hearts = document.createElement('span');
                                                                    hearts.innerText = '❤️';
                                                                        hearts.className = 'heart';
                                                                            hearts.style.fontSize = '48px';
                                                                                hearts.style.position = 'absolute';
                                                                                    hearts.style.left = Math.random() * window.innerWidth + 'px';
                                                                                        hearts.style.top = Math.random() * window.innerHeight + 'px';
                                                                                            document.body.appendChild(hearts);
                                                                                            });

                                                                                            // Tambahkan emoji stroberi floating
                                                                                            const strawberryCount = 20;
                                                                                            for(let i=0; i<strawberryCount; i++){
                                                                                                const span = document.createElement('span');
                                                                                                    span.className = 'strawberry';
                                                                                                        span.innerText = '🍓';
                                                                                                            span.style.left = Math.random() * window.innerWidth + 'px';
                                                                                                                span.style.top = Math.random() * window.innerHeight + 'px';
                                                                                                                    span.style.fontSize = (20 + Math.random()*20) + 'px';
                                                                                                                        span.style.animationDuration = (4 + Math.random()*4) + 's';
                                                                                                                            document.body.appendChild(span);
                                                                                                                            }
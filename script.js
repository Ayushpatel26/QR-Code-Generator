async function generateQR() {
    if (qrText.value.trim()) {
        imgBox.style.display = "block";
        qrImg.src = 'loading.svg';

        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`)
            .then(response => response.blob())
            .then(blob => {
                let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
                qrImg.src = url;
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'QR.jpg';
                link.innerText = "Download";
                
                // const div = document.createElement('div');
                // document.querySelector(".container").appendChild(div);
                // div.appendChild(link);
                const butt = document.createElement('button');
                document.querySelector(".container").appendChild(butt);
                butt.appendChild(link);

                let genButton = document.getElementsByTagName('button')[0];
                genButton.disabled = true;
            });
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
        qrText.value = '';
    }
}
// https://goqr.me/api/
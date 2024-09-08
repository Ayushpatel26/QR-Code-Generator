
async function generateQR() {
    if (qrText.value.trim()) {
        imgBox.style.display = "block";
        qrImg.src = 'loading.svg';
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        qrImg.src = url;
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
        qrText.value = '';
    }
}
// for more info
// https://goqr.me/api/
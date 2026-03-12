// error message layout

export const showModal = (header, text, autoRemove = false) => {
    const modal = document.querySelector(".modalMessage");
    modal.querySelector("h2").innerText = header;
    modal.querySelector("p").innerText = text;
    
    //function to use close button inside showModal 
    modal.querySelector("button.close").addEventListener("click", () => {
        modal.close();
    });

    if (autoRemove) {
        setTimeout(() => {
            modal.close();
        }, 400);
    }

    modal.showModal();
};
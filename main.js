function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast')

    // if exists main element
    if (main) {
        const toast = document.createElement('div')

        // automatically remove toast message
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1500)

        // remove toast message when users click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                // remove automatically removing
                clearTimeout(autoRemoveId)
            }
        }

        // set icon for specific toast
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark'
        }
        const icon = icons[type]

        // config delay duration in animation css
        const delay = (duration / 1000).toFixed(2)

        // add class and modifiers
        toast.classList.add('toast', `toast--${type}`)

        // add animation styles
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`

        // append toasts' html
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);
    }
}

// success
function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Your changes are saved successfully.',
        type: 'success',
        duration: 3000
    }) 
}

// info 
function showInfoToast() {
    toast({
        title: 'Info',
        message: 'New settings available on your account.',
        type: 'info',
        duration: 5000
    })
}

// warn 
function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Username you have entered is invalid.',
        type: 'warning',
        duration: 5000,
    })
}
// error
function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Error has occured while saving changes.',
        type: 'error',
        duration: 5000
    }) 
}
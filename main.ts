const container = <HTMLDivElement>document.getElementById('container')

const createBubble = () => {
    const bubble = document.createElement('div')
    const size = Math.floor(Math.random() * (window.innerWidth / 7) + 50)
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)

    bubble.style.width = bubble.style.height = `${size}px`
    bubble.style.borderRadius = `${size / 2}px`
    bubble.style.background = `rgb(${r}, ${g}, ${b})`
    bubble.style.top = `${(window.innerHeight - size) * Math.random()}px`
    bubble.style.left = `${(window.innerWidth - size) * Math.random()}px`
    container.appendChild(bubble)
    setTimeout(() => (bubble.style.opacity = Math.random().toString()), 500)

    setInterval(() => {
        bubble.style.top = `${
            (window.innerHeight - size * 2) * Math.random() + size + 1
        }px`
        bubble.style.left = `${
            (window.innerWidth - size * 2) * Math.random() + size + 1
        }px`
    }, Math.random() * 500 + 1000)

    setTimeout(() => {
        bubble.style.opacity = '0'
        setTimeout(() => bubble.remove(), 1000)
    }, Math.floor(Math.random() * 5000 + 5001))
}

setInterval(() => {
    setTimeout(createBubble, Math.random() * 1000 + 1)
}, 500)

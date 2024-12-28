// adding an intersection observer that check if the element is intersected on viewport

const observer = new IntersectionObserver(entry => {
    entry.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')

        } else {
            entry.target.classList.remove('show')
        }
    })
})

//telling observer to observe all elements with class hidden
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(e => observer.observe(e))


// DECRYPTING text
document.querySelectorAll('.codedText').forEach((t) => {
    const arr1 = t.innerHTML.split('');
    const arr2 = [];

    arr1.forEach((char, i) => arr2[i] = randChar()); // fill arr2 with random characters
    t.onpointerover = () => {
        let step = 0;
        const duration = arr1.length * 50; // duration based on text length
        const interval = setInterval(() => {
            const p = Math.floor((step / duration) * arr1.length); // whole number from 0 - text length
            if (step >= duration) {
                clearInterval(interval);
                t.innerHTML = arr1.join(''); // restore original text
                return;
            }
            arr1.forEach((char, i) => arr2[i] = randChar());
            let pt1 = arr1.join('').substring(0, p),
                pt2 = arr2.join('').substring(p);
            if (t.classList.contains('fromRight')) {
                pt1 = arr2.join('').substring(0, arr2.length - p);
                pt2 = arr1.join('').substring(arr1.length - p);
            }
            t.innerHTML = pt1 + pt2; // update text
            step += 50; // increment step
        }, 50);
    };
});

//for Akira h1
function decryptOnLoad() {
    document.querySelectorAll('.codedOnLoad').forEach((t) => {
        const arr1 = t.innerHTML.split('');
        const arr2 = [];

        arr1.forEach((char, i) => arr2[i] = randChar()); // fill arr2 with random characters
        let step = 0;
        const duration = arr1.length * 200; // duration based on text length
        const interval = setInterval(() => {
            const p = Math.floor((step / duration) * arr1.length); // whole number from 0 - text length
            if (step >= duration) {
                clearInterval(interval);
                t.innerHTML = arr1.join(''); // restore original text
                return;
            }
            arr1.forEach((char, i) => arr2[i] = randChar());
            let pt1 = arr1.join('').substring(0, p),
                pt2 = arr2.join('').substring(p);
            if (t.classList.contains('fromRight')) {
                pt1 = arr2.join('').substring(0, arr2.length - p);
                pt2 = arr1.join('').substring(arr1.length - p);
            }
            t.innerHTML = pt1 + pt2; // update text
            step += 50; // increment step
        }, 50);
    });
}

function randChar() {
    let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
    c = c[Math.floor(Math.random() * c.length)];
    return (Math.random() > 0.5) ? c : c.toUpperCase();
}

decryptOnLoad()
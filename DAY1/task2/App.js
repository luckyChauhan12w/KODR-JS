let form = document.querySelector('form')

let profileCrad = document.querySelector('.profile-card')


form.addEventListener('submit', function (dets) {
    dets.preventDefault()
    profileCrad.innerHTML = `
            <div class="image-div">
                <img src="${dets.target[3   ].value}" alt="">
            </div>
            <h2>${dets.target[0].value}, ${dets.target[1].value}</h2>
            <p>${dets.target[2].value}</p>
    `
})
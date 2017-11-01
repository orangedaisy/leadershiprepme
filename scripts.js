var leadershipRepButton = document.getElementById('take_leadership_rep');
var repCount            = document.getElementById('rep_count');
var heartStars          = document.getElementById('heart_stars');

var clickCount = 0;
repCount.innerText = clickCount;

function countReps(e) {
    e.preventDefault();

    clickCount++;

    repCount.innerText = clickCount;

    if (clickCount < 25) {
        // 1-star heart
        heartStars.innerText = "\u2605";
    } else if (clickCount >= 25 && clickCount < 50) {
        // 2-star heart
        heartStars.innerText = "\u2605".repeat(2);
    } else if (clickCount >= 50 && clickCount < 75) {
        // 3-star heart
        heartStars.innerText = "\u2605".repeat(3);
    } else if (clickCount >= 75 && clickCount < 100) {
        // 4-star heart
        heartStars.innerText = "\u2605".repeat(4);
    } else if (clickCount >= 100) {
        // 5-star heart
        heartStars.innerText = "\u2605".repeat(5);
    }
}

leadershipRepButton.addEventListener('click', countReps);

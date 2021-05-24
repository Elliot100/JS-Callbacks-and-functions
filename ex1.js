// Simple Timeout

window.setTimeout(function () {
  alert("HAMMER TIME!");
}, 5000);

///////////////////////////////////////////////

// Timeout Plus Closure

function hammerTime(time) {
  window.setTimeout(function () {
    alert(`${time} is hammer time!`);
  }, 5000);
}

// hammerTime(10);

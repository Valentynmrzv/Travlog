var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Get video ID
var vidId = document.getElementById("player").dataset.id;

// Build the player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: vidId,
    events: { onReady: onPlayerReady }
  });
}

// ==== Variables for popup
var modal = document.querySelector(".video-modal"),
  close = document.querySelector(".close-video-modal"),
  root = document.getElementsByTagName("html")[0];

// Do stuff when player is ready
function onPlayerReady(event) {
  document.querySelector(".play-video").addEventListener("click", function () {
    modal.classList.add("show-video-modal");

    // Play video
    setTimeout(function () {
      event.target.playVideo();
    }, 100);
  });

  // Close if outside box is clicked
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show-video-modal");
      root.classList.remove("no-scroll");
      event.target.pauseVideo();
    }
  });

  // Close if close button is clicked
  close.addEventListener("click", function () {
    modal.classList.remove("show-video-modal");
    root.classList.remove("no-scroll");
    event.target.pauseVideo();
  });
}

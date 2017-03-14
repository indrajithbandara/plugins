module.exports = (Franz, options) => {
  function getMessages() {
    let count = 0;
    let badge = document.getElementById('mercurymessagesCountValue');

    if (badge && badge.innerText) {
        count = parseInt(badge.innerText);
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}

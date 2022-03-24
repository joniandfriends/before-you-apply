// sample URL https://www.joniandfriends.org/before-you-apply/?fr_id=2197&s_partType=primary
// sample Query String ?fr_id=2197&s_partType=primary

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const retreatId = urlParams.get('fr_id')
const participantType = urlParams.get('s_partType')

const groupText = document.getElementById('group-text')
const individualText = document.getElementById('individual-text')
console.log(groupText)
console.log(individualText)

// const downloadText = document.getElementById('download-text')
// const subscribeText = document.getElementById('subscribe-text')

// if (formName === 'WhyBadThingsHappen') {
//   downloadText.classList.remove('hide')
//   defaultText.classList.add('hide')
// } else if (formName === 'AMEmailOptin') {
//   subscribeText.classList.remove('hide')
//   defaultText.classList.add('hide')
// } else {
//   console.log("No match")
// }
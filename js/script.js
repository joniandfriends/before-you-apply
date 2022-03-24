// sample URL coming from FR event page: https://www.joniandfriends.org/before-you-apply/?fr_id=2197&s_partType=primary
// sample Query String ?fr_id=2197&s_partType=primary

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const retreatId = urlParams.get('fr_id')
const participantType = urlParams.get('s_partType')
const applyButton = document.getElementById('apply-btn')
const groupText = document.getElementById('group-text')
const individualText = document.getElementById('individual-text')
const errorMessage = document.getElementById('error-message')
const applyButtonUrl = `https://secure.joniandfriends.org/site/TRR/FamilyRetreats/General?pg=tfind&fr_id=${retreatId}&fr_tm_opt=new&s_partType=${participantType}`
const pcaApplyButtonUrl = `https://secure.joniandfriends.org/site/TRR/FamilyRetreats/General?pg=tfind&fr_id=${retreatId}&fr_tm_opt=existing&s_partType=${participantType}`

switch(participantType){
  case 'primary':
    applyButton.href = applyButtonUrl
    applyButton.classList.remove('hide')
  break;
  case 'volunteer':
    groupText.classList.add('hide')
    individualText.classList.remove('hide')
    applyButton.href = applyButtonUrl
    applyButton.classList.remove('hide')
  break;
  case 'volunteerGroup':
    applyButton.href = applyButtonUrl
    applyButton.classList.remove('hide')
  break;
  case 'pca':
    applyButton.href = pcaApplyButtonUrl
    applyButton.classList.remove('hide')
  break;
  default:
    // We should never match this case!
    applyButton.href = '/what-are-you-talking-about-willis'
}
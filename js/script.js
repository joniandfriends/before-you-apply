// sample URL coming from FR event page: http://127.0.0.1:5500/before-you-apply/index.html?fr_id=2197&s_partType=primary&event=familyRetreat
// sample Query String ?fr_id=2197&s_partType=primary

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const retreatId = urlParams.get('fr_id')
const participantType = urlParams.get('s_partType')
const eventType = urlParams.get('event')

const eventTitle = document.querySelector('.event-title')
const groupText = document.getElementById('group-text')
const individualText = document.getElementById('individual-text')
const internationalFRText = document.querySelector('#international-retreat-text')
const errorMessage = document.getElementById('error-message')
const familyVolunteerAccordion = document.querySelector('#family-volunteer-accordion')
const applyButton = document.getElementById('apply-btn')

const applyButtonUrl = `https://secure.joniandfriends.org/site/TRR/FamilyRetreats/General?pg=tfind&fr_id=${retreatId}&fr_tm_opt=new&s_partType=${participantType}`
const pcaApplyButtonUrl = `https://secure.joniandfriends.org/site/TRR/FamilyRetreats/General?pg=tfind&fr_id=${retreatId}&fr_tm_opt=existing&s_partType=${participantType}`



if (eventType !== 'familyRetreat') {
  familyVolunteerAccordion.classList.add('hide')
}

switch(eventType) {
  case 'familyRetreat':
    if (participantType === 'volunteer') {
      groupText.classList.add('hide')
      individualText.classList.remove('hide')
    }
  break;
  case 'internationalFamilyRetreat':
    groupText.classList.add('hide')
    internationalFRText.classList.remove('hide')
  break;
  default:
    console.log('Default event title')
}

switch(participantType){
  case 'primary' && 'volunteer' && 'volunteerGroup':
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
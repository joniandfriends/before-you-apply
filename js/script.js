// sample URL coming from FR event page: http://127.0.0.1:5500/before-you-apply/index.html?fr_id=2197&s_partType=primary&event=familyRetreat
// sample Query String ?fr_id=2197&s_partType=primary

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const retreatId = urlParams.get('fr_id')
const participantType = urlParams.get('s_partType')
const eventType = urlParams.get('event')

const groupText = document.getElementById('group-text')
const individualText = document.getElementById('individual-text')
const internationalFRText = document.querySelector('#international-retreat-text')
const marriageGetawayText = document.querySelector('#marriage-getaway-text')
const singleParentGetawayText = document.querySelector('#single-parent-text')
const warriorGetawayText = document.querySelector('#warrior-getaway-text')
const wheelsText = document.querySelector('#wheels-text')
const internshipText = document.querySelector('#internship-text')
const noEventError = document.querySelector('#no-event-error')

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
    } else {
      groupText.classList.remove('hide')
    }
  break;
  case 'internationalFamilyRetreat':
    internationalFRText.classList.remove('hide')
  break;
  case 'marriageGetaway':
    marriageGetawayText.classList.remove('hide')
  break;
  case 'singleParentGetaway':
    singleParentGetawayText.classList.remove('hide')
  break;
  case 'warriorGetaway':
    warriorGetawayText.classList.remove('hide')
  break;
  case 'wheels':
    wheelsText.classList.remove('hide')
  break;
  case 'internship':
    internshipText.classList.remove('hide')
  break;
  default:
    noEventError.classList.remove('hide')
}

switch(participantType){
  case 'primary':
    applyButton.href = applyButtonUrl
    applyButton.classList.remove('hide')
  break;
  case 'volunteer':
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
const key = "AIzaSyDcek4lPiE_vc5h8MoWSrJBwtenA2KiFwk";
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`)
  .then(res => res.json())
  .then(data => require('fs').writeFileSync('models.json', JSON.stringify(data, null, 2)))
  .catch(err => require('fs').writeFileSync('models.json', JSON.stringify({error: err.message})));

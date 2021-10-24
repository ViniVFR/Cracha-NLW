const linksSocialMedia = {
  github: "ViniVFR",
  youtube: "home",
  facebook: "vinicius",
  instagram: "sax_vini",
  twitter: "home"
}

function montaSocialMedia() {
  for (let li of socialMedias.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

montaSocialMedia()

function getGitHubProfileInfos() {
  const cont = `api.github.com/users/${linksSocialMedia.github}`
  console.log(cont)

  fetch(cont)
    .then(res => res.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      gitHubLink.href = data.html_url
      gitHubUser.textContent = data.login
      user.Image.src = data.avatar_url

    })
}

getGitHubProfileInfos()
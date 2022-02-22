const linksSocialMdia = {
    github: 'jakeliny2',
    youtube: 'jakelinygracielly',
    facebook: 'mikaelly.oliveira',
    instagram:'miikaelly__',
    twitter: 'mikaell56715871'

   }
          
function changeSocialMediaLinks() {
   for(let li of  socialLinks.children) { 
       const social = li.getAttribute
       ('class')
}  
 
li.children(0).href = `https://${social}.com/{linksSocialMedia.{social}`
   }

   changeSocialMediaLinks( )

   function getGitHubProfileinfos( ) {
       const url ='https://api.github.com/users/${linksSocialMedia.github}'
   
   fetch(url)
   .then(Response =>  Response.json())
   .then( data => {
  userName.textContent = data.userName
  userBio.textContent = data.html_url



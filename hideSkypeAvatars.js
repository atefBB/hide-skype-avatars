var avatars = document.getElementsByTagName('swx-avatar');
var avatarsImgs = document.getElementsByClassName('Avatar-image');

for(var avatar in avatars) {
   if(!isNaN(avatar)) {
     avatars[avatar].setAttribute('style', 'display: none;');
   }
}

for(var avatarImg in avatarsImgs) {
   if(!isNaN(avatarImg)) {
    avatarsImgs[avatarImg].setAttribute('style', 'display: none;')
   }
}
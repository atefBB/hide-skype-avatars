/**
 * @author Atef Ben Ali
 */
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
	// No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 'var avatars = document.getElementsByTagName("swx-avatar");'
          + 'var avatarsImgs = document.getElementsByClassName("Avatar-image");'
          + 'for(var avatar of avatars) {'
            + 'avatar.setAttribute("style", "display: none;");'
          + '}'
          + 'for(var avatarImg of avatarsImgs) {'
          +   'avatarImg.setAttribute("style", "display: none;");'
          + '}'
  });
});
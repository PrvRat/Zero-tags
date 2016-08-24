
function click(e) 
{
  chrome.tabs.executeScript(null,
      {code:"if (document.getElementsByName('tags').length>0) {document.getElementsByName('tags')[0].value=document.getElementsByName('tags')[0].value+'"
	  + e.target.id + "'} else{document.getElementsByName('tag')[0].value=document.getElementsByName('tag')[0].value+'" 
	  + e.target.id + "'} "  
	  });

  //window.close();
}


document.addEventListener('DOMContentLoaded', function () 
{
  var divs = document.querySelectorAll('div');
  chrome.contextMenus.create({
	'title': 'Upload to Zerochan',
	'contexts': ['image'],
	'onclick': uploadURL
});

   for (var i = 0; i < divs.length; i++)
       {
    divs[i].addEventListener('click', click);
  }
});


var site_uri = 'http://www.zerochan.net/upload';

function uploadURL(urlinfo, tab)
{ 
	var pageuri = site_uri ;//+ '/post/upload?url=' + encodeURIComponent(urlinfo.srcUrl);
	chrome.windows.create({url: pageuri, width: 860});
};





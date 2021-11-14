
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection[0];
    var name= selection[0].replace(/\s/g, '+');
    //var url = "das";
    var url = "https://search-production.ratemyprofessors.com/solr/rmp/select/?solrformat=true&rows=2&wt=json&q="+name+"+AND+schoolname_t:The University of Texas at Dallas";

    chrome.runtime.sendMessage({ url: url }, function (response) {
        const json = response.JSONresponse;
        console.log(json);
    });
    
});
/*
const tabId = getTabId();
chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      files: ['content_script.js'],
    },
    () => { });

var seltext = null;

$('div').mouseup(function() {
    var text=getSelectedText();
    if (text!='') alert(text);
});

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}​
document.addEventListener('pointerup',function(event)
{
    var sel = window.getSelection().toString();
    console.log(sel);
    console.log("hello");
    document.getElementById("output").innerHTML = selection[0]; 
    if(sel.length)
        chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
    //var jax = new XMLHttpRequest();
    var url = "https://search-production.ratemyprofessors.com/solr/rmp/select/?solrformat=true&rows=2&wt=json&q="+name+"+AND+schoolname_t:The University of Texas at Dallas";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
      }
    }
    xhr.send();
});
console.log("Added event listener");*/

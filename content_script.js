console.log(window.getSelection().toString();;
/*document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
     
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
})*/
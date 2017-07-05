(() => { 

  // THIS IS MUST ATTRIBUTE
  // Get tag name attribute
  const getTagName = tag => {return tag.getAttribute('name') || false}

  // THIS IS MUST ATTRIBUTE
  // Get tag src
  const getTagSrc = tag => {return tag.src || false}

  // Get real script file content
  const fetchScript = (src) => fetch(src).then(res => res.text())

  const saveScript = (name, content) => {localStorage.setItem(name, content)}

  const getScript = name => {
    return new Promise((resolve, reject) => {
      const content = localStorage.getItem(name);
      content ? resolve(content) : reject();
    })
  }

  const insertScript = content => {
    const tag = document.createElement('script');
    tag.type = "text/javascript";
    tag.textContent = content;
    document.querySelector('head').appendChild(tag);
    return content;
  }

  // Insert script tag and run
  const runScript = (name, src) => {
    const check = !!name & !!src;
    if(!check)
    { 
      return false;
    }
    else{
      getScript(name)
      .then(insertScript)
      .catch(() => {
        console.log('Request real script');
        fetchScript(src)
        .then(insertScript)
        .then(content => saveScript(name, content));
      })
    }
  }

  /* Get all localscript tags */
  const tags = document.querySelectorAll('script[type=localscript]');

  for(const tag of tags){
    const name = getTagName(tag);
    const src = getTagSrc(tag);
    if(!runScript(name, src)) continue;
  }

})()
console.log("sneaking a peek");

let C = document.createElement;

self.on("message", function(data) {
  if (data.style) {
    let css = C('link');
    css.setAttribute('rel','stylesheet');
    css.setAttribute('type','text/css');
    css.setAttribute('href', data.style);
    document.head.appendChild(css);
  }
});

function previewLink(url) {
  
  let fade = C('div');
  let light = C('div');
  let frame = C('iframe');
  light.setAttribute('class', 'white_content');
  fade.setAttribute('class', 'black_overlay');
  frame.setAttribute('src', url);
  frame.setAttribute('frameborder', 0);
  light.appendChild(frame);
  document.body.appendChild(light)
  document.body.appendChild(fade);
  fade.style.display = 'block';
  light.style.display = 'block';
  light.style.padding = 0;
  let st = window.getComputedStyle(light);
  frame.style.height = st.height;
  frame.style.width = st.width;
  fade.addEventListener("click", function() {
    light.style.display = 'none';
    fade.style.display = 'none';
  }, false);
  
}
/*
function handleClick(e, url) {
  console.log("click");
  if (e.shiftKey) {
    console.log("shift click");
    e.preventDefault();
    previewLink(url);
  }
}
*/

function handleClick(e) {
  let link = e.target;
  let str = link.toString();
  while (link.parentNode) { 
    console.log(str)
    if (isWebURL(str))
      break;
    str = link.parentNode.toString();
    link = link.parentNode;
  }
  console.log(str)
  if (isWebURL(str) && e.shiftKey) {
    console.log("firing");
    e.preventDefault();
    previewLink(str);
  }
}

function isWebURL(url) {
  return (url && (/^http/).test(url));
}

document.addEventListener("mousedown" , handleClick, true);

/*
let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  let loc = links[i].getAttribute('href');
  if (isWebURL(loc)) {
    links[i].addEventListener("click", function(e) {
      handleClick(e, loc)
    }, false);

  }
}
*/

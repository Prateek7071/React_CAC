function customRender(rElement, container) { 
  const domElement = document.createElement(rElement.type)
  domElement.innerHTML = rElement.children
  domElement.setAttribute('href',rElement.props.href)
  domElement.setAttribute('target', rElement.props.target)
  
  container.appendChild(domElement)
}


const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: "Click to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)
function customRender(rElement, container) {
  //v1 problem is we have to manually set the attributes
  // const domElement = document.createElement(rElement.type)
  // domElement.innerHTML = rElement.children
  // domElement.setAttribute('href',rElement.props.href)
  // domElement.setAttribute('target', rElement.props.target)
  
  // container.appendChild(domElement)
  // 
  // 
  // v2
  const domElement = document.createElement(rElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in rElement.props) {
    if (prop === 'children') continue // incase someone had children in props
    domElement.setAttribute(prop, rElement.props[prop])
    container.appendChild(domElement)
  }
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
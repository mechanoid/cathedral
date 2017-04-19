export default (htmlFragment) => {
  const template = document.createElement('template')
  template.innerHTML = htmlFragment
  return template.content.firstChild
}

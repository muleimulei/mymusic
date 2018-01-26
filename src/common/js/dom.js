/**
  检测dom元素是否含有相应的class

*/
export function addClass (el, className) {
  // return el.classList.add(className)
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  // return el.classList.contains(className)
  let reg = /(^|\s+)${className}($|\s+)/
  return reg.test(el.className)
}

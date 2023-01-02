import { cloneElement, isValidElement} from 'react'

function addPropsToReactElement(element, props) {
    if (isValidElement(element)) {
      return cloneElement(element, props)
    }
    return element
  }
  
  function usePropsChildren(children, props) {
    if (!Array.isArray(children)) {
      return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
      addPropsToReactElement(childElement, props)
    )
  }

export default usePropsChildren
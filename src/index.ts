import get from 'lodash.get'
import set from 'lodash.set'
import isArray from 'lodash.isarray'
import isPlainObject from 'lodash.isplainobject'

class DryReplacer {
  data: object

  constructor(data: object) {
    this.data = data
  }

  replaceValue(key: string, value: any, data: object, template: object): void {
    let matchedArray = String(value).match(/{{.*?}}/g)
    
    if (matchedArray) {
      for (let item of matchedArray.reverse()) {
        let patternKey = item.replace(/[{}]/g, '')
        let templateValue = get(template, key)
        let dataValue = get(data, patternKey)
        let newValue = dataValue

        if (['string'].includes(typeof dataValue)) {
          newValue = templateValue.replace(new RegExp(item), dataValue)
        }

        set(template, key, newValue)
      }
    }
  }

  recursiveReplace(data: object, template: any): object {
    for (let key of Object.keys(template)) {
      let value = template[key]

      if (isPlainObject(value)) {
        this.recursiveReplace(data, value)
      } else if (isArray(value)) {
        value.map((item) => this.recursiveReplace(data, item))
      } else {
        this.replaceValue(key, value, data, template)
      }
    }
    return template
  }

  try(jsonToParse: string): object {
    let template = JSON.parse(jsonToParse)
    this.recursiveReplace(this.data, template)

    return template
  }
}

export default DryReplacer
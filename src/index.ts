import get from 'lodash.get'
import set from 'lodash.set'
import isArray from 'lodash.isarray'
import isPlainObject from 'lodash.isplainobject'

type Options = {
  strict?: boolean
}

class DryReplacer {
  data: object
  strict: boolean = true

  constructor(data: object, options?: Options) {
    this.data = data
    this.strict = options?.strict
  }

  replaceValue(key: string, value: any, data: object, template: object): void {
    let matchedArray = String(value).match(/{{.*?}}/g) // extract only {{}} pattern

    if (matchedArray) {
      for (let item of matchedArray.reverse()) {
        let patternKey = item.replace(/[{}]/g, '')
        let spotting = get(template, key)

        let valueFromData = get(data, patternKey)
        let newValue = valueFromData

        if (
          ['undefined', undefined, null, 'string'].includes(
            typeof valueFromData
          )
        ) {
          if (this.strict) {
            newValue = spotting.replace(item, valueFromData)
          } else {
            newValue = spotting.replace(item, valueFromData || '')
          }
        }

        if (['number'].includes(typeof valueFromData)) {
          newValue = spotting.replace(item, valueFromData)
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

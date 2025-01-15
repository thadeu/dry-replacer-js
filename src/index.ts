import get from 'lodash.get'
import set from 'lodash.set'
import isArray from 'lodash.isarray'
import isPlainObject from 'lodash.isplainobject'

type Options = {
  strict?: boolean
  keepTypeof?: boolean
  stringifyTypeof?: boolean
  [key: string]: any
}

const castBoolean = (strOrBool) => {
  if ([false, 'false'].includes(strOrBool)) {
    return false
  }

  if ([true, 'true'].includes(strOrBool)) {
    return true
  }

  return strOrBool
}

const isFalsy = (bool) => ['false'].includes(String(bool))

const isTruthy = (bool) => ['true'].includes(String(bool))

const isString = (data) => ['string'].includes(typeof data)

const isNullify = (data) => [undefined, null].includes(data)

class DryReplacer {
  data: object
  strict?: boolean = true
  keepTypeof?: boolean = false
  stringifyTypeof?: boolean = false

  constructor(data: object, options?: Options) {
    this.data = data
    this.strict = options?.strict
    this.keepTypeof = options?.keepTypeof
    this.stringifyTypeof = options?.stringifyTypeof
  }

  replaceValue(key: string, value: any, data: object, template: object): void {
    let matchedArray = String(value).match(/{{.*?}}/g) // extract only {{}} pattern

    if (matchedArray) {
      for (let item of matchedArray.reverse()) {
        let patternKey = item.replace(/[{}]/g, '')
        let spotting = get(template, key)

        let valueFromData = get(data, patternKey)
        let newValue = valueFromData

        if (isNullify(valueFromData)) {
          valueFromData = ''
        }

        if (isFalsy(valueFromData) || isTruthy(valueFromData)) {
          valueFromData = String(valueFromData)
        }

        if (matchedArray.length > 1) {
          if (this.stringifyTypeof && (Array.isArray(valueFromData) || isPlainObject(valueFromData))) {
            valueFromData = JSON.stringify(valueFromData)
          }
        }

        if (isString(valueFromData)) {
          if (this.strict) {
            newValue = spotting.replace(item, valueFromData)
          } else {
            newValue = spotting.replace(item, valueFromData || '')
          }
        }

        if (['number'].includes(typeof valueFromData)) {
          newValue = spotting.replace(item, valueFromData)

          if (this.keepTypeof && /^-?\.?_?\d+$/.test(newValue)) {
            newValue = Number(newValue)
          }
        }

        if (isFalsy(newValue)) {
          newValue = castBoolean(newValue)
        }

        if (isTruthy(newValue)) {
          newValue = castBoolean(newValue)
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

  try(jsonToParse: string, options = {}): object {
    if (options) {
      Object.assign(this, options)
    }

    let template = JSON.parse(jsonToParse)
    this.recursiveReplace(this.data, template)

    return template
  }
}

export default DryReplacer

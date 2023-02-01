import dryreplacer from '../'

const data = {
  id: 1,
  name: 'test',
  bool: true,
  obj: {
    id: 1,
    name: 'obj',
    list: ['a', 'b', 'c'],
  },
  list: ['a', 'b', 'c'],
  listobjs: [
    {
      id: 1,
      name: 'obj1',
      list: ['a', 'b', 'c'],
    },
    {
      id: 2,
      name: 'obj2',
      list: ['d', 'e', 'f'],
    },
    {
      id: 3,
      name: 'obj3',
      list: ['g', 'h', 'i'],
    },
  ],
  complex: [
    {
      id: 1,
      obj: {
        id: 999,
        name: 'complex',
      },
    },
  ],
}

describe('DryReplacer', () => {
  describe('root replaces', () => {

    test('fixed value', () => {
      let template = {
        code: 'fixedvalue',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['code']).toBe('fixedvalue')
    })
  
    test('number value', () => {
      let template = {
        id: '{{id}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['id']).toBe(1)
    })
  
    test('string value', () => {
      let template = {
        name: '{{name}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['name']).toBe('test')
    })
  
    test('boolean value', () => {
      let template = {
        bool: '{{bool}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['bool']).toBe(true)
    })
  
    test('value inside str', () => {
      let template = {
        name: 'Name ({{name}})',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['name']).toBe('Name (test)')
    })
  
    test('full object', () => {
      let template = {
        obj: '{{obj}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
      expect(result['obj']).toMatchObject(data.obj)
    })
  
    test('full list values', () => {
      let template = {
        list: '{{list}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
      expect(result['list']).toEqual(expect.arrayContaining(['a', 'b', 'c']))
    })
  
    test('full list of object', () => {
      let template = {
        list: '{{listobjs}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
      expect(result['list']).toMatchObject(data.listobjs)
    })
  })

  describe('nested replaces', () => {
    test('obj attributes', () => {
      let template = {
        id: '{{obj.id}}',
        name: '{{obj.name}}',
        list: '{{obj.list}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['id']).toBe(1)
      expect(result['name']).toBe('obj')
      expect(result['list']).toEqual(expect.arrayContaining(['a', 'b', 'c']))
    })
  
    test('list obj 1 attributes', () => {
      let template = {
        id: '{{listobjs.0.id}}',
        name: '{{listobjs.0.name}}',
        list: '{{listobjs.0.list}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['id']).toBe(1)
      expect(result['name']).toBe('obj1')
      expect(result['list']).toEqual(expect.arrayContaining(['a', 'b', 'c']))
    })
  
    test('complex obj 1 attributes', () => {
      let template = {
        id: '{{complex.0.obj.id}}',
        name: '{{complex.0.obj.name}}',
        obj: '{{complex.0.obj}}',
      }
  
      const replacer = new dryreplacer(data)
      let result = replacer.try(JSON.stringify(template))
  
      expect(result['id']).toBe(999)
      expect(result['name']).toBe('complex')
      expect(result['obj']).toMatchObject(data.complex[0].obj)
    })
  })
})

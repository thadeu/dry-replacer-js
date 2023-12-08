import dryreplacer from '../src'

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
  describe('use case undefined value', () => {
    it('case undefined', () => {
      let data = {
        cliente_nome: 'Thadeu',
      }

      let template = {
        interaction: {
          action: {
            prompt: '{{nome}} infelizmente foi negado',
            option: '400',
          },
        },
      }

      const replacer = new dryreplacer(data, { strict: false })
      let result: any = replacer.try(JSON.stringify(template))

      let prompt = result?.interaction?.action?.prompt

      expect(prompt).toBe(' infelizmente foi negado')
    })
  })

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

      expect(result['id']).toBe('1')
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

      expect(result['id']).toBe('1')
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

      expect(result['id']).toBe('1')
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

      expect(result['id']).toBe('999')
      expect(result['name']).toBe('complex')
      expect(result['obj']).toMatchObject(data.complex[0].obj)
    })
  })

  describe('dont remove space between words', () => {
    test('it should be return space between words', () => {
      const webhook = {
        ticket: [
          {
            source: 'call',
            attribute: 'outbound_calls.extension',
            label: 'Ramal do atendente',
          },
          {
            source: 'call',
            attribute: 'outbound_calls.duration',
            label: 'Duração do atendimento',
          },
          {
            source: 'call',
            attribute: 'post_attendances.digits',
            label: 'Nota da pesquisa - Avaliação da URA',
          },
        ],
      }

      let template = {
        first_ticket_label: '{{ticket.0.label}}',
        last_ticket_label: '{{ticket.2.label}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        first_ticket_label: 'Ramal do atendente',
        last_ticket_label: 'Nota da pesquisa - Avaliação da URA',
      })
    })
  })

  describe('get values on nested arrays values', () => {
    it('should be return one value reference to array index', () => {
      const webhook = {
        variables: {
          var: ['index0', 'index1'],
        },
      }

      let template = {
        first_index: '{{variables.var.0}}',
        second_index: '{{variables.var.1}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        first_index: 'index0',
        second_index: 'index1',
      })
    })

    it('should be return one value reference to array index', () => {
      const webhook = {
        variables: {
          var: ['index0', 'index1'],
        },
      }

      let template = {
        first_index: '{{variables.var[0]}}',
        second_index: '{{variables.var[1]}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        first_index: 'index0',
        second_index: 'index1',
      })
    })

    it('should be return one value reference to array index', () => {
      const webhook = {
        variables: {
          var: ['index0', 'index1'],
        },
      }

      let template = {
        base_index: '{{variables.var.0}} - {{variables.var.[1]}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        base_index: 'index0 - index1',
      })
    })

    it('should be return one value reference to array index', () => {
      const webhook = {
        variables: {
          var: ['index0', 'index1'],
        },
      }

      let template = {
        base_index: '{{variables.var[1]}} - {{variables.var.0}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        base_index: 'index1 - index0',
      })
    })

    it('should be return value if event numeric', () => {
      const webhook = {
        variables: {
          action: 10,
        },
      }

      let template = {
        action: 'O numero é {{variables.action}}',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        action: 'O numero é 10',
      })
    })

    it('should be return value if event numeric', () => {
      const webhook = {
        variables: {
          action: '10',
        },
      }

      let template = {
        action: 'O numero é {{variables.action}} com valor depois',
      }

      const replacer = new dryreplacer(webhook)
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        action: 'O numero é 10 com valor depois',
      })
    })
  })
})

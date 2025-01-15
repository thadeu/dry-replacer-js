import { stringify } from 'querystring'
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
  describe('custom data', () => {
    test('assert replace value', () => {
      let data1 = {
        ra_geral_name: 'Grafeno Pagamentos',
        ra_geral_url: 'http://grafeno.digital',
        ra_geral_doc: '32087027000150',
        ra_geral_doc_type: 'CNPJ',
        ra_geral_id: 'lGgA7gyqAz_TOWjs',
        ra_geral_created: '2022-04-07T19:07:48',
        ra_geral_cnpj_validado: true,
        ra_geral_shortname: 'grafeno-pagamentos',
        ra_geral_suspended: '',
        ra_geral_status: 'ACTIVE',
        ra_geral_6m_avg_anser_time: '517830.8',
        ra_geral_6m_final_score: '--',
        ra_geral_6m_total_not_answered: '0',
        ra_geral_6m_total_complains: '5',
        ra_geral_6m_consumer_score: '--',
        ra_geral_6m_start: '2024-07-01T00:00:00',
        ra_geral_6m_solved_percentual: '--',
        ra_geral_6m_total_answered: '5',
        ra_geral_6m_type: 'SIX_MONTHS',
        ra_geral_12m_avg_anser_time: '446011.3333333333',
        ra_geral_12m_final_score: '--',
        ra_geral_12m_total_not_answered: '0',
        ra_geral_12m_total_complains: '6',
        ra_geral_12m_consumer_score: '--',
        ra_geral_12m_start: '2024-01-01T00:00:00',
        ra_geral_12m_solved_percentual: '--',
        ra_geral_12m_total_answered: '6',
        ra_geral_12m_type: 'TWELVE_MONTHS',
        ra_geral_description:
          'Mais de 7 mil empresas confiam no nosso ecossistema de soluções para a jornada de crédito, desde a emissão de ativos à gestão financeira.',
        ra_geral_competitors: [],
        ra_geral_phones: [],
        ra_properties: { name: 'Thadeu' },
        ra_geral_main_segment: 'Bancos e Financeiras',
        ra_geral_main_segment_shortname: 'bancos-e-financeiras',
        ra_geral_fantasy_name: 'Grafeno Pagamentos',
        ra_geral_statuscode: '200',
        last_step: '2050',
      }

      const template = {
        id: 20000,
        type: 'response',
        pipeline: {
          phone_list: '{{phone_list}}',
          phone_list_reasoning: '{{phone_list_reasoning}}',
          score_exposure: '{{score_exposure}}',
          score_exposure_reasoning: '{{score_exposure_reasoning}}',
          oai_tel_summary: '{{oai_tel_summary}}',
          oai_tel_finish_reason: '{{oai_tel_finish_reason}}',
          oai_tel_total_token: '{{oai_tel_total_token}}',
          oai_tel_statuscode: '{{oai_tel_statuscode}}',
          ppl_tel_refs: '{{ppl_tel_refs}}',
          ppl_tel_resp: '{{ppl_tel_resp}}',
          ppl_tel_total_tokens: '{{ppl_tel_total_tokens}}',
          ppl_tel_statuscode: '{{ppl_tel_statuscode}}',
          ppl_tel_link1: '{{ppl_tel_link1}}',
          ppl_tel_link2: '{{ppl_tel_link2}}',
          ppl_tel_link3: '{{ppl_tel_link3}}',
          ppl_tel_link4: '{{ppl_tel_link4}}',
          ppl_tel_link5: '{{ppl_tel_link5}}',
          markdown_home_statuscode: '{{markdown_home_statuscode}}',
          lead_ra_confidence: '{{lead_ra_confidence}}',
          lead_ra_reasoning: '{{lead_ra_reasoning}}',
          lead_cnpj: '{{lead_cnpj}}',
          lead_cnpj_confidence: '{{lead_cnpj_confidence}}',
          lead_cnpj_reasoning: '{{lead_cnpj_reasoning}}',
          q_url: '{{q_url}}',
          q_name: '{{q_name}}',
          lead_domain: '{{lead_domain}}',
          rdap_entities: '{{rdap_entities}}',
          serp_ra_geral_status: '{{serp_ra_geral_status}}',
          serp_ra_geral_status_message: '{{serp_ra_geral_status_message}}',
          serp_ra_geral_tasks_error: '{{serp_ra_geral_tasks_error}}',
          serp_ra_geral_url: '{{serp_ra_geral_url}}',
          serp_ra_geral_statuscode: '{{serp_ra_geral_statuscode}}',
          lead_ra_name: '{{lead_ra_name}}',
          ra_geral_name: '{{ra_geral_name}}',
          ra_geral_url: '{{ra_geral_url}}',
          ra_geral_main_segment: '{{ra_geral_main_segment}}',
          ra_geral_fantasy_name: '{{ra_geral_fantasy_name}}',
          ra_geral_doc: '{{ra_geral_doc}}',
          ra_geral_doc_type: '{{ra_geral_doc_type}}',
          ra_geral_competitors: '{{ra_geral_competitors}}',
          ra_geral_phones: '{{ra_geral_phones}}',
          ra_properties: '{{ra_properties}}',
          ra_geral_phones_string: '{{ra_geral_phones_string}}',
          scrape_home_o_description: '{{scrape_home_o_description}}',
          scrape_home_o_title: '{{scrape_home_o_title}}',
          scrape_home_o_site_name: '{{scrape_home_o_site_name}}',
          scrape_home_h1: '{{scrape_home_h1}}',
          scrape_home_h2: '{{scrape_home_h2}}',
          scrape_home_url: '{{scrape_home_url}}',
          scrape_home_title: '{{scrape_home_title}}',
          scrape_home_m_description: '{{scrape_home_m_description}}',
          scrape_home_m_keywords: '{{scrape_home_m_keywords}}',
          scrape_home_phone_number1: '{{scrape_home_phone_number1}}',
          scrape_home_phone_number2: '{{scrape_home_phone_number2}}',
          scrape_home_phone_number3: '{{scrape_home_phone_number3}}',
          scrape_home_phone_number4: '{{scrape_home_phone_number4}}',
          scrape_home_phone_number5: '{{scrape_home_phone_number5}}',
          scrape_home_cnpj1: '{{scrape_home_cnpj1}}',
          scrape_home_cnpj2: '{{scrape_home_cnpj2}}',
          scrape_home_cnpj3: '{{scrape_home_cnpj3}}',
          ppl_cnpj_refs: '{{ppl_cnpj_refs}}',
          ppl_cnpj_resp: '{{ppl_cnpj_resp}}',
          ppl_cnpj_total_tokens: '{{ppl_cnpj_total_tokens}}',
          ppl_cnpj_statuscode: '{{ppl_cnpj_statuscode}}',
          ppl_cnpj_link1: '{{ppl_cnpj_link1}}',
          ppl_cnpj_link2: '{{ppl_cnpj_link2}}',
          ppl_cnpj_link3: '{{ppl_cnpj_link3}}',
          ppl_cnpj_link4: '{{ppl_cnpj_link4}}',
          ppl_cnpj_link5: '{{ppl_cnpj_link5}}',
          oai_cnpj_summary: '{{oai_cnpj_summary}}',
          oai_cnpj_finish_reason: '{{oai_cnpj_finish_reason}}',
          oai_cnpj_total_token: '{{oai_cnpj_total_token}}',
          oai_cnpj_statuscode: '{{oai_cnpj_statuscode}}',
          statuscodeslack: '{{statuscodeslack}}',
          bodyslack: '{{bodyslack}}',
          last_step: '{{last_step}}',
          result_status: '{{result_status}}',
          result_details: '{{result_details}}',
          markdown_home_body: '{{markdown_home_body}}',
          ppl_tel_body: '{{ppl_tel_body}}',
          oai_tel_body: '{{oai_tel_body}}',
          ppl_cnpj_body: '{{ppl_cnpj_statuscode}}',
          serp_ra_geral_body: '{{serp_ra_geral_body}}',
          req_teste:
            '```ra_geral_name: {{ra_geral_name}}\n ra_geral_url: {{ra_geral_url}}\n ra_properties: {{ra_properties}} ra_geral_competitors: {{ra_geral_competitors}}\n ra_geral_id: {{ra_geral_id}}\n ra_geral_created: {{ra_geral_created}}\n ra_geral_cnpj_validado: {{ra_geral_cnpj_validado}}\n ra_geral_shortname: {{ra_geral_shortname}}\n ra_geral_suspended: {{ra_geral_suspended}}\n ra_geral_status: {{ra_geral_status}}\n ra_geral_6m_avg_anser_time: {{ra_geral_6m_avg_anser_time}}\n ra_geral_6m_final_score: {{ra_geral_6m_final_score}}\n ra_geral_6m_total_not_answered: {{ra_geral_6m_total_not_answered}}\n ra_geral_6m_total_complains: {{ra_geral_6m_total_complains}}\n ra_geral_6m_consumer_score: {{ra_geral_6m_consumer_score}}\n ra_geral_6m_start: {{ra_geral_6m_start}}\n ra_geral_6m_solved_percentual: {{ra_geral_6m_solved_percentual}}\n ra_geral_6m_total_answered: {{ra_geral_6m_total_answered}}\n ra_geral_6m_type: {{ra_geral_6m_type}}\n ra_geral_12m_avg_anser_time: {{ra_geral_12m_avg_anser_time}}\n ra_geral_12m_final_score: {{ra_geral_12m_final_score}}\n ra_geral_12m_total_not_answered: {{ra_geral_12m_total_not_answered}}\n ra_geral_12m_total_complains: {{ra_geral_12m_total_complains}}\n ra_geral_12m_consumer_score: {{ra_geral_12m_consumer_score}}\n ra_geral_12m_start: {{ra_geral_12m_start}}\n ra_geral_12m_solved_percentual: {{ra_geral_12m_solved_percentual}}\n ra_geral_12m_total_answered: {{ra_geral_12m_total_answered}}\n ra_geral_12m_type: {{ra_geral_12m_type}}\n ra_geral_description: {{ra_geral_description}}\n ra_geral_phones: {{ra_geral_phones}}\n ra_geral_main_segment: {{ra_geral_main_segment}}\n ra_geral_main_segment_shortname: {{ra_geral_main_segment_shortname}}\n ra_geral_fantasy_name: {{ra_geral_fantasy_name}}\n ra_geral_statuscode: {{ra_geral_statuscode}}\n```',
        },
      }

      const replacer = new dryreplacer(data1, { strict: false })
      let result: any = replacer.try(JSON.stringify(template), { stringifyTypeof: true })

      expect(result.pipeline.ra_geral_phones).toEqual([])
      expect(result.pipeline.ra_geral_competitors).toEqual([])

      expect(
        result.pipeline.req_teste.includes('ra_geral_name: Grafeno Pagamentos')
      ).toBeTruthy()
      expect(
        result.pipeline.req_teste.includes('ra_geral_phones: []')
      ).toBeTruthy()
      expect(
        result.pipeline.req_teste.includes('ra_geral_competitors: []')
      ).toBeTruthy()
      expect(
        result.pipeline.req_teste.includes('ra_properties: {"name":"Thadeu"}')
      ).toBeTruthy()
    })
  })

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

    it('should be return value if event numeric', () => {
      const webhook = {
        variables: {
          action: 10,
        },
      }

      let template = {
        action: '{{variables.action}}',
      }

      const replacer = new dryreplacer(webhook, { keepTypeof: true })
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        action: 10,
      })
    })

    it('should be return value if event numeric', () => {
      const webhook = {
        variables: {
          request_id: -110,
        },
      }

      let template = {
        action: '{{variables.request_id}}',
      }

      const replacer = new dryreplacer(webhook, { keepTypeof: true })
      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        action: -110,
      })
    })

    it('when value is null, we gonna transform to string', () => {
      const variables = {
        request_id: null
      }

      let template = {
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: {{request_id}}```'
        }
      }

      const replacer = new dryreplacer(variables, { strict: false, keepTypeof: true })

      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: ```'
        }
      })
    })

    it('when value is false, we gonna transform to string', () => {
      const variables = {
        request_id: false
      }

      let template = {
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: {{request_id}}```'
        }
      }

      const replacer = new dryreplacer(variables, { strict: false, keepTypeof: true })

      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: false```'
        }
      })
    })

    it('when value is true, we gonna transform to string', () => {
      const variables = {
        request_id: true
      }

      let template = {
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: {{request_id}}```'
        }
      }

      const replacer = new dryreplacer(variables, { strict: false, keepTypeof: true })

      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: true```'
        }
      })
    })

    it('when value is undefined, we gonna transform to string', () => {
      const variables = {
        request_id: undefined
      }

      let template = {
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: {{request_id}}```'
        }
      }

      const replacer = new dryreplacer(variables, { strict: false, keepTypeof: true })

      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: ```'
        }
      })      
    })

    it('when value is zero(0), we gonna transform to string', () => {
      const variables = {
        request_id: 0
      }

      let template = {
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: {{request_id}}```'
        }
      }

      const replacer = new dryreplacer(variables, { strict: false, keepTypeof: true })

      let result = replacer.try(JSON.stringify(template))

      expect(result).toMatchObject({
        text: {
          type: 'mrkdwn',
          text: '```REQS\n\n>>> request_id: 0```'
        }
      })      
    })
  })
})

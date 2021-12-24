import { request, COMMON_URI } from "@/config/request"

export interface DBRelated {
      results: string[]
      highlight: { [key: string]: string }[]
}

export interface Timeline {
      desc: string
      auditor: string[]
      type: number
}

export interface TableArch {
      source?: string
      data_base: string
      table: string
      source_id?: string
}

export function FetchIDCNameApis () {
      return request({
            method: 'get',
            url: `${COMMON_URI}/fetch/idc`,
      })
}

export function FetchDBNameApis (source: string) {
      return request({
            method: 'get',
            url: `${COMMON_URI}/fetch/base`,
            params: {
                  source_id: source
            }
      })
}

export function FetchTableArchApis (source: TableArch) {
      return request({
            method: 'get',
            url: `${COMMON_URI}/fetch/fields`,
            params: source
      })
}


export function FetchTableApis (source_id: string, data_base: string) {
      return request({
            method: 'get',
            url: `${COMMON_URI}/fetch/table`,
            params: {
                  source_id: source_id,
                  data_base: data_base
            }
      })
}

export function FetchTimelineApis (idc: string) {
      return request({
            method: 'get',
            url: `${COMMON_URI}/fetch/timeline`,
            params: {
                  idc: idc
            }
      })
}
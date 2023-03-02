export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  data: any
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface ILoginData {
  id: number
  name: string
  token: string
}

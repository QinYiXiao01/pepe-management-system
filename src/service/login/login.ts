import pepeRequest from '..'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI { // Login相关的url
  AccountLogin = './login',
  LoginUserInfo = './users/',
  UserMenus = '/role/'
}

export function accountingLoginRequest(account: IAccount) {
  return pepeRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return pepeRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return pepeRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}

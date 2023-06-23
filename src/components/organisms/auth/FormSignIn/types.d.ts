import { ReactNode } from 'react'

export interface IFormSignIn {
  getParamsObject: (paramsObject : {[key: string]: string | number | boolean;}) => void;
}
import { IForm } from '@/base-ui/form'

// const formItems: IFormItem[] =
// const labelWidth = '70px'
// const itemStyle = 'margin: 10px 30px'
// 将上面的配置合并成为一个formConfig
export const searchFormConfig: IForm = {
  labelWidth: '70px',
  itemLayout: {
    padding: '10px 30px'
  },
  formItems: [
    {
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '内容',
      placeholder: '请选择内容',
      options: [
        { title: 'option1', value: 'option1' },
        { title: 'option2', value: 'option2' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}

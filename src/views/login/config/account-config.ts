export // 规则
const rules = {
  name: [
    {
      required: true,
      message: 'account name needed',
      trgger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: 'account name should ranges from 5-10 letters'
    }
  ],
  password: [
    {
      required: true,
      message: 'password needed',
      trgger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: 'password should be longer than 3 letters/numbers'
    }
  ]
}

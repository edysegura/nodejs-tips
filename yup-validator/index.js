import yup from 'yup'

const car = {
  year: 2018,
  model: '',
  engine: 'v8',
  price: -100000.0,
}

const schema = yup.object().shape({
  price: yup.number().positive().required(),
  year: yup.number().min(4).required(),
  model: yup.string().required(),
  engine: yup.string().required(),
})

async function main() {
  try {
    await schema.validate(car, { abortEarly: false })
    console.log('Success!')
  } catch (error) {
    console.table(error.errors)
  }
}

main()

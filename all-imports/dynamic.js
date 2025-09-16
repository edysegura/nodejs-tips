import config from './components.json' with { type: 'json' }

for (const component of config.components) {
  const module = await import(`./components/${component}.js`)
  console.log('Dynamic import:', component)
  console.log(`${component} is ${module.default()}`)
}

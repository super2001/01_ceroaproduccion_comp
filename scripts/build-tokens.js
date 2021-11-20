//import { choices, decisions } from '../util/tokens';
const { choices, decisions } = require('../tokens')
const fs = require('fs')

//console.log('>>>scipt')

const toKababCase = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

function transformTokens(parentKey, object) {
  const objectkeys = Object.keys(object)

  return objectkeys.reduce((tokensTransformed, objectkey) => {
    const value = object[objectkey]

    if (Array.isArray(value)) {
      const customProperty = parentKey
        ? `${parentKey}-${objectkey}`
        : `${objectkey}`

      return `${tokensTransformed}\n\t--${toKababCase(
        customProperty
      )}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      const customProperty = parentKey
        ? `${parentKey}-${objectkey}`
        : `${objectkey}`
      return `${tokensTransformed}\n\t${transformTokens(
        `${toKababCase(customProperty)}`,
        value
      )}`
    }

    //const customProperty = parentKey ? `--${parentKey}-${objectkey}` : `${parentKey}-${objectkey}`
    //${customProperty}: ${value};

    return `${tokensTransformed}\n\t--${parentKey}-${toKababCase(
      objectkey
    )}: ${value};`
  }, '')
}

function buildTokens() {
  const caso = 'Recursivo'
  let customProperties_Final = ''

  if (caso == 'NoRecursivo') {
    //const choicesKeys = Object.keys(choices)
    let choicesStr = ''
    if (typeof choices['colors'] == 'object') {
      const colorkeys = Object.keys(choices['colors'])
      choicesStr = colorkeys.reduce((prev, curr) => {
        if (typeof choices['colors'][curr] == 'object') {
          const brandkeys = Object.keys(choices['colors'][curr])
          const colorsStr = brandkeys.reduce((prevBrandkeys, currBrandkeys) => {
            const value = choices['colors'][curr][currBrandkeys]
            return `
              ${prevBrandkeys}
              --colors-${curr}-${currBrandkeys}: ${value};
            `
          }, '')
          //return brandkeys;
          return `
            ${prev}
            ${colorsStr}
          `
        } else {
          return `
            ${prev}
            --colors-${curr}: ${choices['colors'][curr]};
          `
        }
      }, '')
    }
    //const customProperties = choicesKeys
    const customProperties = choicesStr
    customProperties_Final = customProperties
    // const data = `
    //   :root {
    //     ${customProperties}
    //   }
    // `
  }
  if (caso == 'Recursivo') {
    const choicesStr = transformTokens(null, choices)
    const decisionsStr = transformTokens(null, decisions)
    const customProperties = `${choicesStr}${decisionsStr}`
    customProperties_Final = customProperties
  }

  // const data = `:root {
  //   ${customProperties_Final.trim()}
  // }`
  //const data =[":root {",customProperties_Final.trim(),"}"].join('\n')
  const data = [':root {', customProperties_Final.trim()]
    .join('\n\t')
    .concat('\n}')

  fs.writeFile('./styles/tokens.css', data, 'utf8', function (error) {
    if (error) {
      return console.error(error)
    }
  })
  //Si quieren eliminar todos los espacios y acomodar los tokens.css
  //pueden poner este código en la parte de el fs.writeFile dentro de el buildCustomProperties
  // fs.writeFile(
  // 	'./util/tokens.css',
  // 	data.replace(/\t/g, '').replace(/\n{2,}/g, '\n\t'),
  // 	'utf8',
  // 	error => {
  // 		if (error) {
  // 			return console.error(error);
  // 		}
  // 	},
  // );
}

buildTokens()

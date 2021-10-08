import k from './kaboom'

import First from './scenes/First'

k.scene('first', First)

// k.scene('test', () => {
//     console.log('test')
// })

k.start('first')
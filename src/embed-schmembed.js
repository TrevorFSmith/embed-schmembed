class EmbedSchmembed {
	constructor() {
		console.log('Ahoi there')
	}
}

const heading = document.createElement('h1')
heading.text = 'Embed Schmembed!'
document.body.appendChild(heading)

new EmbedSchmembed()

console.log('Embed Schmembed has run')

import { copyFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import toIco from 'to-ico'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const icon = join(root, 'assets/img/icon.png')
const iconSmall = join(root, 'assets/img/icon-small.png')
const pub = join(root, 'public')

const resize = (input, output, size) =>
	sharp(input)
		.resize(size, size, { kernel: sharp.kernel.nearest })
		.png()
		.toFile(output)

copyFileSync(iconSmall, join(pub, 'icon.png'))
await resize(icon, join(pub, 'android-chrome-192x192.png'), 192)
await resize(icon, join(pub, 'android-chrome-512x512.png'), 512)
await resize(icon, join(pub, 'apple-touch-icon.png'), 180)
copyFileSync(
	join(pub, 'apple-touch-icon.png'),
	join(pub, 'apple-touch-icon-precomposed.png'),
)

const icoSizes = [16, 32, 48]
const icoBuffers = await Promise.all(
	icoSizes.map((size) =>
		sharp(iconSmall)
			.resize(size, size, { kernel: sharp.kernel.nearest })
			.png()
			.toBuffer(),
	),
)
writeFileSync(join(pub, 'favicon.ico'), await toIco(icoBuffers))

console.log('Generated public icon assets from icon.png and icon-small.png')

import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'


export default function Editor() {
	return (
		<div className="tldraw__editor">
			<Tldraw />
		</div>
	)
}

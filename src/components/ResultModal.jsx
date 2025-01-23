import {createPortal} from 'react-dom';

export default function ResultModal({ ref, remainingTime, targetTime, onReset }) {
	const youLost = remainingTime <= 0;
	const formatterRemainTime = remainingTime / 1000;
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	return (createPortal(
		<dialog ref={ref} className='result-modal' onClose={onReset}>
			{youLost && <h2>Porażka</h2>}
			{!youLost && <h2>Twój wynik {score}</h2>}
			<p>
				{' '}
				Czas docelowy wynosił{' '}
				<strong>
					{targetTime} sekund{targetTime > 1 ? '' : 'ę'}
				</strong>
			</p>
			<p>
				Pozostało <strong>{formatterRemainTime} sekund do końca.</strong>
			</p>
			<form method='dialog' onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	));
}
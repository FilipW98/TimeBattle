

export default function ResultModal({ ref, remainingTime, targetTime, onReset }) {
	const youLost = remainingTime <= 0;
	const formatterRemainTime = remainingTime / 1000;
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	return (
		<dialog ref={ref} className='result-modal' onClose={onReset}>
			{youLost && <h2>You Lost</h2>}
			{!youLost && <h2>Your score {score}</h2>}
			<p>
				{' '}
				The target time was{' '}
				<strong>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</strong>
			</p>
			<p>
				You stopped the timer with <strong>{formatterRemainTime} seconds left.</strong>
			</p>
			<form method='dialog' onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
}
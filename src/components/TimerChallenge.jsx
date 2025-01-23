import { useState, useRef, Children } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
	const [isRunning, setIsRunning] = useState(targetTime * 1000);

	const timer = useRef();
	const popup = useRef();
	const timerIsActive = isRunning > 0 && isRunning < targetTime * 1000;

    if (isRunning <= 0) {
		clearInterval(timer.current);
		popup.current.showModal();
    }
    
    function handleReset() {
        setIsRunning(targetTime * 1000);
    }

	function handleGame() {
		timer.current = setInterval(() => {
            setIsRunning(prevIsRunning =>
                prevIsRunning - 10);
		}, 10);
	}

	function handleStop() {
		popup.current.showModal();
		clearInterval(timer.current);
	}

	return (
		<>
			<ResultModal ref={popup} targetTime={targetTime} remainingTime={isRunning} onReset={handleReset} />
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} sekund{targetTime > 1 ? '' : 'a'}
				</p>
				<button onClick={timerIsActive ? handleStop : handleGame}>{timerIsActive ? 'Zatrzymaj' : 'Zacznij'} grę</button>

				<p className={timerIsActive ? 'active' : ''}>{timerIsActive ? 'Stoper włączony...' : 'Stoper wyłączony'}</p>
			</section>
		</>
	);
}

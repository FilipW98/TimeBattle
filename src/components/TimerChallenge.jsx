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
		console.log('odpalam handleGame');
		timer.current = setInterval(() => {
            setIsRunning(prevIsRunning =>
                prevIsRunning - 10);
		}, 10);
	}

	function handleStop() {
		popup.current.showModal();
		clearInterval(timer.current);
        console.log('zatrzymano gre!');
	}

	return (
		<>
			<ResultModal ref={popup} targetTime={targetTime} remainingTime={isRunning} onReset={handleReset} />
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<button onClick={timerIsActive ? handleStop : handleGame}>{timerIsActive ? 'Stop' : 'Start'} game</button>

				<p className={timerIsActive ? 'active' : ''}>{timerIsActive ? 'Timer is running...' : 'Timer inactive'}</p>
			</section>
		</>
	);
}

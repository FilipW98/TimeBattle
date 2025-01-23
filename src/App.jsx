import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
		<>
			<Player />
			<div id='challenges'>
				<TimerChallenge title={'Łatwy Start'} targetTime={1} />
				<TimerChallenge title={'Nie za Łatwo'} targetTime={5} />
				<TimerChallenge title={'Mistrz Precyzji'} targetTime={10} />
				<TimerChallenge title={'Władca Czasu'} targetTime={15} />
			</div>
		</>
	);
}

export default App;

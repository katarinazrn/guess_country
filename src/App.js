import './App.css';
import { Fragment, useEffect, useState } from 'react';
import StartButton from './components/Start/StartButton';
import Container from './components/UI/Container/Container';
import Flag from './components/Flag/Flag';
import Input from './components/Input/Input';
import Score from './components/Score/Score';
import SkipButton from './components/Skip/SkipButton';
import End from './components/End/End';
import CorrectAnswer from './components/CorrectAnswer/CorrectAnswer';
import Logo from './components/UI/Logo/Logo';
import Landing from './components/Landing/Landing';

const App = () => {

  const [status, setStatus] = useState('new');
  const [countries, setCountries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState('');
  const limit = 5;

  useEffect(() => {
    setRandomCountries();
  }, []);

  const setRandomCountries = () => {
    fetch('https://flagcdn.com/en/codes.json')
      .then(res => res.json())
      .then(data => {
        let allCodes = Object.keys(data).filter(key => !key.includes('us-')).map(key => [key, data[key]]);
        let tempCountries = [];

        for (let i = 0; i < limit; i++) {
          let index = Math.floor(Math.random() * allCodes.length);
          let name = allCodes[index][1];
          let code = allCodes[index][0];
          tempCountries.push({
            code,
            name,
            url: `https://flagcdn.com/h240/${code}.png`
          });
          allCodes.splice(index, 1);
        }
        setCountries(tempCountries);
      })
      .catch(err => console.log(err));
  }

  const start = () => {
    setRandomCountries();
    setScore(0);
    setSkipped(0);
    setCurrentIndex(0);
    setStatus('game');
  }

  const guessed = () => {
    setCurrentIndex(prev => prev + 1);
    setScore(prev => prev + 1);
  }

  const skipCountry = () => {
    setShowAnswer(true);
    setAnswer(countries[currentIndex].name);
    setSkipped(prev => prev + 1);
    setCurrentIndex(prev => prev + 1);

    const interval = setInterval(() => {
      setShowAnswer(false);
      setAnswer('');
      clearInterval(interval);
    }, 2000);
  }

  useEffect(() => {
    if (skipped + score == limit) {
      setCountries([]);
      setStatus('end');
    }
  }, [skipped, score])

  return (
    <Container>
      {status === 'new' && <Landing start={start} />}
      {status === 'end' &&
        <Fragment>
          <Logo width='35%' />
          <End start={start} score={score} limit={limit} />
        </Fragment>}
      {status === 'game' && countries[currentIndex] &&
        <Fragment>
          <Logo width='35%' />
          <Score index={currentIndex} limit={limit} score={score} skipped={skipped} />
          <Flag url={countries[currentIndex].url} />
          <Input guessed={guessed} name={countries[currentIndex].name} />
          <SkipButton skip={skipCountry} />
        </Fragment>
      }
      {showAnswer && <CorrectAnswer name={answer} />}
    </Container>
  );
}

export default App;

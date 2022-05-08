import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled,{css} from 'styled-components';

const MyButton = styled.button`
  color: green;
  ${props => props.primary && css`
    background: green;
    color: black;
  `}
  `

  const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
    <WelcomeMessage/>
    <MyButton primary={false}>hello</MyButton>
    <TomatoButton primary={true}>hello</TomatoButton>
    </div>
    
  );
}

export default App;

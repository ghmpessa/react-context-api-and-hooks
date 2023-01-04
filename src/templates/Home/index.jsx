import { useCounterContext } from '../../contexts/CounterContext'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import './styles.css'

export const Home = () => {
  const [state, actions] = useCounterContext()
  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={() => actions.increase()}>Increase</Button>
        <Button onButtonClick={() => actions.increase()}>Decrease</Button>
      </div>
    </div>
  )
}

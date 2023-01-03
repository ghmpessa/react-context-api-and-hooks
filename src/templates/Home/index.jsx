import { useCounterContext } from '../../contexts/CounterContext'
import './styles.css'

export const Home = () => {
  const [state, actions] = useCounterContext()
  return (
    <div>
      <h1 onClick={() => actions.increase()}>oi</h1>
    </div>
  )
}

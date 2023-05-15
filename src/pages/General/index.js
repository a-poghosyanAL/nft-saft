import { Adopter } from '../../components/Adopter/Adopter'
import { Bonus } from '../../components/Bonus/Bonus'

const General = () => {
  return (
    <div className='bg-bubble bg-1544 bg-leftRight bg-no-repeat pb-16 2xl:min-h-3111 2xl:pb-0'>
      <Adopter />
      <div className='pt-28'>
        <Bonus />
      </div>
    </div>
  )
}

export { General }

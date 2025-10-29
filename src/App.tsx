import './App.css'
import { Button } from './components/ui/button'
import {cn} from '@/lib/utils';

function App() {
  const isActive = true;
  return (
    <div>
      <Button>버튼입니다</Button>
      <div className={cn(!isActive?"text-red-500":"text-green-500")}>isActive</div>
      <div className='text-primary'>primary</div>
      <div className='text-muted'>muted</div>
      <div className='text-destructive'>distructive</div>

    </div>
  )
}

export default App

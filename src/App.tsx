import './App.css'

function App() {

  return (
    <div>
      <div className='text-xs font-bold'>font-xs</div>
      <div className='text-sm text-red-500'>font-sm</div>
      <div className='text-lg'>font-lg</div>
      <div className='text-xl'>font-xl</div>
      <div className='text-2xl'>font-2xl</div>
      <div className='text-[13px]'>font-13px</div>

      <div className='bg-amber-500'>amber-500</div>
      <div className='w-full h-20 bg-blue-500'>box</div>
      <div className='h-50 w-50 bg-red-400 p-5 my-5'>
        <div className='h-full w-full bg-blue-500'></div>
      </div>


      <div className='border-2 border-red-500 rounded-md m-5'>border</div>

      <div className='flex items-center justify-center flex-row m-5'>
        <div className='h-10 w-10 border'>1</div>
        <div className='h-20 w-10 border flex-1'>2</div>
        <div className='h-30 w-10 border'>3</div>
        <div className='h-40 w-10 border'>4</div>
      </div>

    </div>
  )
}

export default App

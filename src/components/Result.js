import SubmitButton from './SubmitButton'

const Result = ({ tip, total }) => {
  return (
    <div className="p-4 bg-cyan-dark text-cyan-light rounded-lg mt-8 lg:flex-1 lg:mt-0">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-sm">Tip Ammount</h4>
            <span className="text-xs">/ Person</span>
          </div>
          <p className="text-2xl font-bold tracking-tight ">
            $ {isNaN(tip) ? 0 : tip}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-sm">Total</h4>
            <span className="text-xs">/ Person</span>
          </div>
          <p className="text-2xl font-bold tracking-tight ">
            $ {isNaN(total) ? 0 : total}
          </p>
        </div>
      </div>
      <SubmitButton />
    </div>
  )
}

export default Result

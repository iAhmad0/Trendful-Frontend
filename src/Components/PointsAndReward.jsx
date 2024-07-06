import ComponentImage from './ComponentImage'
import SelectPoints from './SelectPoints'

function PointsAndReward() {
  return (
    <div className="flex  justify-center mt-[10px]">
      <ComponentImage />
      <div className="border border-gray-300 border-1 mt-[10px] p-[10px] h-[378px] w-[200px] flex flex-col pl-5 rounded-lg">
        <SelectPoints />
      </div>
    </div>
  )
}
export default PointsAndReward

import { StyledBuildingBlock } from "../BuildingBlock/BuildingBlock.style"

type GridProps = {
  className?: string
  amountOfBlocks?: number
  materials?: {
    air: string
    dirt: string
    grass: string
    water: string
    grassDirt: string
    tnt: string
  }
  selectedMaterial: string
}

export const Grid: React.FunctionComponent<GridProps> = ({ className, materials, selectedMaterial, amountOfBlocks }) => {
  return (
    <div className={className + " grid"}>
      {[...Array(amountOfBlocks)].map((e, i) => (
        <StyledBuildingBlock className="" selectedMaterial={selectedMaterial} materials={materials} key={i} />
      ))}
    </div>
  )
}

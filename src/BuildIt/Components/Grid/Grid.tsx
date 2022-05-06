import { StyledBuildingBlock } from "../BuildingBlock/BuildingBlock.style"
type GridProps = {
	className?: string
	amountOfBlocks?: number
	selectedMaterial: string
	materials: {
		dirt: string
		grass: string
		water: string
		grassDirt: string
		tnt: string
	}
}

export const Grid: React.FunctionComponent<GridProps> = ({
	className,
	selectedMaterial,
	amountOfBlocks,
	materials,
}) => {
	return (
		<div className={className + " grid"}>
			{[...Array(amountOfBlocks)].map((e, i) => (
				<StyledBuildingBlock
					className=''
					selectedMaterial={selectedMaterial}
					key={i}
					materials={materials}
				/>
			))}
		</div>
	)
}

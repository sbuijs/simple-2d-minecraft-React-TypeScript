import { useState } from "react"
import { StyledGrid } from "../BuildIt/Components/Grid/Grid.style"
import { StyledCurrentMaterial } from "../BuildIt/Components/CurrentMaterial/CurrentMaterial.style"

const amountOfBlocks = 112

const materials = {
	dirt: "dirt",
	grass: "grass",
	water: "water",
	grassDirt: "grassDirt",
	tnt: "tnt",
}

type BuildItProps = {
	className?: string
}

export const BuildIt: React.FunctionComponent<BuildItProps> = ({
	className,
}) => {
	const [selectedMaterial, setSelectedMaterial] = useState(materials.dirt)

	const onChangeMaterial = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (selectedMaterial === materials.dirt) {
			setSelectedMaterial(materials.grass)
		}
		if (selectedMaterial === materials.grass) {
			setSelectedMaterial(materials.water)
		}
		if (selectedMaterial === materials.water) {
			setSelectedMaterial(materials.grassDirt)
		}
		if (selectedMaterial === materials.grassDirt) {
			setSelectedMaterial(materials.tnt)
		}
		if (selectedMaterial === materials.tnt) {
			setSelectedMaterial(materials.dirt)
		}
	}

	return (
		<div className={className}>
			<StyledCurrentMaterial
				className=''
				selectedMaterial={selectedMaterial}
				onChangeMaterial={onChangeMaterial}
				materials={materials}
			/>
			<StyledGrid
				className=''
				amountOfBlocks={amountOfBlocks}
				selectedMaterial={selectedMaterial}
				materials={materials}
			/>
		</div>
	)
}

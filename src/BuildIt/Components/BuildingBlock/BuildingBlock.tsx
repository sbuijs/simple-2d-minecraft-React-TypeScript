import { useState } from "react"

//image import
import air from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/air.svg"
import dirt from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/dirt.svg"
import grass from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/grass.svg"
import water from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/water.svg"
import grassDirt from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/grassDirt.svg"

type BuildingBlockProps = {
	className?: string
	selectedMaterial: string
	materials: {
		dirt: string
		grass: string
		water: string
		grassDirt: string
		tnt: string
	}
}

export const BuildingBlock: React.FunctionComponent<BuildingBlockProps> = ({
	className,
	selectedMaterial,
	materials,
}) => {
	const [currentUsedMaterial, setCurrentUsedMaterial] = useState(air)

	const backgroundImageSource = () => {
		//based on the selected material, set new background image
		if (selectedMaterial === materials.dirt) {
			setCurrentUsedMaterial(dirt)
		}
		if (selectedMaterial === materials.grass) {
			setCurrentUsedMaterial(grass)
		}
		if (selectedMaterial === materials.water) {
			setCurrentUsedMaterial(water)
		}
		if (selectedMaterial === materials.grassDirt) {
			setCurrentUsedMaterial(grassDirt)
		}
		if (selectedMaterial === materials.tnt) {
			setCurrentUsedMaterial(air)
		}
	}

	const onClickHandler = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		backgroundImageSource()
	}

	return (
		<div
			className={className + " building-block"}
			onClick={onClickHandler}
			style={{
				backgroundImage: `url(${currentUsedMaterial})`,
			}}></div>
	)
}

import { useState } from "react"

//image import
import dirt from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/dirt.svg"
import grass from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/grass.svg"
import water from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/water.svg"
import tnt from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/tnt.svg"
import grassDirt from "/Users/steef/Documents/Github-sbuijs/simple-2d-minecraft-React-TypeScript/src/assets/grassDirt.svg"

type CurrentBlockProps = {
	className: string
	selectedMaterial: string
	onChangeMaterial: any
	materials: {
		dirt: string
		grass: string
		water: string
		grassDirt: string
		tnt: string
	}
}

export const CurrentMaterial: React.FunctionComponent<CurrentBlockProps> = ({
	className,
	selectedMaterial,
	onChangeMaterial,
	materials,
}) => {
	const [backgroundImage, setBackgroundImage] = useState(dirt)

	const backgroundImageSource = () => {
		//based on the selected material, set new background image
		if (selectedMaterial === materials.dirt) {
			setBackgroundImage(grass)
		}
		if (selectedMaterial === materials.grass) {
			setBackgroundImage(water)
		}
		if (selectedMaterial === materials.water) {
			setBackgroundImage(grassDirt)
		}
		if (selectedMaterial === materials.grassDirt) {
			setBackgroundImage(tnt)
		}
		if (selectedMaterial === materials.tnt) {
			setBackgroundImage(materials.dirt)
		}
	}

	const onClickHandler = () => {
		onChangeMaterial()
		//update the source of the image so that the current block gets the look of the selected material
		backgroundImageSource()
	}

	return (
		<div className={className}>
			<p>click to switch material</p>
			<div
				className=' current-material'
				onClick={onClickHandler}
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}></div>
		</div>
	)
}

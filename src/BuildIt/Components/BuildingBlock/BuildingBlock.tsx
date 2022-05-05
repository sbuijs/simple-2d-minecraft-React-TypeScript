import { useState, useEffect } from "react"

type BuildingBlockProps = {
  className?: string
  selectedMaterial: string
  materials?: {
    air: string
    dirt: string
    grass: string
    water: string
    grassDirt: string
    tnt: string
  }
}

export const BuildingBlock: React.FunctionComponent<BuildingBlockProps> = ({ className, selectedMaterial, materials }) => {
  const [currentUsedMaterial, setCurrentUsedMaterial] = useState(materials?.air)

  const backgroundImageSource = () => {
    //based on the selected material, set new background image
    if (selectedMaterial === "dirt") {
      setCurrentUsedMaterial(materials?.dirt)
    }
    if (selectedMaterial === "grass") {
      setCurrentUsedMaterial(materials?.grass)
    }
    if (selectedMaterial === "water") {
      setCurrentUsedMaterial(materials?.water)
    }
    if (selectedMaterial === "grassDirt") {
      setCurrentUsedMaterial(materials?.grassDirt)
    }
    if (selectedMaterial === "tnt") {
      setCurrentUsedMaterial(materials?.air)
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("block clicked")
    console.log(selectedMaterial)
    backgroundImageSource()
  }

  return (
    <>
      <div className={className} onClick={onClickHandler} style={{ backgroundImage: `url(${currentUsedMaterial})`, width: `75px`, height: `75px`, cursor: "pointer" }}></div>
    </>
  )
}

import { useState } from "react"
type CurrentBlockProps = {
  className: string
  selectedMaterial: string
  onChangeMaterial: any
  materials?: {
    air: string
    dirt: string
    grass: string
    water: string
    grassDirt: string
    tnt: string
  }
}

export const CurrentMaterial: React.FunctionComponent<CurrentBlockProps> = ({ className, selectedMaterial, onChangeMaterial, materials }) => {
  const [backgroundImage, setBackgroundImage] = useState(materials?.dirt)

  const backgroundImageSource = () => {
    //based on the selected material, set new background image
    if (selectedMaterial === "dirt") {
      setBackgroundImage(materials?.grass)
    }
    if (selectedMaterial === "grass") {
      setBackgroundImage(materials?.water)
    }
    if (selectedMaterial === "water") {
      setBackgroundImage(materials?.grassDirt)
    }
    if (selectedMaterial === "grassDirt") {
      setBackgroundImage(materials?.tnt)
    }
    if (selectedMaterial === "tnt") {
      setBackgroundImage(materials?.dirt)
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
      <div className="building-block" onClick={onClickHandler} style={{ backgroundImage: `url(${backgroundImage})`, width: `75px`, height: `75px`, cursor: "pointer" }}></div>
    </div>
  )
}

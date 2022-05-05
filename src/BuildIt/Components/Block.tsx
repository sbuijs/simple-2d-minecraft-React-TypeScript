import { useEffect } from "react"
import { useState } from "react"

const materials = {
  air: "../../assets/air.svg",
  dirt: "../../assets/dirt.svg",
  grass: "../../assets/grass.svg",
  water: "../../assets/water.svg",
  grassDirt: "../../assets/grassDirt.svg",
}

type BlockProps = {
  className?: string
  currentBlockSelected: string
}

export const Block: React.FunctionComponent<BlockProps> = ({ currentBlockSelected }) => {
  const [blockStyling, setBlockStyling] = useState("air")
  const [backgroundImage, setBackgroundImage] = useState(materials.air)

  useEffect(() => {
    console.log(blockStyling)
  }, [blockStyling])

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (blockStyling === "air") {
      setBackgroundImage(materials.dirt)
    }
    if (blockStyling === "dirt") {
      setBackgroundImage(materials.grass)
    }
  }

  return (
    <>
      <div className="building-block" onClick={(event) => handleOnClick(event)} style={{ backgroundImage: `url(${backgroundImage})`, width: `50px`, height: `50px` }}></div>
    </>
  )
}

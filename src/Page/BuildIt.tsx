import { CurrentMaterial } from "../BuildIt/Components/CurrentMaterial/CurrentMaterial"
import { StyledGrid } from "../BuildIt/Components/Grid/Grid.style"
import { useState } from "react"
import { StyledCurrentMaterial } from "../BuildIt/Components/CurrentMaterial/CurrentMaterial.style"

// const materials = {
//   air: "../../assets/air.svg",
//   dirt: "../../assets/dirt.svg",
//   grass: "../../assets/grass.svg",
//   water: "../../assets/water.svg",
//   grassDirt: "../../assets/grassDirt.svg",
//   tnt: "../../assets/tnt.svg",
// }

const materials = {
  air: "./assets/air.svg",
  dirt: "./assets/dirt.svg",
  grass: "./assets/grass.svg",
  water: "./assets/water.svg",
  grassDirt: "./assets/grassDirt.svg",
  tnt: "./assets/tnt.svg",
}

const amountOfBlocks = 112

type BuildItProps = {
  className?: string
}

export const BuildIt: React.FunctionComponent<BuildItProps> = ({ className }) => {
  const [selectedMaterial, setSelectedMaterial] = useState("dirt")

  // useEffect(() => {
  //   console.log(`selectedMaterial: ${selectedMaterial}`)
  // }, [selectedMaterial])

  const onChangeMaterial = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (selectedMaterial === "dirt") {
      setSelectedMaterial("grass")
    }
    if (selectedMaterial === "grass") {
      setSelectedMaterial("water")
    }
    if (selectedMaterial === "water") {
      setSelectedMaterial("grassDirt")
    }
    if (selectedMaterial === "grassDirt") {
      setSelectedMaterial("tnt")
    }
    if (selectedMaterial === "tnt") {
      setSelectedMaterial("dirt")
    }
  }

  return (
    <div className={className}>
      <StyledCurrentMaterial className="" materials={materials} selectedMaterial={selectedMaterial} onChangeMaterial={onChangeMaterial} />
      <StyledGrid amountOfBlocks={amountOfBlocks} materials={materials} selectedMaterial={selectedMaterial} />
    </div>
  )
}

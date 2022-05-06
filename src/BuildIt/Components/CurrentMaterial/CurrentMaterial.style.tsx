import styled from "styled-components"
import { CurrentMaterial } from "./CurrentMaterial"
export const StyledCurrentMaterial = styled(CurrentMaterial)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	.current-material {
		width: 4.6875rem;
		height: 4.6875rem;
		cursor: "pointer";
	}
`

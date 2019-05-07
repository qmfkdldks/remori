import StyledBox, { StyledHeading, StyledText } from './style';

const IconBox = (props) => (
	<StyledBox primary={props.primary} secondary={props.secondary}>
		<div className="icon">
			{ props.icon }
		</div>
		<StyledHeading className="heading">{props.heading}</StyledHeading>
		<StyledText>{props.text}</StyledText>
	</StyledBox>
)

export default IconBox;
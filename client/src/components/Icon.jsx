import IcoMoon from "react-icomoon";
import iconSet from '@/icons/selection.json'

function Icon({ name, size = 16, ...props }) {
	const lowerCaseName = name.toLowerCase()
	return (
		<IcoMoon
			icon={lowerCaseName}
			iconSet={iconSet}
			width={size}
			height={size}
			{...props}
		/>
	)
}

export default Icon
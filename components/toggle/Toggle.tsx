import { useRef, useState } from "react";
interface TrayColorInterface {
	uncheckedColor: string;
	checkedColor: string;
}
interface ToggleInterface {
	traySize?: number;
	toggleSize?: number;
	trayColor?: TrayColorInterface;
	isChecked?: boolean;
	onChange: (isChecked: boolean) => void;
}
export const Toggle = ({
	traySize = 20,
	toggleSize = 20,
	trayColor = { uncheckedColor: "red", checkedColor: "green" },
	isChecked = false,
	onChange,
}: ToggleInterface) => {
	const [checked, setChecked] = useState(isChecked);
	const toggleRef = useRef<HTMLDivElement>(null);
	const onClick = () => {
		setChecked(!checked);
		toggleRef.current.style.left = `${
			checked ? -1 : traySize * 2 - toggleSize
		}px`;
		onChange(!checked);
	};
	return (
		<div
			style={{
				position: "relative",
				height: `${traySize}px`,
				width: `${traySize * 2}px`,
				backgroundColor: checked
					? `${trayColor.checkedColor}`
					: `${trayColor.uncheckedColor}`,
				border: "1px solid black",
				borderRadius: `${traySize}px`,
			}}
			onClick={onClick}
		>
			<div
				ref={toggleRef}
				style={{
					position: "relative",
					height: `${toggleSize}px`,
					width: `${toggleSize}px`,
					backgroundColor: "white",
					border: "1px solid black",
					borderRadius: `${toggleSize}px`,
					top: "-1px",
					left: "-1px",
					transition: "all 0.2s ease-in-out",
				}}
			></div>
		</div>
	);
};

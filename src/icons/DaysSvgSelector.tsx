import React from "react";

interface Props {
	weatherCode: number;
	iconStyles: string;
}

export const DaysSvgSelector = ({weatherCode, iconStyles}: Props) => {
	if (weatherCode === 0) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z"
				fill="url(#paint0_linear_2_179)"/>
			<path
				d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z"
				fill="#FFB300"/>
			<defs>
				<linearGradient id="paint0_linear_2_179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFC227"/>
					<stop offset="1" stopColor="#FFB300"/>
				</linearGradient>
			</defs>
		</svg>); // sunny
	} else if (weatherCode === 57 || weatherCode === 65 || weatherCode === 67 || weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z"
				fill="#66AFEB"/>
			<path
				d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
				fill="url(#paint0_linear_2_526)"/>
			<path
				d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
				fill="url(#paint1_radial_2_526)"/>
			<defs>
				<linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>) //heavy rain
	} else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55 || weatherCode === 56 || weatherCode === 61 || weatherCode === 63 || weatherCode === 66) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.218 26.926L8.11798 31.924C7.79798 32.688 8.15598 33.568 8.91998 33.888C9.68398 34.208 10.564 33.85 10.884 33.086L12.984 28.088C13.304 27.324 12.946 26.444 12.182 26.124C11.418 25.804 10.538 26.162 10.218 26.926ZM20.218 24.926L18.118 29.924C17.798 30.688 18.156 31.568 18.92 31.888C19.684 32.208 20.564 31.85 20.884 31.086L22.984 26.088C23.304 25.324 22.946 24.444 22.182 24.124C21.418 23.804 20.538 24.162 20.218 24.926Z"
				fill="#66AFEB"/>
			<path
				d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
				fill="url(#paint0_linear_2_538)"/>
			<path
				d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
				fill="url(#paint1_radial_2_538)"/>
			<defs>
				<linearGradient id="paint0_linear_2_538" x1="18" y1="0" x2="18" y2="22"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint1_radial_2_538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>) //rain
	} else if (weatherCode === 1 || weatherCode === 2) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z"
				fill="url(#paint0_linear_2_531)"/>
			<path
				d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z"
				fill="#FFB300"/>
			<path
				d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z"
				fill="url(#paint1_linear_2_531)"/>
			<path
				d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z"
				fill="url(#paint2_radial_2_531)"/>
			<defs>
				<linearGradient id="paint0_linear_2_531" x1="36" y1="8" x2="24.7832" y2="19.0723"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFB301"/>
					<stop offset="1" stopColor="#FFC533"/>
				</linearGradient>
				<linearGradient id="paint1_linear_2_531" x1="18" y1="12" x2="18" y2="34"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint2_radial_2_531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>) //rain with sun
	} else if (weatherCode === 3) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.32"
			      d="M34 21C37.314 21 40 18.314 40 15C40 11.686 37.314 9 34 9H33.938C33.978 8.672 34 8.338 34 8C34 3.582 30.418 0 26 0C22.5 0 19.524 2.248 18.44 5.378C17.67 5.132 16.852 5 16 5C11.582 5 8 8.582 8 13C8 17.418 11.582 21 16 21C16.69 21 17.36 20.912 18 20.748V21H34Z"
			      fill="#73A5E6"/>
			<path
				d="M8 31C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C11.518 11.68 14.946 9 19 9C23.97 9 28 13.03 28 18C28 18.47 27.964 18.93 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8Z"
				fill="url(#paint0_linear_2_551)"/>
			<path
				d="M10 18C10 22.97 14.03 27 19 27C23.502 27 27.23 23.696 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C10.136 16.198 10 17.082 10 18Z"
				fill="url(#paint1_radial_2_551)"/>
			<defs>
				<linearGradient id="paint0_linear_2_551" x1="18" y1="9" x2="18" y2="31"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint1_radial_2_551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(13.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>) //cloud
	} else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75 || weatherCode === 77 || weatherCode === 85 || weatherCode === 86) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="9" cy="27" r="3" fill="#FFFFFF"/>
			<circle cx="18" cy="27" r="3" fill="#FFFFFF"/>
			<circle cx="27" cy="27" r="3" fill="#FFFFFF"/>
			<path
				d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
				fill="url(#paint0_linear_2_526)"/>
			<path
				d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
				fill="url(#paint1_radial_2_526)"/>
			<defs>
				<linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22"
				                gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>) //snow
	} else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z"
					fill="#FFD700"/>
				<path
					d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
					fill="url(#paint0_linear_2_526)"/>
				<path
					d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
					fill="url(#paint1_radial_2_526)"/>
				<defs>
					<linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
						<stop stopColor="#9FC7FF"/>
						<stop offset="1" stopColor="#9BC1F5"/>
					</linearGradient>
					<radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
					                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
						<stop stopColor="#486DA8" stopOpacity="0.4"/>
						<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
					</radialGradient>
				</defs>
			</svg>); //thunderstorm
	} else if (weatherCode === 45 || weatherCode === 48) {
		return (<svg className={iconStyles} width="45" height="45" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z"
				fill="#00FFFF"/>
			<path
				d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
				fill="url(#paint0_linear_2_526)"/>
			<path
				d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
				fill="url(#paint1_radial_2_526)"/>
			<defs>
				<linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
					<stop stopColor="#9FC7FF"/>
					<stop offset="1" stopColor="#9BC1F5"/>
				</linearGradient>
				<radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				                gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
					<stop stopColor="#486DA8" stopOpacity="0.4"/>
					<stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
				</radialGradient>
			</defs>
		</svg>); //fog
	}
	return (
		<div></div>
	);
}
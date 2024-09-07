export const darkModeHandle = (darkMode:string) =>{
	if (darkMode === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}
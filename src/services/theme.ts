import { ConstantThemes } from "../redux/types/themeTypes";
import { ConstantsServerResponse } from "../redux/types/serverResponseTypes";
const Theme = { 
  getTheme: () => {
    const theme = localStorage.getItem('theme');
    return theme || ConstantThemes.LIGTH
  },
  changeTheme: (theme: string) => {
    if(theme){
      localStorage.setItem('theme', theme)
      return ConstantsServerResponse.SUCCESS
    }
    return ConstantsServerResponse.ERROR
  }
}
export default Theme
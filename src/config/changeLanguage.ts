export const changeLanguage = () => {
  try{
    // eslint-disable-next-line valid-typeof
    if (typeof window !== 'undefined'){
      const lng : string | null  = localStorage.getItem('lng')
      return lng ? lng : 'es'
    }
    return 'es'
  }catch(err){
    console.error(err)
  }
}
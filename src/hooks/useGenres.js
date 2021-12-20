const useGenres = (selectedGenre) =>{
    if(selectedGenre.length < 1) return ""
    const GenreId = selectedGenre.map((g) => g.id)
    return GenreId.reduce((res, val) => res + "," + val)
}
export default useGenres
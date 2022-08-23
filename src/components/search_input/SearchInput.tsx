import { View, Text, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';


export interface ISearchBarProps{
    onSearch:(() => void),
    setSearchQuery:React.Dispatch<React.SetStateAction<string>>,
    searchQuery:string,
    pleaceholder:string
}

const SearchInput:React.FC<ISearchBarProps> = ({onSearch, setSearchQuery, searchQuery, pleaceholder}) => {
    const onChangeSearch = (query:any) => {
      setSearchQuery(query);
    }


  return (
    <Searchbar
      placeholder={pleaceholder}
      onChangeText={onChangeSearch}
      onIconPress={onSearch}
      value={searchQuery}
      onBlur={onSearch}
      keyboardType="numeric"
    />
  )
}

export default SearchInput
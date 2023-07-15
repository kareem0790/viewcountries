import {
  FlagListItem,
  FlagImage,
  RemoveContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const FlagItem = props => {
  const {flagDetails, removeCountryItem} = props
  const {id, imageUrl, name} = flagDetails

  const removeCountry = () => {
    removeCountryItem(id)
  }
  return (
    <FlagListItem>
      <FlagImage src={imageUrl} alt="thumbnail" />
      <RemoveContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={removeCountry}>
          Remove
        </RemoveButton>
      </RemoveContainer>
    </FlagListItem>
  )
}

export default FlagItem

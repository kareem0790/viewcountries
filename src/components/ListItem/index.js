import {
  List,
  ListItemContainer,
  ListItemHeading,
  VisitButton,
  Paragraph,
} from './styledComponents'

const ListItem = props => {
  const {countryDetails, changeStatus} = props
  const {id, name, isVisited} = countryDetails
  const onChangeStatus = () => {
    changeStatus(id)
  }

  return (
    <List>
      <ListItemContainer>
        <ListItemHeading>{name}</ListItemHeading>
        {isVisited ? (
          <Paragraph>Visited</Paragraph>
        ) : (
          <VisitButton type="button" onClick={onChangeStatus}>
            Visit
          </VisitButton>
        )}
      </ListItemContainer>
    </List>
  )
}

export default ListItem

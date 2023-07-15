import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 10px;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CountriesContainer = styled.div`
  height: 50vh;
`
export const CountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: #f8fafc;
  font-weight: 500;
`
export const CountriesListContainer = styled.ul`
  padding-left: 0px;
  border: 1px solid #94a3b8;
  background-color: #1f1f2f;
  overflow: auto;
  height: 40vh;
  border-radius: 8px;
`
export const FlagsContainer = styled.div``
export const VisitedCountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: #f8fafc;
  font-weight: 500;
`
export const NoCountriesViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

export const NoCountriesHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: #cbd5e1;
`
export const FlagsListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`

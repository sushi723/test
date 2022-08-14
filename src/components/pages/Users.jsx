import styled from "styled-components"
import { Header } from "../atoms/layout/Header"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map((index) => {
  return {
    id: index,
    name: `すし ${index}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "1234aaaaaaa@gmail.com",
    phone: "0123-4456-6644",
    company: {
      name: "aaaaaa株式会社",
    },
    website: "https://google.com",
  }
})


export const Users = () => {
  return (
    <>
      <Header />
      <SContainer>
        <h2>User一覧</h2>
        <SearchInput />
        {/* UserCardコンポーネントが動かない */}
        {users.map((user) => {
          <UserCard key={user.id} user={user} />
        })}
      </SContainer>
    </>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
import "./index.css"
import { Router } from "./router/Router";

function App() {
  return (
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br />
    //     <SearchInput>検索</SearchInput>
    //     <UserCard user={user}/>
    //   </DefaultLayout>
    // </BrowserRouter>
    <Router />
  );
}

export default App;

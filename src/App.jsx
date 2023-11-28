import { useHooks} from "./Component/useHooks";
import PostDatas from "./Component/PostDatas";
import User from "./Component/User";
import './assets/index.css'


function App() {
  const url1 = "https://jsonplaceholder.typicode.com/posts";
  const url2 = "https://jsonplaceholder.typicode.com/users";
  const url3 = "https://jsonplaceholder.typicode.com/todos";
  let {urls,errors} = useHooks(url1);
  let {urls:user,errors:userError} = useHooks(url2);
  let {urls:symble,errors:symbleError} = useHooks(url3);
  
 
  // console.log(allPost)
  return (
    <div className="container">

      <h1>User Email</h1>
      <div className="email">
      {userError && <p>{userError}</p>}
      {user && user.map((value,index) => (
        <div className="user-mail">{value.email}</div>
      ))},
      </div>

      <h1>Post Title</h1>
      <div className="email">
    {symbleError && <p>{symbleError}</p>}
      {symble && symble.map((value,index) => (
        <div className="user-mail">{value.title}</div>
      ))},
    </div>

      <h1>Post body</h1>
      <div className="email">
      {errors && <p>{errors}</p>}
      {urls && urls.map((value,index) => (
        <div className="user-mail">{value.body}</div>
      ))},
      </div> 

      



      <User />
    </div>
  );
}

export default App;

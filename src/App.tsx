import './App.css'
// import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
// import {useEffect} from "react";
// import {fetchUsers} from "./store/reducers/ActionCreators.ts";
import PostsContainer from "./components/PostsContainer.tsx";




function App() {
    // const  dispatch = useAppDispatch()
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    //
    //
    // useEffect(()=> {
    //     dispatch(fetchUsers())
    // }, [])
    return (
    <>
        <PostsContainer/>
    </>
  )
}

export default App

import { createStackNavigator } from "@react-navigation/stack";
import Posts from "../../views/posts";
import NavigatorHome from "../home-navigation";
import Login from "../../views/login";
import Comments from "../../views/comments";
import AddPost from "../../views/addPosts";
import AddEvent from "../../views/addEvents";
import EditEvent from "../../views/editEvent";
import EditPosts from "../../views/editPosts";
import Event from "../../components/event/Index";
import AddReview from "../../views/addReview";
import OrgReg from "../../views/register-org"


const Stack = createStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainHome" component={NavigatorHome} options={{ headerShown: false }} />
            <Stack.Screen name="Posts" component={Posts}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Comments" component={Comments}/>
            <Stack.Screen name="addPosts" component={AddPost}/>
            <Stack.Screen name="addEvent" component={AddEvent}/>
            <Stack.Screen name="editEvent" component={EditEvent}/>
            <Stack.Screen name="editPosts" component={EditPosts}/>
            <Stack.Screen name="posts" component={Posts}/>
            <Stack.Screen name="events" component={Event}/>
            <Stack.Screen name="addReview" component={AddReview} />
            <Stack.Screen name="orgRegister" component={OrgReg} />
        </Stack.Navigator>
    )
}
import UserProfile from "./UserProfile";
import Form from "./Form";

export default function Parent() {
    const user = { 'name': 'jhansi', 'team': 'bhf' };
    return (
        <>
            <UserProfile user={user} />
            <Form />
        </>
    );

}
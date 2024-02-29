export const signOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
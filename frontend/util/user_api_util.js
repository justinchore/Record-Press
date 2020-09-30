export const createUser = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    });
};

export const fetchUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`,
    });
};

export const fetchUsers = () => {
    return $.ajax({
        methid: '/GET', 
        url: '/api/users'
    })
}
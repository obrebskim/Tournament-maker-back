interface UserResponseSucces {
    id: string;
    email: string;
}

interface UserResponseFail {
    isSuccess: false;
    message: string;
}

export type RegisterUserResponse = UserResponseSucces | UserResponseFail
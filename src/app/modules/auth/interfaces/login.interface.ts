export interface LoginRequestDTO {
    username: string;
    password: string;
}


export interface LoginResponseDTO {
    token:        string;
    refreshToken: string;
}

export interface RefreshTokenRequestDTO {
    refreshToken: string;
    token:        string;
}

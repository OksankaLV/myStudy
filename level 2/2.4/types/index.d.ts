export {};

declare module 'express-session' {
    interface SessionData {
        user: String
    }
}

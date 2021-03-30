export enum UserRolesEntities {
    basic = "basic",
    student = "student",
    anon = "anonymous",
    admin = "admin"
};

export const userRoles = Object.freeze({
    admins: [String(UserRolesEntities.admin)],
    student: [String(UserRolesEntities.student)],
    registered: [
        String(UserRolesEntities.student),
        String(UserRolesEntities.basic),
        [String(UserRolesEntities.admin)]
    ],
    all: [
        String(UserRolesEntities.student),
        String(UserRolesEntities.basic),
        String(UserRolesEntities.anon),
        [String(UserRolesEntities.admin)]
    ]
});

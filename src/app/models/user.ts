export class User {
    constructor(
        public name: string,
        public avatar: string,
        public numberOfRepos: number,
        public bio: string,
        public location: string,
        public memberSince: Date
    ){}
}

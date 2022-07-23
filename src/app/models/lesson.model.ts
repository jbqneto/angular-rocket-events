export default interface ILesson {
    id: string,
    title: string,
    slug: string,
    availableAt: Date,
    type: 'live' | 'class'
}
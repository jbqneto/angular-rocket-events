import moment from "moment";

export interface ILesson {
    id: string,
    title: string,
    slug: string,
    availableAt: Date,
    type: 'live' | 'class'
}

export class Lesson implements ILesson {
    public id!: string;
    public title!: string;
    public slug!: string;
    public availableAt!: Date;
    public type!: "live" | "class";
    public isActive: boolean = false;

    constructor() {}

    public static clone(ilesson: ILesson): Lesson {
        const lesson = new Lesson();
        lesson.id = ilesson.id;
        lesson.availableAt = ilesson.availableAt;
        lesson.slug = ilesson.id;
        lesson.title = ilesson.title;
        lesson.type = ilesson.type;

        return lesson;
    }

    public getFormatedDate(): string {
        return moment(this.availableAt).format('dd/MM/YYYY');
    }
}
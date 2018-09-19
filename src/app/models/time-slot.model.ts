export class TimeSlot {

    private description?: string;
    private dateTime: Date;

    setDateTime(dt: Date | string | number) {

        if (!(dt instanceof Date)) {
            dt = new Date(dt);
        }

        this.dateTime = dt;
    }

    getDateTime(): Date {
        return this.dateTime;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getDescription(): string {
        return this.description;
    }

    constructor(dateTime: Date | string | number, description?: string) {
        this.setDateTime(dateTime);
        this.setDescription(description);
    }
}
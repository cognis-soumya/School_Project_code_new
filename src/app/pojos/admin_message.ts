export class MessageAdmin {
    private messageId: any;
    private messageSubject: any;
    private messageBody: any;
    private date: any;
    private createdBy: any;

    constructor(
        messageId: any,
        messageSubject: any,
        messageBody: any,
        date: any,
        createdBy: any
    ){
        this.messageId = messageId;
        this.messageSubject = messageSubject;
        this.messageBody = messageBody;
        this.date = date;
        this.createdBy = createdBy;

    }

    // GETTERS
    public getMessageId(): any{
        return this.messageId;
    }
    public getMessageSubject(): any{
        return this.messageSubject;
    }
    public getMessageBody(): any{
        return this.messageBody;
    }
    public getDate(): any{
        return this.date;
    }
    public getCreatedBy(): any{
        return this.createdBy;
    }
}
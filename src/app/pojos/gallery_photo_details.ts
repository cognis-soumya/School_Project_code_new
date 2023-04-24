export class GalleryPhoto{
    url: any;
    type: any;
    galleryTypeId: any;
    caption: any;
    date: any;

    constructor(
        url: any,
        type: any,
        galleryTypeId: any,
        caption: any,
        date: any
    ){
        this.url = url;
        this.type = type;
        this.galleryTypeId = galleryTypeId;
        this.caption = caption;
        this.date = date;
    }

    // Setters 
    public setUrl(url: any){
        this.url = url;
    }

    public setType(type: any){
        this.type = type;
    }

    public setGalleryTypeId(galleryTypeId: any){
        this.galleryTypeId = galleryTypeId;
    }

    public setGalleryCaption(caption: any){
        this.caption = caption;
    }

    public setDate(date: any){
        this.date = date;
    }

    // Getters
    public getUrl(): any{
        return this.url;
    }

    public getType(): any{
        return this.type;
    }

    public getGalleryTypeId(): any{
        return this.galleryTypeId;
    }

    public getCaption(): any{
        return this.caption;
    }

    public getDate(): any{
        return this.date;
    }
}
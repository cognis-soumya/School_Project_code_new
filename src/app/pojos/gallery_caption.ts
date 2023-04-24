export class GalleryCaption{

    galleryTypeId: any;
    caption: any;

    constructor(galleryTypeId: any, caption: any){
        this.galleryTypeId = galleryTypeId;
        this.caption = caption;
    }

    // Getters 
    public getGalleryTypeId(): any{
        return this.galleryTypeId;
    }

    public getCaption(): any{
        return this.caption;
    }

    // Setters
    public setGalleryTypeId(galleryTypeId: any){
        this.galleryTypeId = galleryTypeId;
    }

    public setCaption(caption: any){
        this.caption = caption;
    }
}
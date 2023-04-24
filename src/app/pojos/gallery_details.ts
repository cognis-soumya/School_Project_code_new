export class GalleryDetails{
    caption: any;
    date: any;
    imgUrl: any;

    constructor(caption: any,
                date: any,
                imgUrl: any){
        this.caption = caption;
        this.date = date;
        this.imgUrl = imgUrl;
    }

    // Setters
    public setCaption(caption: any){
        this.caption = caption;
    }

    public setDate(date: any){
        this.date = date;
    }

    public setImgUrl(imgUrl: any){
        this.imgUrl = imgUrl;
    }

    // Getters
    public getCaption(): any{
        return this.caption;
    }

    public getDate(): any{
        return this.date;
    }

    public getImgUrl(): any{
        return this.imgUrl;
    }
}
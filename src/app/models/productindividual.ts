import { UserModel } from "./user.model";

    export interface product2 {
        id: number;
        name: string;
        description: string;
        prices: number;
        highestBid: number;
        typeId: number;
        typeName: string;
        buyingDate: Date;
        biddingEndDate: Date;
        district: string;
        subDistrict: string;
        address: string;
        photos: string[];
        ownner: UserModel;
    }

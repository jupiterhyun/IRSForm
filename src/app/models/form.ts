export class Form {
    /*part 1*/
    formType: string;
    startMonth: string;
    endMonth: string;
    endYear: string;
    partnershipID: number;
    partnershipInfo: string;
    IRScenter: string;
    isPublicTraded: boolean;
    /*part 2*/
    partnerID:string;
    parternInfo:string;
    sectionG:string;
    sectionH:string;
    sectionI1:string;
    sectionI2:boolean;
    partenerShare:string[][] = [["",""],["",""],["",""]];//3
    sectionK:string[] = ["", "", ""];
    sectionL1:string[]  = ["", "", "" ,"", ""];
    sectionL2:string;
    sectionM:boolean;
    /*part 3*/
    part31:string;
    part32:string;
    part33:string;
    part34:string;
    part35:string;
    part36a:string;
    part36b:string;
    part37:string;
    part38:string;
    part39a:string;
    part39b:string;
    part39c:string;
    part310:string;
    part311:string[] = ["", "", ""];
    part312:string;
    part313:string[] = ["", "", ""];
    part314:string[] = ["", ""];
    part315:string[] = ["", ""];
    part316:string[] = ["", "","", "","", "",""];
    part317:string[] = ["", "", ""];
    part318:string[] = ["", "", ""];
    part319:string[] = ["", ""];
    part320:string[] = ["", "","", ""];

    constructor() {
     };

    public clearPart1() {
        this.formType = null;
        this.startMonth = null;
        this.endMonth = null;
        this.endYear = null;
        this.partnershipID = null;
        this.partnershipInfo = null;
        this.IRScenter = null;
        this.isPublicTraded = null;
    }

    public clearPart2() {
        this.partnerID = null;
        this.parternInfo = null;
        this.sectionG = null;
        this.sectionH = null;
        this.sectionI1 = null;
        this.sectionI2 = null;
        this.partenerShare = [["",""],["",""],["",""]];
        this.sectionK = ["", "", ""];
        this.sectionL1  = ["", "", "" ,"", ""];
        this.sectionL2 = null;
        this.sectionM = null;
    }

    public clearPart3() {
        this.part31 = null;
        this.part32 = null;
        this.part33 = null;
        this.part34 = null;
        this.part35 = null;
        this.part36a = null;
        this.part36b = null;
        this.part37 = null;
        this.part38 = null;
        this.part39a = null;
        this.part39b = null;
        this.part39c = null;
        this.part310 = null;
        this.part311 = ["", "", ""];
        this.part312 = null;
        this.part313 = ["", "", ""];
        this.part314 = ["", ""];
        this.part315 = ["", ""];
        this.part316 = ["", "","", "","", "",""];
        this.part317 = ["", "", ""];
        this.part318 = ["", "", ""];
        this.part319 = ["", ""];
        this.part320 = ["", "","", ""];
    }

}
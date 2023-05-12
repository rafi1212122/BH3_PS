import TextMapExcelTable from "../../resources/ExcelOutputAsset/TextMap.json";

export default class TextMap {
    private constructor() { }

    public static fromHash(hash: number) {
        return (TextMapExcelTable as TextMapExcelTable).find(e => e.ID.hash === hash);
    }
}

type TextMapExcelTable = {
    Text: string
    DataImpl: {}
    ID: {
        hash: number
    }
}[]
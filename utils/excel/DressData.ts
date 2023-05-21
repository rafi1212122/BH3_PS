import DressExcelTable from "../../resources/ExcelOutputAsset/DressData.json";

export default class DressData {
    private constructor() { }

    public static fromId(id: number) {
        return DressExcelTable.find(e => e.dressID === id);
    }

    public static all() {
        return DressExcelTable;
    }
}
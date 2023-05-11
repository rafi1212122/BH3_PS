import StigmataExcelTable from "../../resources/ExcelOutputAsset/Stigmata.json";

export default class WeaponData {
    private constructor() { }

    public static fromId(id: number) {
        return StigmataExcelTable.find(e => e.ID === id);
    }

    public static all() {
        return StigmataExcelTable;
    }
}
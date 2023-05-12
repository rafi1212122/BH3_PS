import WeaponExcelTable from "../../resources/ExcelOutputAsset/WeaponData.json";

export default class WeaponData {
    private constructor() { }

    public static fromId(id: number) {
        return WeaponExcelTable.find(e => e.ID === id);
    }

    public static all() {
        return WeaponExcelTable;
    }
}
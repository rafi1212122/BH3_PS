import EquipmentLevelExcelTable from "../../resources/ExcelOutputAsset/EquipmentLevelData.json";

export default class EquipmentLevelData {
    private constructor() { }

    public static fromLevel(level: number) {
        return EquipmentLevelExcelTable.find(e => e.level === level);
    }
}
import AvatarLevelExcelTable from "../../resources/ExcelOutputAsset/AvatarLevelData.json";

export default class AvatarLevelData {
    private constructor() { }

    public static fromLevel(level: number) {
        return AvatarLevelExcelTable.find(e => e.level === level);
    }
}
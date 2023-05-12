import PlayerLevelExcelTable from "../../resources/ExcelOutputAsset/PlayerLevelData.json";

export default class PlayerLevelData {
    private constructor() { }

    public static fromLevel(level: number) {
        return PlayerLevelExcelTable.find(e => e.level === level);
    }
}
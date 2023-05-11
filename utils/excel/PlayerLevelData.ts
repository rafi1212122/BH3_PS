import PlayerLevelExcelTable from "../../resources/ExcelOutputAsset/PlayerLevel.json";

export default class PlayerLevelData {
    private constructor() { }

    public static fromLevel(level: number) {
        return PlayerLevelExcelTable.find(e => e.level === level);
    }
}
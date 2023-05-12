import ChapterGroupExcelTable from "../../resources/ExcelOutputAsset/ChapterGroupConfig.json";

export default class ChapterGroupConfig {
    private constructor() { }

    public static all() {
        return ChapterGroupExcelTable
    }

    public static fromId(id: number) {
        return ChapterGroupExcelTable.find(e => e.ID === id);
    }
}
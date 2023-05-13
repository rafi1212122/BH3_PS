import EntryThemeItemExcelTable from "../../resources/ExcelOutputAsset/EntryThemeItemData.json";

export default class EntryThemeItemData {
    private constructor() { }

    public static all() {
        return EntryThemeItemExcelTable
    }

    public static fromId(id: number) {
        return EntryThemeItemExcelTable.find(e => e.ThemeItemID === id);
    }
}
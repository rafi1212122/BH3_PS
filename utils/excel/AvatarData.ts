import AvatarExcelTable from "../../resources/ExcelOutputAsset/AvatarData.json";

export default class AvatarData {
    private constructor() { }

    public static fromId(id: number) {
        return AvatarExcelTable.find(e => e.avatarID === id);
    }

    public static all() {
        return AvatarExcelTable;
    }
}
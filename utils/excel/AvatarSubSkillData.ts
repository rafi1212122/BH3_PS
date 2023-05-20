import AvatarSubSkillExcelTable from "../../resources/ExcelOutputAsset/AvatarSubSkillData.json";

export default class AvatarSubSkillData {
    private constructor() { }

    public static fromId(id: number) {
        return AvatarSubSkillExcelTable.find(e => e.avatarSubSkillId === id);
    }

    public static all() {
        return AvatarSubSkillExcelTable;
    }
}
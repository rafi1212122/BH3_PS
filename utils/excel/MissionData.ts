import MissionExcelTable from "../../resources/ExcelOutputAsset/MissionData.json";

export default class MissionData {
    private constructor() { }

    public static fromId(id: number) {
        return (MissionExcelTable as MissionExcelTable).find(e => e.id === id);
    }

    public static all() {
        return MissionExcelTable as MissionExcelTable;
    }
}

type MissionExcelTable = {
    type: number
    subType: number
    title: {
        hash: number
    }
    description: {
        hash: number
    }
    thumb: string
    finishWay: number
    finishParaInt: number
    finishParaStr: string
    totalProgress: number
    rewardId: number
    LinkType: number
    LinkParams: number[]
    TextmapTag: {
        hash: number
    }
    LinkParamStr: string
    PreviewTime: number
    NoDisplay: boolean
    IsNeedDisplay: boolean
    Priority: number
    DataImpl: {}
    id: number
}[]